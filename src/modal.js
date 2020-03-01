function updateGraph() {
  // call what you need in here, pass in "selected", which will give you an array of majors
  // i.e. ["Aerospace Engineering", "Materials Science"]
  // update graph will be called whenever user selects different majors in modal and saves changes
  alert(selected + "have been selected");
}

function updateModal(majors) {
  // call this with an array of majors i.e. ["Aerospace Engineering", "Materials Science"]
  // and it will make it so the modal ONLY has those majors select
  select(majors)
} 


initModal();
var selected = [];

function initModal() {
  var fs = require("fs");
  var data = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));
  var selector = document.getElementById("sel");

  for (x in data["majors"]) {
      option = document.createElement("option")
      option.innerHTML = x + " (" + data["majors"][x]['Major_category'] + ")";
      option.value = x;

      option.onclick = function() {
        option.selected = "selected";
      }

      selector.append(option);
  }

  document.getElementById("sel-button").onclick = saveSelections;
  document.getElementById("open-button").onclick = resetSelections;
}

function resetSelections() {
  select(selected);
}

function saveSelections() {
  selected = [];
  $("#sel > option").each(function() {
      if (this.selected) {
        selected.push(this.value); 
      }
  });
  updateGraph();
}

// selects given majors in modal (input example: ["Aerospace Engineering", "Materials Science"]) 
function select(majors) {
  selected = [];
  $("#sel > option").each(function() {
      this.selected = majors.includes(this.value);
      if (this.selected) {
        selected.push(this.value);
      }
  });
}