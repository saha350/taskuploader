const selected2 = document.querySelector("#task");
const optionsContainer2 = document.querySelector(".task_container");

const optionsList2 = document.querySelectorAll(".option");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});