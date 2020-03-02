const d3 = require('d3')
const database = require('./data.json');

class FiveSelectedMajors {
  constructor() {
    // set the dimensions and margins of the graph
    this.margin = { top: 20, right: 30, bottom: 40, left: 400 };
    this.width = 860 - this.margin.left - this.margin.right,
      this.height = 400 - this.margin.top - this.margin.bottom;

    // append the svg object to the body of the page
    this.svg = d3.select("#fiveSelectedMajors")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
    this.x = d3.scaleLinear()
      // .domain([0, 13000])
      .range([0, this.width]);
    this.xAxis = this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
    // .call(d3.axisBottom(x))
    // .selectAll("text")
    // .attr("transform", "translate(-10,0)rotate(-45)")
    // .style("text-anchor", "end");

    // Y axis
    this.y = d3.scaleBand()
      .range([0, this.height])
      // .domain(data.map(function (d) { return d.Country; }))
      .padding(.2);
    this.yAxis = this.svg.append("g")
      .attr("class", "myYaxis")
    // .call(d3.axisLeft(y))
  }

  update(factor, category, yProperty) {
    const top5 = this.processingData(factor, category);
    this.drawChart(top5, factor, yProperty);
  }

  processingData(factor, majorNames) {
    const selectedMajors = [];
    majorNames.forEach((name) => {
      selectedMajors.push(database.majors[name]);
    })
    selectedMajors.sort((a, b) => (a[factor] < b[factor]) ? 1 : -1)
    if (factor == FACTORS.Men || factor == FACTORS.Women) {
      selectedMajors.forEach((major) => {
        const total = major.Men + major.Women;
        major[FACTORS.Men] = major.Men*100 / total;
        major[FACTORS.Women] = major.Women*100 / total;
        return major;
      });
    }
    if (factor == FACTORS.Full_time || factor == FACTORS.Part_time) {
      selectedMajors.forEach((major) => {
        const total = major.Full_time + major.Part_time;
        major[FACTORS.Full_time] = major.Full_time*100 / total;
        major[FACTORS.Part_time] = major.Part_time*100 / total;
        return major;
      });
    }
    return selectedMajors;
  }

  drawChart(data, xProperty, yProperty) {
    // Add X axis
    this.x
      .domain([0, d3.max(data.map(function (d) { return d[xProperty]; }))]);
    this.xAxis
      .transition().duration(1000)
      .call(d3.axisBottom(this.x))
    this.y
      .domain(data.map(function (d) { return d[yProperty]; }))
    this.yAxis
      .call(d3.axisLeft(this.y))
    this.yAxis
      .transition().duration(3000)
      .call(d3.axisLeft(this.y));
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
      .attr("y", function (d) { return y(d[yProperty]); })
      .attr("width", function (d) { return x(d[xProperty]); })
      .attr("height", y.bandwidth())
      .attr("fill", "#69b3a2")
    // If less group in the new dataset, I delete the ones not in use anymore
    u
      .exit()
      .remove()
  }
}

module.exports = FiveSelectedMajors;