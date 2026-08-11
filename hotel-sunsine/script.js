// Set Default Dates (Today & Tomorrow)
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  document.getElementById("checkIn").value = today.toISOString().split("T")[0];
  document.getElementById("checkOut").value = tomorrow
    .toISOString()
    .split("T")[0];
});

function scrollToBooking() {
  document.getElementById("bookingBar").scrollIntoView({ behavior: "smooth" });
}

function openBookingModal() {
  const roomSelect = document.getElementById("roomSelect");
  const selectedOption = roomSelect.options[roomSelect.selectedIndex];

  document.getElementById("summaryRoom").innerText =
    selectedOption.text.split(" (")[0];
  document.getElementById("summaryPrice").innerText =
    "₹" + selectedOption.getAttribute("data-price");

  document.getElementById("bookingModal").style.display = "flex";
}

function selectRoomAndBook(roomName, price) {
  document.getElementById("summaryRoom").innerText = roomName;
  document.getElementById("summaryPrice").innerText = "₹" + price;
  document.getElementById("bookingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

// Payment Demo Trigger
function handlePaymentDemo(event) {
  event.preventDefault();
  alert(
    "🎉 Client Demo Success!\n\nClient ko dikhane ke liye ye Popup bilkul ready hai. Backend (Razorpay + WhatsApp Auto-confirmation) integrate karne ke liye ready hain!",
  );
  closeModal();
}


function handleInquiryDemo(event) {
  event.preventDefault();
  alert("📩 Demo Inquiry Sent!\n\nClient demo me ye dikha sakte hain ki direct inquiries hotel owner ke WhatsApp / Email par notify hongi.");
}