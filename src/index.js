
const d3 = require('d3')

/* Sample code provided to us:
// You can include local JS files:
const MyClass = require('./my-class');
const myClassInstance = new MyClass();
myClassInstance.sayHi();


// You can load JSON files directly via require.
// Note this does not add a network request, it adds
// the data directly to your JavaScript bundle.
const exampleData = require('./example-data.json');


// Anything you put in the static folder will be available
// over the network, e.g.
d3.csv('carbon-emissions.csv')
  .then((data) => {
    console.log('Dynamically loaded CSV data', data);
  })
*/


const data = require('./data.json');


const majorCategories = [];
for (category in data["categories"]) {
  majorCategories.push(category);
}

const factorInfo = {
  "Median": {
    "units": "$",
    "axis name": "Median Pay ($)"
  },
  "Unemployment_rate": {
    "units": "%",
    "axis name": "Unemployment Rate (%)"
  },
  "Gender": {
    "units": "%",
    "axis name": "Percentage of Men vs. Women"
  },
  "WorkTime": {
    "units": "%",
    "axis name": "Percentage of Jobs that are Full Time vs. Part Time"
  }
};


document.getElementById("backButton").onclick = () => {
  document.getElementById("top5").classList.add("hidden");
  document.getElementById("categories").classList.remove("hidden");
}

let factorsForCategories = document.getElementById("factorsForCategories");
updateCategoriesChart(factorsForCategories.value);
factorsForCategories.onchange = () => {
  updateCategoriesChart(factorsForCategories.value);
}

let factorsForTopFive = document.getElementById("factorsForTopFive");
let categoriesForTopFive = document.getElementById("categoriesForTopFive");
factorsForTopFive.onchange = () => {
  updateTopFiveChart(factorsForTopFive.value, categoriesForTopFive.value);
}
categoriesForTopFive.onchange = () => {
  updateTopFiveChart(factorsForTopFive.value, categoriesForTopFive.value);
}

let majorsForChooseMajors = document.getElementById("majorsForChooseMajors");
let factorsForChooseMajors = document.getElementById("factorsForChooseMajors");
let majorOptions = document.querySelectorAll("#majorsForChooseMajors option");
updateChooseMajorChart(factorsForChooseMajors.value, []);
majorsForChooseMajors.onchange = () => {
  var selectedOptions = [];
  for (var i = 0; i < majorOptions.length; i++) {
    if (majorOptions[i].selected) {
      selectedOptions.push(majorOptions[i].value);
    }
  }
  updateChooseMajorChart(factorsForChooseMajors.value, selectedOptions);
}
factorsForChooseMajors.onchange = () => {
  var selectedOptions = [];
  for (var i = 0; i < majorOptions.length; i++) {
    if (majorOptions[i].selected) {
      selectedOptions.push(majorOptions[i].value);
    }
  }
  updateChooseMajorChart(factorsForChooseMajors.value, selectedOptions);
}

let majorsForSelectFactors = document.getElementById("majorsForSelectFactors");
let xFactor = document.getElementById("xFactor");
let yFactor = document.getElementById("yFactor");
updateChooseFactorsChart([], xFactor.value, yFactor.value);
majorsForSelectFactors.onchange = () => {
  var selectedOptions = [];
  for (var i = 0; i < majorOptions.length; i++) {
    if (majorOptions[i].selected) {
      selectedOptions.push(majorOptions[i].value);
    }
  }
  updateChooseFactorsChart(selectedOptions, xFactor.value, yFactor.value);
}
xFactor.onchange = () => {
  var selectedOptions = [];
  for (var i = 0; i < majorOptions.length; i++) {
    if (majorOptions[i].selected) {
      selectedOptions.push(majorOptions[i].value);
    }
  }
  updateChooseFactorsChart(selectedOptions, xFactor.value, yFactor.value);
}
yFactor.onchange = () => {
  var selectedOptions = [];
  for (var i = 0; i < majorOptions.length; i++) {
    if (majorOptions[i].selected) {
      selectedOptions.push(majorOptions[i].value);
    }
  }
  updateChooseFactorsChart(selectedOptions, xFactor.value, yFactor.value);
}




function drawChart(chartId, chartData, factor, yAxisData) {

  var chartDiv = document.getElementById(chartId);
  chartDiv.style.width = "75rem";
  chartDiv.style.height = "55rem";
  var w = window.getComputedStyle(chartDiv).width;
  var h = window.getComputedStyle(chartDiv).height;
  w = w.substring(0, w.length - 2);
  h = h.substring(0, h.length - 2);
  const padding = w * 0.15;

  document.querySelector("#" + chartId).innerHTML = "";

  const svg = d3
    .select("#" + chartId)
    .append("svg");

  const tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("color", "#fff5e6")
      .style("background-color", "#3f546c")
      .style("padding", "6px 10px")
      .style("font-family", "formular-light")
      .style("font-size", "0.8rem")
      .style("visibility", "hidden");

  if (factor == "Gender" || factor == "WorkTime") {
    const xScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain(yAxisData)
      .range([h - padding, padding])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const xAxis = d3.axisBottom().scale(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft().scale(yScale).tickSizeOuter(0);

    svg
      .selectAll("rect")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return xScale(0);
      })
      .attr("y", function (d) {
        return yScale(d["name"]) + yScale.bandwidth() / 4;
      })
      .attr("height", yScale.bandwidth() / 2)
      .attr("width", function (d) {
        return xScale(d["value"]) - xScale(0);
      })
      .attr("fill", function(d) {
        if (d["value"] == 100) {
          return "blue";
        } else {
          return "green";
        }
      })
      .on("click", function(d) {
        if (chartId == "categoriesChart") {
          document.getElementById("categories").classList.add("hidden");
          document.getElementById("top5").classList.remove("hidden");
          updateTopFiveChart(factor, d["name"]);
        }
      })
      .on("mouseover", function (d) {
        d3.select(this).transition()
          .duration('50')
          .attr('opacity', '.85');
        var text = "";
        if (factor == "Gender") {
          var value = d["value"];
          if (value == 100) {
            for (var i = 0; i < chartData.length; i++) {
              if (chartData[i]["name"] == d["name"] && chartData[i]["value"] != 100) {
                value = (100 - chartData[i]["value"]).toFixed(2);
                break;
              }
            }
            text = text + value + "% men";
          } else {
            text = text + value + "% women";
          }
        } else {
          var value = d["value"];
          if (value == 100) {
            for (var i = 0; i < chartData.length; i++) {
              if (chartData[i]["name"] == d["name"] && chartData[i]["value"] != 100) {
                value = (100 - chartData[i]["value"]).toFixed(2);
                break;
              }
            }
            text = text + value + "% full time";
          } else {
            text = text + value + "% part time";
          }
        }
        return tooltip.style("visibility", "visible").html("<div>" + text + "</div>");
      })
      .on("mousemove", function () {
        return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function () {
        d3.select(this).transition()
          .duration('50')
          .attr('opacity', '1');
        return tooltip.style("visibility", "hidden");
      });

    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);

  } else {
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, function(d) {
        return d["value"];
      })])
      .range([padding, w - padding]);

    const yScale = d3
      .scaleBand()
      .domain(yAxisData)
      .range([h - padding, padding])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    const xAxis = d3.axisBottom().scale(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft().scale(yScale).tickSizeOuter(0);

    svg
      .selectAll("rect")
      .data(chartData)
      .enter()
      .append("rect")
      .attr("x", function (d) {
        return xScale(0);
      })
      .attr("y", function (d) {
        return yScale(d["name"]) + yScale.bandwidth() / 4;
      })
      .attr("height", yScale.bandwidth() / 2)
      .attr("width", function (d) {
        return xScale(d["value"]) - xScale(0);
      })
      .attr("fill", "blue")
      .on("click", function(d) {
        if (chartId == "categoriesChart") {
          document.getElementById("categories").classList.add("hidden");
          document.getElementById("top5").classList.remove("hidden");
          updateTopFiveChart(factor, d["name"]);
        }
      })
      .on("mouseover", function (d) {
        d3.select(this).transition()
          .duration('50')
          .attr('opacity', '.85');
        var text = "" + d["value"];
        if (factor == "Median") {
          text = factorInfo[factor]["units"] + addCommasToNumber(text);
        } else {
          text = text + factorInfo[factor]["units"];
        }
        return tooltip.style("visibility", "visible").html("<div>" + text + "</div>");
      })
      .on("mousemove", function () {
        return tooltip.style("top", (event.pageY - 10) + "px").style("left", (event.pageX + 10) + "px");
      })
      .on("mouseout", function () {
        d3.select(this).transition()
          .duration('50')
          .attr('opacity', '1');
        return tooltip.style("visibility", "hidden");
      });

    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate(" + padding + ",0)")
      .call(yAxis);
  }

  svg
    .append("text")
    .attr("y", h - (padding * 0.7))
    .attr("x", (w - padding) / 2)
    .attr("id", "x-axis-label");

  document.getElementById("x-axis-label").innerHTML = factorInfo[factor]["axis name"];

}



function updateCategoriesChart(factor) {
  chartData = [];

  if (factor == "Gender" || factor == "WorkTime") {
    for (category in data["categories"]) {
      chartData.push({
        "name": category,
        "value": 100
      });
    }
    for (category in data["categories"]) {
      var sum = 0.0;
      var numMajors = data["categories"][category].length;
      for (major in data["categories"][category]) {
        if (factor == "Gender") {
          sum += (data["categories"][category][major]["ShareWomen"] * 100);
        } else {
          var partTime = data["categories"][category][major]["Part_time"]
          var percent = (partTime * 1.0) / (partTime + data["categories"][category][major]["Full_time"])
          sum += (percent * 100);
        }
      }
      chartData.push({
        "name": category,
        "value": (sum / numMajors).toFixed(2)
      });
    }
  } else {
    for (category in data["categories"]) {
      var sum = 0.0;
      var numMajors = data["categories"][category].length;
      for (major in data["categories"][category]) {
        if (factor == "Unemployment_rate") {
          sum += (data["categories"][category][major][factor] * 100);
        } else {
          sum += data["categories"][category][major][factor];
        }
      }
      chartData.push({
        "name": category,
        "value": (sum / numMajors).toFixed(2)
      });
    }
  }

  drawChart("categoriesChart", chartData, factor, majorCategories);

}

function updateTopFiveChart(factor, category) {
  // TODO
}

function updateChooseMajorChart(factor, majors) {
  if (majors.length > 5) {
    var chartDiv = document.getElementById("majorsForChooseMajors");
    chartDiv.innerHTML = "<p>Please select no more than 5 majors to display at once.</p>" + chartDiv.innerHTML;
  }

  // TODO
}

function updateChooseFactorsChart(majors, factorXAxis, factorYAxis) {
  if (majors.length > 5) {
    var chartDiv = document.getElementById("majorsForSelectFactors");
    chartDiv.innerHTML = "<p>Please select no more than 5 majors to display at once.</p>" + chartDiv.innerHTML;
  }

  // TODO
}

function addCommasToNumber(text) {
  var result = "";
  var dotIndex = text.indexOf(".");
  var startIndex = text.length - 1;
  if (dotIndex >= 0) {
    result = text.substring(dotIndex);
    startIndex = dotIndex - 1;
  }
  var num = 0;
  for (var i = startIndex; i >= 0; i--) {
    result = text[i] + result;
    num += 1;
    if (num == 3 && i != 0) {
      result = "," + result;
      num = 0;
    }
  }
  return result;
}
