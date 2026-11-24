// Reads only explicitly labelled ShowWise demo data from the local mock site.
// No third-party booking websites are accessed by this starter.

function readShowWisePage() {
  const showCard = document.querySelector("[data-showwise-show]");
  if (!showCard) {
    throw new Error("No ShowWise demo show was found on this page.");
  }

  const seats = [...document.querySelectorAll("[data-seat]")];
  const availableSeats = seats.filter((seat) => seat.dataset.status === "available" || seat.dataset.status === "selected");
  const selectedSeats = seats.filter((seat) => seat.dataset.status === "selected");

  return {
    movie: showCard.dataset.movie || "Sample movie",
    theatre: showCard.dataset.theatre || "Sample cinema",
    showtime: showCard.dataset.showtime || "Saturday 7:30 PM",
    ticketPrice: Number(showCard.dataset.ticketPrice || 0),
    bookingFee: Number(showCard.dataset.bookingFee || 0),
    daysToShow: Number(showCard.dataset.daysToShow || 1),
    demand: showCard.dataset.demand || "medium",
    availableSeats: availableSeats.length,
    selectedSeats: selectedSeats.length,
    requestedSeats: Number(document.querySelector("#requested-seats")?.value || 2),
    dataLabel: "SIMULATED DATA"
  };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "SHOWWISE_READ_PAGE") return false;

  try {
    sendResponse({ ok: true, data: readShowWisePage() });
  } catch (error) {
    sendResponse({ ok: false, error: error.message });
  }
  return true;
});
