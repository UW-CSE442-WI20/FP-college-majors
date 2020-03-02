function updateGraph() {
  // call what you need in here, pass in "selected", which will give you an array of majors
  // i.e. ["Aerospace Engineering", "Materials Science"]
  // update graph will be called whenever user selects different majors in modal and saves changes
  
  // alert(selected + "have been selected");
}

function updateModal(majors) {
  // call this with an array of majors i.e. ["Aerospace Engineering", "Materials Science"]
  // and it will make it so the modal ONLY has those majors select
  select(majors);
} 

initModal();
var selected = [];

// make const?
var compareModal = {
  modalId: "",
  selectId: "",
  openId: "",
  deselId: "",
  selId: "",
};


var factorsModal = {
  modalId: "",
  selectId: "",
  openId: "",
  deselId: "",
  selId: "",
};


function initModal() {
  var fs = require("fs");
  var data = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));
  var selector = document.getElementById("sel");

  var option;
  var optgroup;

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
    }
  }


  document.getElementById("sel-button").addEventListener("click", function() {
    saveSelections();
  })

  document.getElementById("open-button").addEventListener("click", function() {
    resetSelections();
  })

  document.getElementById("desel-button").addEventListener("click", function() {
    deselectAll();
  })

  option = document.createElement("option"); // quick fix for problem with last item always getting selected
  optgroup = document.createElement("optgroup");
}

function resetSelections() {
  select(selected, "sel");
}

function deselectAll() {
  tmp = selected;
  select([], "sel");
  selected = tmp;
}

function saveSelections() {
  selected = [];
  $("#sel > optgroup > option").each(function() {
      if (this.selected) {
        selected.push(this.value); 
      }
  });
  updateGraph();
}

// selects given majors in modal (input example: ["Aerospace Engineering", "Materials Science"]) 
function select(majors, selectID) {
  selected = [];
  $("#" + selectID + " > optgroup > option").each(function() {
      this.selected = majors.includes(this.value);
      if (this.selected) {
        selected.push(this.value);
      }
  });
}