const d3 = require('d3')
const database = require('./data.json');

class ScatterPlot {
  constructor() {
    data = [ {
      "Rank": 1,
      "Major_code": 2419,
      "Total": 2339,
      "Men": 2057,
      "Women": 282,
      "Major_category": "Engineering",
      "ShareWomen": 0.120564344,
      "Sample_size": 36,
      "Employed": 1976,
      "Full_time": 1849,
      "Part_time": 270,
      "Full_time_year_round": 1207,
      "Unemployed": 37,
      "Unemployment_rate": 0.018380527,
      "Median": 110000,
      "P25th": 95000,
      "P75th": 125000,
      "College_jobs": 1534,
      "Non_college_jobs": 364,
      "Low_wage_jobs": 193
   },
   {
      "Rank": 2,
      "Major_code": 2416,
      "Total": 756,
      "Men": 679,
      "Women": 77,
      "Major_category": "Engineering",
      "ShareWomen": 0.101851852,
      "Sample_size": 7,
      "Employed": 640,
      "Full_time": 556,
      "Part_time": 170,
      "Full_time_year_round": 388,
      "Unemployed": 85,
      "Unemployment_rate": 0.117241379,
      "Median": 75000,
      "P25th": 55000,
      "P75th": 90000,
      "College_jobs": 350,
      "Non_college_jobs": 257,
      "Low_wage_jobs": 50
   },
   {
      "Rank": 3,
      "Major_code": 2415,
      "Total": 856,
      "Men": 725,
      "Women": 131,
      "Major_category": "Engineering",
      "ShareWomen": 0.153037383,
      "Sample_size": 3,
      "Employed": 648,
      "Full_time": 558,
      "Part_time": 133,
      "Full_time_year_round": 340,
      "Unemployed": 16,
      "Unemployment_rate": 0.024096386,
      "Median": 73000,
      "P25th": 50000,
      "P75th": 105000,
      "College_jobs": 456,
      "Non_college_jobs": 176,
      "Low_wage_jobs": 0
   }]
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
    this.x
      .domain([0, d3.max(data.map(function (d) { return d[xProperty]; }))]);
    this.xAxis
      .transition().duration(1000)
      .call(d3.axisBottom(this.x))
    this.y
      .domain([0, d3.max(data.map(function (d) { return d[yProperty]; }))])
    this.yAxis
      .transition().duration(1000)
      .call(d3.axisLeft(this.y));
    // Add dots
    var x = this.x;
    var y = this.y;
    const tooltip = this.tooltip;
    this.svg
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return x(d[xProperty]); })
      .attr("cy", function (d) { return y(d[yProperty]); })
      .attr("r", 7)
      .style("fill", "#69b3a2")
      .on("mouseover", function (d) {
        return tooltip.style("visibility", "visible").text(
          d["Median"] + " " + d["Full_time"]
        );
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
    const data = this.processingData(majors);
    this.drawChart(data, factorXAxis, factorYAxis);
  }

  processingData(majorNames) {
    const selectedMajors = [];
    majorNames.forEach((name) => {
      const major = database.majors[name];
      major[DATA_PROPERTIES.Major] = name;
      selectedMajors.push(major);
    })
    selectedMajors.forEach((major) => {
      let total = major.Men + major.Women;
      major[FACTORS.Men] = major.Men * 100 / total;
      major[FACTORS.Women] = major.Women * 100 / total;
      total = major.Full_time + major.Part_time;
      major[FACTORS.Full_time] = major.Full_time * 100 / total;
      major[FACTORS.Part_time] = major.Part_time * 100 / total;
      major[FACTORS.Unemployment_rate] = major[FACTORS.Unemployment_rate]*100;
      return major;
    });
    // selectedMajors.sort((a, b) => (a[factor] > b[factor]) ? 1 : -1)
    return selectedMajors;
  }
}

module.exports = ScatterPlot;