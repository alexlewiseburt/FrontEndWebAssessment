console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Successful submit!");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

Object.addEventListener("mouseover");
