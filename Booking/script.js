// Select the form
const form = document.getElementById('appointment-form');

// Load saved form data from localStorage on page load
window.addEventListener('load', function () {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('email').value = localStorage.getItem('email') || '';
    document.getElementById('phone').value = localStorage.getItem('phone') || '';
    document.getElementById('date').value = localStorage.getItem('date') || '';
    document.getElementById('time-slot').value = localStorage.getItem('time-slot') || '';
    document.getElementById('message').value = localStorage.getItem('message') || '';
});

// Save form data to localStorage when user types
document.querySelectorAll("input, select, textarea").forEach(element => {
    element.addEventListener("input", () => {
        localStorage.setItem(element.id, element.value);
    });
});

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default form submission

    // Get form values
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const date = document.getElementById('date')?.value;
    const timeSlot = document.getElementById('time-slot')?.value;
    const message = document.getElementById('message')?.value.trim();

    // Validate required fields
    if (!name || !phone || !date || !timeSlot || timeSlot === "none") {
        alert("Please fill all required fields.");
        return;
    }

    // WhatsApp number (remove the "+" sign)
    const whatsappNumber = '919042718811';

    // Construct the WhatsApp message
    const whatsappMessage = `Hello, I want to book an appointment:
📝 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📅 Date: ${date}
⏰ Selected Slot: ${timeSlot}
📝 Message: ${message || "No additional message provided"}`;

    // Encode message for WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Save form data before opening WhatsApp
    localStorage.setItem("whatsappMessage", whatsappMessage);

    // Debugging: Show the generated link
    console.log("WhatsApp Link:", whatsappURL);
    alert("Opening WhatsApp with details...");

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
});
