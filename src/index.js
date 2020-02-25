
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




const majorCategories = ["Business", "Engineering", "Science"];
const factorInfo = {
  "Median": {
    "units": "$",
    "axis name": "Median Pay ($)"
  },
  "Unemployment_rate": {
    "units": "%",
    "axis name": "Unemployment Rate (%)"
  },
  "ShareWomen": {
    "units": "%",
    "axis name": "Percent who are Women"
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

function updateCategoriesChart(factor) {
  const data = {
    "Business": {
      "Median": 80000,
      "Unemployment_rate": 2,
      "ShareWomen": 40
    },
    "Engineering": {
      "Median": 100000,
      "Unemployment_rate": 1,
      "ShareWomen": 35
    },
    "Science": {
      "Median": 70000,
      "Unemployment_rate": 3,
      "ShareWomen": 39
    }
  };

  var maxValue = 1;
  for (var i = 0; i < majorCategories.length; i++) {
    maxValue = Math.max(maxValue, data[majorCategories[i]][factor]);
  }

  var categoriesChartDiv = document.getElementById("categoriesChart");
  categoriesChartDiv.style.width = "45rem";
  categoriesChartDiv.style.height = "30rem";
  var w = window.getComputedStyle(categoriesChartDiv).width;
  var h = window.getComputedStyle(categoriesChartDiv).height;
  w = w.substring(0, w.length - 2);
  h = h.substring(0, h.length - 2);
  const padding = w * 0.15;

  document.querySelector("#categoriesChart svg").innerHTML = "";

  const xScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([padding, w - padding]);

  const yScale = d3
    .scaleBand()
    .domain(majorCategories)
    .range([h - padding, padding])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  const xAxis = d3.axisBottom().scale(xScale).tickSizeOuter(0);
  const yAxis = d3.axisLeft().scale(yScale).tickSizeOuter(0);
  const svg = d3
    .select("#categoriesChart")
    .select("svg");

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

  svg
    .selectAll("rect")
    .data(majorCategories)
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return xScale(0);
    })
    .attr("y", function (d) {
      return yScale(d) + yScale.bandwidth() / 4;
    })
    .attr("height", yScale.bandwidth() / 2)
    .attr("width", function (d) {
      return xScale(data[d][factor]) - xScale(0);
    })
    .attr("fill", "blue")
    .on("click", function(d) {
      document.getElementById("categories").classList.add("hidden");
      document.getElementById("top5").classList.remove("hidden");
      updateTopFiveChart(factor, d);
    })
    .on("mouseover", function (d) {
      d3.select(this).transition()
        .duration('50')
        .attr('opacity', '.85');
      var text = "" + data[d][factor];
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

  svg
    .append("text")
    .attr("y", h - padding / 2)
    .attr("x", (w - padding) / 2)
    .attr("id", "x-axis-label");

  document.getElementById("x-axis-label").innerHTML = factorInfo[factor]["axis name"];

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
  var num = 0;
  for (var i = text.length - 1; i >= 0; i--) {
    result = text[i] + result;
    num += 1;
    if (num == 3 && i != 0) {
      result = "," + result;
      num = 0;
    }
  }
  return result;
}

