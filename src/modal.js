function updateGraph(majors) {
  // call what you need in here, pass in "selected", which will give you an array of majors
  // i.e. ["Aerospace Engineering", "Materials Science"]
  // update graph will be called whenever user selects different majors in modal and saves changes
  
  if (currModal === "compare") {
    // do something with majors in compare 5 graph
  } else if (currModal === "factors") {
    // do something with majors in factors graph
  } else {
    alert("problem with modal state / string comparisons")
  }
}

function updateModal(majors) {
  // call this with an array of majors i.e. ["Aerospace Engineering", "Materials Science"]
  // and it will make it so the modal ONLY has those majors select
  select(majors);

  // need to make second bool parameter to choose which modal to update
}

initModal();
var compareSelected = [];
var factorsSelected = [];
var currModal = ""

function initModal() {
  var fs = require("fs");
  var data = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));
  var selector = document.getElementById("sel");

  for (x in data["categories"]) {
    optgroup = document.createElement("optgroup");
    optgroup.label = x;
    selector.append(optgroup);
    for (y in data["categories"][x]) {

      option = document.createElement("option");
      option.innerHTML = data["categories"][x][y]["Major"];
      option.value = data["categories"][x][y]["Major"];

      option.onclick = function() {
        option.selected = "selected";
      }

      // fix ctrl problem
      option.onmousedown = function(event) {
        event.preventDefault();
        var scroll_offset= this.parentElement.scrollTop;
        this.selected= !this.selected;
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
  document.getElementById("factors-open-button").addEventListener("click", function() {
    currModal = "factors";
    resetSelections(factorsSelected);
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
  tmp = selected;
  select([]);
  selected = tmp;
}

function saveSelections() {
  selected = [];

  // TODO split
  if (currModal === "compare") {
    compareSelected = [];
    $("#sel > optgroup > option").each(function() {
        if (this.selected) {
          compareSelected.push(this.value); 
        }
    });
  } else if (currModal === "factors") {
    factorsSelected = [];
    $("#sel > optgroup > option").each(function() {
        if (this.selected) {
          factorsSelected.push(this.value); 
        }
    });
  } else {
    alert("problem with modal state / string comparisons");
  }

  updateGraph(selected);
}

// selects given majors in modal (input example: ["Aerospace Engineering", "Materials Science"]) 
function select(majors) {
  selected = [];
  $("#sel > optgroup > option").each(function() {
      this.selected = majors.includes(this.value);
      if (this.selected) {
        selected.push(this.value);
      }
  });
}