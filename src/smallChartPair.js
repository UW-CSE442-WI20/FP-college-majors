const d3 = require('d3')
let fs = require("fs");
class SmallChartPair {
  constructor(divName) {
    this.divName = divName;
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
    this.height = 300 - this.margin.top - this.margin.bottom;
    this.padding = 30;

    // append the svg object to the body of the page
    this.svg = d3.select("#" + this.divName)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom + this.padding)
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
      document.getElementById(this.divName).classList.add("hidden");
    } else {
      document.getElementById(this.divName).classList.remove("hidden");
    }

    this.drawChart(top5, factor);
  }

  processingData(factor, majorNames) {
    const database = this.database
    const selectedMajors = [];
    if(factor == FACTORS.Men) {
      majorNames.forEach((name) => {
        const major = JSON.parse(JSON.stringify(database.majors[name]));
        major[DATA_PROPERTIES.Major] = name;
        major["Value"] = major[FACTORS.Women];
        selectedMajors.push(major);
      })
      majorNames.forEach((name) => {
        const major = JSON.parse(JSON.stringify(database.majors[name]));
        major[DATA_PROPERTIES.Major] = name;
        major["Value"] = 100;
        selectedMajors.push(major);
      })  
    } else {
      majorNames.forEach((name) => {
        const major = JSON.parse(JSON.stringify(database.majors[name]));
        major[DATA_PROPERTIES.Major] = name;
        major["Value"] = major[FACTORS.Part_time];
        selectedMajors.push(major);
      })
      majorNames.forEach((name) => {
        const major = JSON.parse(JSON.stringify(database.majors[name]));
        major["Value"] = 100;
        major[DATA_PROPERTIES.Major] = name;
        selectedMajors.push(major);
      })  
    }
    selectedMajors.sort((a, b) => (a[factor] > b[factor]) ? 1 : -1)
    return selectedMajors;
  }

  drawChart(data, xProperty) {
    const tooltip = this.tooltip;
    this.x
      .domain([0, 100]);
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
      .attr("width", function (d) { return x(d["Value"]); })
      .attr("height", y.bandwidth())
      .attr("fill", (d) => {
        if (d.Value == 100) {
          if (xProperty == FACTORS.Men) {
            return COLORS.blue;
          } else {
            return COLORS.purple;
          }
        }
        return COLORS.pink;
      });

    // If less group in the new dataset, I delete the ones not in use anymore
    u
      .exit()
      .remove();
    this.svg.append("text")
    .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
    .attr("transform", "translate("+ (this.width/2) +","+(this.height + this.padding + 15)+")")  // centre below axis
    .text(TITLES[xProperty] == FACTORS.Men ? "Percentage of Men and Women" : "Percentage of Full Time and Part Time Jobs");
  
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
        function wrapTooltipText(d, factor) {
          if (factor == FACTORS.Men) {
            return d.Value == 100 ? 
            (d[FACTORS.Men].toLocaleString("en") + UNITS.Men + " " + TITLES.Men): 
            (d.Value.toLocaleString("en") + UNITS.Men + " " + TITLES.Women);
          } else {
            return d.Value == 100 ? 
            d[FACTORS.Full_time].toLocaleString("en") + UNITS.Men + " " + TITLES.Full_time : 
            d.Value.toLocaleString("en") + UNITS.Men + " " + TITLES.Part_time;
          }
        }
        const html = addTextDiv([
          wrapTooltipText(d, xProperty)
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

module.exports = SmallChartPair;