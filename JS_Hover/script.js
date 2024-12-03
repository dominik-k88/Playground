
document.querySelector("#chck").addEventListener("click", changer);

var check = document.querySelector("#chck");
var box = document.querySelector("#fB");

// Event listener functions
var mouseOver = function() {
  box.style.background = "#380656";
};

var mouseOut = function() {
  box.style.background = "rgb(75, 36, 84)";
};

function changer() {
  if (check.checked) {
    // Add the event listeners
    box.addEventListener("mouseover", mouseOver);
    box.addEventListener("mouseout", mouseOut);
  } else {
    // Remove the event listeners
    box.removeEventListener("mouseover", mouseOver);
    box.removeEventListener("mouseout", mouseOut);
    box.style.background = "rgb(75, 36, 84)";
  }
}
