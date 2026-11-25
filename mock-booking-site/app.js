const show = document.querySelector("[data-Plan my Show-show]");
const demandSelect = document.querySelector("#demand");
const daysSelect = document.querySelector("#days");

function updateScenario() {
  show.dataset.demand = demandSelect.value;
  show.dataset.daysToShow = daysSelect.value;
}

demandSelect.addEventListener("change", updateScenario);
daysSelect.addEventListener("change", updateScenario);

document.querySelectorAll(".seat.available").forEach((seat) => {
  seat.addEventListener("click", () => {
    const isSelected = seat.dataset.status === "selected";
    seat.dataset.status = isSelected ? "available" : "selected";
    seat.classList.toggle("selected", !isSelected);
    seat.classList.toggle("available", isSelected);
  });
});
