const button = document.querySelector(".main-head");

button.addEventListener("click", () => {
  button.style.color = "orange";
});

const but = document.querySelector(".hero");
but.addEventListener("click", () => {
  button.style.color = "Cyan";
});

const mark = document.querySelector("#mark");
mark.addEventListener("mouseenter", (e) => {
  mark.style.border = "5px dotted orange";
  mark.style.color = "orange";
});
