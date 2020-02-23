
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
  // TODO
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

