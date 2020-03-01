const d3 = require('d3')

// set the dimensions and margins of the graph
var margin = { top: 20, right: 30, bottom: 40, left: 400 },
  width = 860 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#top5EachCategory")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");
var x = d3.scaleLinear()
  // .domain([0, 13000])
  .range([0, width]);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  // .call(d3.axisBottom(x))
  // .selectAll("text")
// .attr("transform", "translate(-10,0)rotate(-45)")
// .style("text-anchor", "end");

// Y axis
var y = d3.scaleBand()
  .range([0, height])
  // .domain(data.map(function (d) { return d.Country; }))
  .padding(.2);
var yAxis = svg.append("g")
  .attr("class", "myYaxis")
  // .call(d3.axisLeft(y))

export function updateTop5EachCategory(data, xProperty, yProperty) {
  // Add X axis
  x
    .domain([0, d3.max(data.map(function(d) { return d[xProperty]; }))]);
  xAxis
    .transition().duration(1000)
    .call(d3.axisBottom(x))
  y
    .domain(data.map(function (d) { return d[yProperty]; }))
  yAxis
    .call(d3.axisLeft(y))
  yAxis
    .transition().duration(3000)
    .call(d3.axisLeft(y));
  
  //Bars
  var u = svg.selectAll("rect")
    .data(data)

  u .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
    .attr("x", x(0))
    .attr("y", function (d) { return y(d[yProperty]); })
    .attr("width", function (d) { return x(d[xProperty]); })
    .attr("height", y.bandwidth())
    .attr("fill", "#69b3a2")
    // If less group in the new dataset, I delete the ones not in use anymore
    u
    .exit()
    .remove()
}