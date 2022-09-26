console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Successful submit!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

function onDuckImgMouseover() {
  alert("You are smart!");
}

document
  .getElementById("duck-img")
  .addEventListener("mouseover", onDuckImgMouseover);
