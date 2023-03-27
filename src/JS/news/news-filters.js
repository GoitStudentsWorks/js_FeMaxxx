const buttonsContainer = document.querySelector("[data-filter-btn-container]");

buttonsContainer.addEventListener("click", choiceFilter);

let buttonSelected = "";

function choiceFilter(e) {
  if (e.target.nodeName !== "BUTTON" || e.target.name === "") {
    return;
  }

  e.target.classList.add("active");

  buttonSelected?.classList?.remove("active");

  buttonSelected = e.target;
}
