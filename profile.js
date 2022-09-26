function onColorClick() {
  alert("My favorite color is purple");
}

function onPlaceClick() {
  alert("My favorite place is Frankenmuth, Michigan");
}

function onRitualClick() {
  alert("My favorite ritual is getting a Mcdonalds coke.");
}

document.getElementById("color").addEventListener("click", onColorClick);
document.getElementById("place").addEventListener("click", onPlaceClick);
document.getElementById("ritual").addEventListener("click", onRitualClick);
