import TopFiveCategory from "./top5EachCategory.js";
import ScatterPlot from "./scatterPlot.js";
import FiveSelectedMajors from "./fiveSelectedMajors.js";
const d3 = require('d3');
const data = require('./data.json');

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

const topFiveCategory = new TopFiveCategory();
const fiveSelectedMajors = new FiveSelectedMajors(); // single factor
const scatterPlot = new ScatterPlot();

const majorCategories = [];
let categorySelector = document.getElementById("categoriesForTopFive");
for (let category in data["categories"]) {
  majorCategories.push(category);

  var optionElement = document.createElement("option");
  optionElement.value = category;
  optionElement.innerHTML = category;
  categorySelector.append(optionElement);
}

const charts = {
  oneFactor: {
    factor: "Median",
    majors: [],
    update: function() {
      fiveSelectedMajors.update(this.factor, this.majors)
    },
    init: function(factor_, majors_) {
      this.factor = factor_;
      this.majors = majors_;
      this.update();
    }
  },
  twoFactor: {
    factor1: "Median",
    factor2: "Unemployment_rate",
    majors: [],
    update: function() {
      scatterPlot.update(this.majors, this.factor1, this.factor2);
    },
    init: function(factor1_, factor2_, majors_) {
      this.factor1 = factor1_;
      this.factor2 = factor2_;
      this.majors = majors_;
      this.update();
    }
  }
};

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

// factor for single factor chart
let factorsForChooseMajors = document.getElementById("factorsForChooseMajors");

charts.oneFactor.init(factorsForChooseMajors.value, []);

factorsForChooseMajors.onchange = () => {
  charts.oneFactor.factor = factorsForChooseMajors.value;
  charts.oneFactor.update();
}

// factors for two factor chart
let xFactor = document.getElementById("xFactor");
let yFactor = document.getElementById("yFactor");

charts.twoFactor.init(xFactor.value, yFactor.value, []);

xFactor.onchange = () => {
  charts.twoFactor.factor1 = xFactor.value;
  charts.twoFactor.update();
}
yFactor.onchange = () => {
  charts.twoFactor.factor2 = yFactor.value;
  charts.twoFactor.update();
}


function drawChart(chartId, chartData, factor, yAxisData) {

  var chartDiv = document.getElementById(chartId);
  var margin = { top: 20, right: 210, bottom: 40, left: 175 };
  var width = 1100 - margin.left - margin.right;
  var height = 500 - margin.top - margin.bottom;

  document.querySelector("#" + chartId).innerHTML = "";

  const svg = d3
    .select("#" + chartId)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

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
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(yAxisData)
      .range([height, 0])
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
      .attr("width", 0)
      .transition()
      .duration(1000)
      .attr("width", function (d) {
        return xScale(d["value"]) - xScale(0);
      })
      .attr("fill", function (d) {
        if (d["value"] == 100) {
          if (factor == "Gender") {
            return COLORS.blue;
          } else {
            return COLORS.purple;
          }
        } else {
          return COLORS.pink;
        }
      });
    svg
      .selectAll("rect")
      .on("click", function (d) {
        if (chartId == "categoriesChart") {
          document.getElementById("categories").classList.add("hidden");
          document.getElementById("top5").classList.remove("hidden");
          categoriesForTopFive.value = d["name"];
          if (factor == "Gender") {
            if (d["value"] == 100) {
              factorsForTopFive.value = FACTORS.Men;
              updateTopFiveChart(FACTORS.Men, d["name"]);
            } else {
              factorsForTopFive.value = FACTORS.Women;
              updateTopFiveChart(FACTORS.Women, d["name"]);
            }
          } else {
            if (d["value"] == 100) {
              factorsForTopFive.value = FACTORS.Full_time;
              updateTopFiveChart(FACTORS.Full_time, d["name"]);
            } else {
              factorsForTopFive.value = FACTORS.Part_time;
              updateTopFiveChart(FACTORS.Part_time, d["name"]);
            }
          }
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
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("id", "y-axis")
      .call(yAxis);

  } else {
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(chartData, function (d) {
        return d["value"];
      })])
      .range([0, width]);

    const yScale = d3
      .scaleBand()
      .domain(yAxisData)
      .range([height, 0])
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
      .attr("width", 0)
      .transition()
      .duration(1000)
      .attr("width", function (d) {
        return xScale(d["value"]) - xScale(0);
      })
      .attr("fill", () => {
        if (factor == FACTORS.Unemployment_rate) {
          return COLORS.purple;
        } else {
          return COLORS.pink;
        }
      });
    svg
      .selectAll("rect")
      .on("click", function (d) {
        if (chartId == "categoriesChart") {
          document.getElementById("categories").classList.add("hidden");
          document.getElementById("top5").classList.remove("hidden");
          categoriesForTopFive.value = d["name"];
          factorsForTopFive.value = factor;
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
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg
      .append("g")
      .attr("id", "y-axis")
      .call(yAxis);
  }

  // Not sure that we should keep this x-axis label
  /*
  svg
    .append("text")
    .attr("y", "95%")
    .attr("x", "33%")
    .attr("id", "x-axis-label");

  document.getElementById("x-axis-label").innerHTML = factorInfo[factor]["axis name"];
  */

}


function updateCategoriesChart(factor) {
  let chartData = [];

  if (factor == "Gender" || factor == "WorkTime") {
    for (let category in data["categories"]) {
      chartData.push({
        "name": category,
        "value": 100
      });
    }
    for (let category in data["categories"]) {
      var sum = 0.0;
      var numMajors = data["categories"][category].length;
      for (let major in data["categories"][category]) {
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
    for (let category in data["categories"]) {
      var sum = 0.0;
      var numMajors = data["categories"][category].length;
      for (let major in data["categories"][category]) {
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
  topFiveCategory.update(factor, category, DATA_PROPERTIES.Major);
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

function updateChartMajors(graph, majors) {
  charts[graph].majors = majors;
  charts[graph].update();
}
export { updateChartMajors };