import { updateChartMajors } from "./index.js";

initModal();
let compareSelected = [];
let fewerMajorsSelected = [];
let currModal = ""
let maxSelected = 0;

function initModal() {
  let fs = require("fs");
  let data = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));
  let selector = document.getElementById("sel");

  for (let x in data["categories"]) {
    let optgroup = document.createElement("optgroup");
    optgroup.label = x;
    selector.append(optgroup);
    for (let y in data["categories"][x]) {

      let option = document.createElement("option");
      option.innerHTML = data["categories"][x][y]["Major"];
      option.value = data["categories"][x][y]["Major"];

      option.onmousedown = function(event) {
        event.preventDefault();
        var scroll_offset= this.parentElement.scrollTop;

        checkMax(this);

        this.parentElement.scrollTop = scroll_offset;
      }
      option.onmousemove = function(event) {
          event.preventDefault();
      }
      optgroup.append(option);

      option = document.createElement("option");
    }
    optgroup = document.createElement("optgroup");
  }

  document.getElementById("compare-open-button").addEventListener("click", function() {
    currModal = "compare";
    maxSelected = 15;
    setWarning();
    resetSelections(compareSelected);
  })
  document.getElementById("fewer-majors-open-button").addEventListener("click", function() {
    currModal = "fewer-majors";
    maxSelected = 5;
    setWarning();
    resetSelections(fewerMajorsSelected);
  })

  document.getElementById("sel-button").addEventListener("click", function() {
    saveSelections();
  })

  document.getElementById("desel-button").addEventListener("click", function() {
    deselectAll();
  })
}

function resetSelections(majors) {
  select(majors);
}

function deselectAll() {
  select([]);
  document.getElementById("max-warning").style.display = "none";
}

function saveSelections() {
  // TODO split
  if (currModal === "compare") {
    compareSelected = [];
    $("#sel > optgroup > option").each(function() {
        if (isSelected(this)) {
          compareSelected.push(this.value); 
        }
    });
    updateChartMajors("oneFactor", compareSelected);
  } else if (currModal === "fewer-majors") {
    fewerMajorsSelected = [];
    $("#sel > optgroup > option").each(function() {
        if (isSelected(this)) {
          fewerMajorsSelected.push(this.value); 
        }
    });


    // TODO update charts for this the section with this modal
    // updateChartMajors("twoFactor", factorsSelected);
  } else {
    alert("problem with modal state / string comparisons");
  }
}

function select(majors) {
  $("#sel > optgroup > option").each(function() {
      setOption(this, majors.includes(this.value));
  });
}

function numSelected() {
  let cnt = 0;
  $("#sel > optgroup > option").each(function() {
      if (isSelected(this)) {
        cnt += 1;
      }
  });
  return cnt;
}

function setOption(option, bool) {
  if (bool) {
    option.classList.add("selected");
    option.style.backgroundColor = "#9bb2e1";
    option.style.color = "white";
  } else {
    option.classList.remove("selected");
    option.style.backgroundColor = "white";
    option.style.color = "black";
  }
}

function isSelected(option) {
  return option.classList.contains("selected");
}

function checkMax(option) {
  if (isSelected(option) || numSelected() < maxSelected) {
    setOption(option, !isSelected(option));
    document.getElementById("max-warning").style.display = "none";
  } else {
    document.getElementById("max-warning").style.display = "inline";
  }
}

function setWarning() {
  document.getElementById("max-warning").innerHTML = 
    "Please select no more than " + maxSelected +" majors";
    document.getElementById("max-warning").style.display = "none";
}