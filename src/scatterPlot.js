const d3 = require('d3')
let fs = require("fs");
class ScatterPlot {
  constructor() {
    const database = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));
    for (const key of Object.keys(database.majors)) {
      const major = database.majors[key];
      let total = major.Men + major.Women;
      major[FACTORS.Men] = major.Men * 100 / total;
      major[FACTORS.Women] = major.Women * 100 / total;
      total = major.Full_time + major.Part_time;
      major[FACTORS.Full_time] = major.Full_time * 100 / total;
      major[FACTORS.Part_time] = major.Part_time * 100 / total;
      major[FACTORS.Unemployment_rate] = major[FACTORS.Unemployment_rate] * 100;
    }

    this.database = database
    // set the dimensions and margins of the graph
    this.margin = { top: 10, right: 30, bottom: 30, left: 60 };
    this.width = 460 - this.margin.left - this.margin.right;
    this.height = 400 - this.margin.top - this.margin.bottom;

    // append the svg object to the body of the page
    this.svg = d3.select("#scatterPlot")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
    // Add X axis
    this.x = d3.scaleLinear()
      .range([0, this.width]);
    this.xAxis = this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")

    // Add Y axis
    this.y = d3.scaleLinear()
      .range([this.height, 0]);
    this.yAxis = this.svg.append("g")

    this.tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("color", "#fff5e6")
      .style("background-color", "#3f546c")
      .style("padding", "6px 10px")
      .style("font-family", "formular-light")
      .style("font-size", "0.8rem")
      .style("visibility", "hidden");
  }

  drawChart(data, xProperty, yProperty) {
    console.log(data)
    let minX, minY, maxX, maxY;
    maxX = d3.max(data.map(function (d) { return d[xProperty]; })) * 1.1;
    maxY = d3.max(data.map(function (d) { return d[yProperty]; })) * 1.1;
    minX = d3.min(data.map(function (d) { return d[xProperty]; })) * 0.9;
    minY = d3.min(data.map(function (d) { return d[yProperty]; })) * 0.9;

    this.x
      .domain([minX, maxX]);
    this.xAxis
      .transition().duration(1000)
      .call(d3.axisBottom(this.x))
    this.y
      .domain([minY, maxY])
    this.yAxis
      .transition().duration(1000)
      .call(d3.axisLeft(this.y));
    // Add dots
    var x = this.x;
    var y = this.y;
    const tooltip = this.tooltip;
    this.svg.selectAll("circle").transition()
      .style("opacity", 0)
      .remove();
    this.svg
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return x(d[xProperty]); })
      .attr("cy", function (d) { return y(d[yProperty]); })
      .attr("r", 3)
      .style("fill", "#69b3a2")
      .on("mouseover", function (d) {
        function addTextDiv(texts) {
          let html = "<div>";
          texts.forEach(text => {
            html += text + "<br />";
          });
          html += "</div>";
          return html;
        }
        function wrapTooltipText(value, factor) {
          if (factor == FACTORS.Median) {
            return value.toLocaleString('us-US', { style: 'currency', currency: 'USD' }) + " " + factor
          } else {
            return value.toLocaleString("en") + UNITS.Men + " " + factor.replace('_', ' ')
          }
        }
        const html = addTextDiv([
          d[DATA_PROPERTIES.Major],
          wrapTooltipText(d[xProperty], xProperty),
          wrapTooltipText(d[yProperty], yProperty)
        ]);
        return tooltip.style("visibility", "visible").html(html);
      })

      // we move tooltip during of "mousemove"

      .on("mousemove", function () {
        return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px");
      })

      // we hide our tooltip on "mouseout"

      .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
      });
  }

  update(majors, factorXAxis, factorYAxis) {
    let data = this.processingData(majors);
    this.drawChart(data, factorXAxis, factorYAxis);
  }

  processingData(majorNames) {
    const database = this.database
    let selectedMajors = [];
    majorNames.forEach((name) => {
      const major = database.majors[name];
      major[DATA_PROPERTIES.Major] = name;
      selectedMajors.push(major);
    })
    return selectedMajors;
  }
}

module.exports = ScatterPlot;