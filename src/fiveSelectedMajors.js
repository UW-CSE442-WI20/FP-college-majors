const d3 = require('d3')
let fs = require("fs");
class FiveSelectedMajors {
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

    this.database = database;
    // set the dimensions and margins of the graph
    this.margin = { top: 20, right: 210, bottom: 40, left: 270 };
    this.width = 1100 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;

    // append the svg object to the body of the page
    this.svg = d3.select("#fiveSelectedMajors")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
    this.x = d3.scaleLinear()
      .range([0, this.width]);
    this.xAxis = this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")

    // Y axis
    this.y = d3.scaleBand()
      .range([0, this.height])
      .padding(.2);
    this.yAxis = this.svg.append("g")
      .attr("class", "myYaxis")
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

  update(factor, majorNames) {
    const top5 = this.processingData(factor, majorNames);
    if (top5.length == 0) {
      document.getElementById("fiveSelectedMajors").classList.add("hidden");
    } else {
      document.getElementById("fiveSelectedMajors").classList.remove("hidden");
    }

    this.drawChart(top5, factor);
  }

  processingData(factor, majorNames) {
    const database = this.database
    const selectedMajors = [];
    majorNames.forEach((name) => {
      const major = database.majors[name];
      major[DATA_PROPERTIES.Major] = name;
      selectedMajors.push(major);
    })
    selectedMajors.sort((a, b) => (a[factor] > b[factor]) ? 1 : -1)
    return selectedMajors;
  }

  drawChart(data, xProperty) {
    const tooltip = this.tooltip;
    // Add X axis
    let minX, minY, maxX, maxY;
    maxX = this.maxPropertyValue(xProperty, data);

    this.x
      .domain([0, maxX]);
    this.xAxis
      .transition().duration(1000)
      .call(d3.axisBottom(this.x).tickSizeOuter(0))
    this.y
      .domain(data.map(function (d) { return d[DATA_PROPERTIES.Major]; }))
    this.yAxis
      .call(d3.axisLeft(this.y).tickSizeOuter(0))
    var x = this.x;
    var y = this.y;
    //Bars
    var u = this.svg.selectAll("rect")
      .data(data)

    u.enter()
      .append("rect")
      .merge(u)
      .transition()
      .duration(1000)
      .attr("x", this.x(0))
      .attr("y", function (d) { return y(d[DATA_PROPERTIES.Major]); })
      .attr("width", function (d) { return x(d[xProperty]); })
      .attr("height", y.bandwidth())
      .attr("fill", () => {
        if (xProperty == FACTORS.Men) {
          return COLORS.blue;
        } else if (xProperty == FACTORS.Unemployment_rate || xProperty == FACTORS.Full_time) {
          return COLORS.purple;
        } else {
          return COLORS.pink;
        }
      })
    // If less group in the new dataset, I delete the ones not in use anymore
    u
      .exit()
      .remove();
    this.svg.selectAll("rect")
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
            return TITLES.Median + ": " + value.toLocaleString('us-US', { style: 'currency', currency: 'USD' })
          } else {
            return value.toLocaleString("en") + UNITS.Men + " " + TITLES[factor]
          }
        }
        const html = addTextDiv([
          wrapTooltipText(d[xProperty], xProperty)
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

  random() {
    return Math.floor(Math.random() * (15 - 10 + 1) + 10) / 100 + 1;
  }
  maxPropertyValue(property, data) {
    let maxValue;
    if (property == FACTORS.Median) {
      maxValue = d3.max(data.map(function (d) { return d[property]; })) * 1.1;
    } else {
      maxValue = d3.max(data.map(function (d) { return d[property]; }));
    }
    return maxValue;
  }

  minPropertyValue(property, data) {
    let minValue;
    if (property == FACTORS.Median) {
      minValue = d3.min(data.map(function (d) { return d[property]; })) * 0.9;
    } else {
      minValue = d3.min(data.map(function (d) { return d[property]; }));
    }
    return minValue;
  }
}

module.exports = FiveSelectedMajors;