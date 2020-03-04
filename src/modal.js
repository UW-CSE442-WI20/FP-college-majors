import { updateChartMajors } from "./index.js";

initModal();
let compareSelected = [];
let singleSelected = [];
let currModal = ""

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

      // fix ctrl problem
      option.onmousedown = function(event) {
        event.preventDefault();
        var scroll_offset= this.parentElement.scrollTop;

        if (this.selected || numSelected() < 15) {
          this.selected = !this.selected;
          document.getElementById("max-warning").style.display = "none";
        } else {
          document.getElementById("max-warning").style.display = "inline";
        }

        this.parentElement.scrollTop= scroll_offset;
      }
      option.onmousemove = function(event) {
          event.preventDefault();
      }
      optgroup.append(option);

      option = document.createElement("option"); // TODO fix this
    }
    optgroup = document.createElement("optgroup"); // TODO fix this
  }

  document.getElementById("compare-open-button").addEventListener("click", function() {
    currModal = "compare";
    resetSelections(compareSelected);
  })
  document.getElementById("single-open-button").addEventListener("click", function() {
    currModal = "single";
    resetSelections(singleSelected);
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
        if (this.selected) {
          compareSelected.push(this.value); 
        }
    });
    updateChartMajors("oneFactor", compareSelected);
  } else if (currModal === "single") {
    singleSelected = [];
    $("#sel > optgroup > option").each(function() {
        if (this.selected) {
          singleSelected.push(this.value); 
        }
    });
    updateChartMajors("twoFactor", factorsSelected);
  } else {
    alert("problem with modal state / string comparisons");
  }
}

function select(majors) {
  $("#sel > optgroup > option").each(function() {
      this.selected = majors.includes(this.value);
  });
}

function numSelected() {
  let cnt = 0;
  $("#sel > optgroup > option").each(function() {
      if (this.selected) {
        cnt += 1;
      }
  });
  return cnt;
}