const analyseButton = document.querySelector("#analyse");
const statusText = document.querySelector("#status");
const result = document.querySelector("#result");

function formatRupees(value) {
  return Number.isFinite(value) ? `₹${value.toFixed(0)}` : "—";
}

function makeRecommendation(data) {
  const reasons = [];
  const needed = Math.max(1, data.requestedSeats || 2);
  let verdict = "WAIT";

  if (data.availableSeats < needed) {
    verdict = "SWITCH SHOW";
    reasons.push(`Only ${data.availableSeats} seats are currently marked available, but ${needed} are requested.`);
    reasons.push("Check another showtime or theatre with enough seats together.");
  } else if (data.demand === "high" && data.daysToShow <= 2) {
    verdict = "BUY NOW";
    reasons.push("The demo scenario marks demand as high and the show is soon.");
    reasons.push("There are enough seats for the requested group at the moment.");
  } else {
    verdict = "WAIT";
    reasons.push("The demo scenario does not show an immediate high-demand signal.");
    reasons.push("Monitor the listing and compare again before the show.");
  }

  reasons.push("This rule uses simulated scenario inputs; it does not forecast real future prices.");
  return { verdict, reasons };
}

function render(data) {
  const recommendation = makeRecommendation(data);
  document.querySelector("#verdict").textContent = recommendation.verdict;
  document.querySelector("#verdict").className = `verdict ${recommendation.verdict === "BUY NOW" ? "buy" : recommendation.verdict === "SWITCH SHOW" ? "switch" : ""}`;
  document.querySelector("#movie").textContent = data.movie;
  document.querySelector("#details").textContent = `${data.theatre} · ${data.showtime} · ${data.daysToShow} day(s) to show`;
  document.querySelector("#ticket").textContent = formatRupees(data.ticketPrice);
  document.querySelector("#fee").textContent = formatRupees(data.bookingFee);
  document.querySelector("#seats").textContent = String(data.availableSeats);
  document.querySelector("#demand").textContent = data.demand.toUpperCase();

  const reasonsList = document.querySelector("#reasons");
  reasonsList.replaceChildren();
  recommendation.reasons.forEach((reason) => {
    const item = document.createElement("li");
    item.textContent = reason;
    reasonsList.append(item);
  });
  result.classList.remove("hidden");
  statusText.textContent = "Analysis complete. Review the reasons before deciding.";
}

analyseButton.addEventListener("click", async () => {
  result.classList.add("hidden");
  statusText.textContent = "Reading the active demo booking page…";

  try {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    if (!tab?.id) throw new Error("Could not identify the active tab.");

    const response = await chrome.tabs.sendMessage(tab.id, { type: "SHOWWISE_READ_PAGE" });
    if (!response?.ok) throw new Error(response?.error || "Could not read the demo page.");
    render(response.data);
  } catch (error) {
    statusText.textContent = `${error.message} Open the local mock booking site and try again.`;
  }
});
