// Select elements
const form = document.getElementById('appointment-form');
const timeSlotDropdown = document.getElementById('time-slot');

// Send form data to WhatsApp
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const phone = document.getElementById('phone')?.value.trim();
    const date = document.getElementById('date')?.value;
    const timeSlot = timeSlotDropdown?.value;
    const message = document.getElementById('message')?.value.trim();

    if (!name || !phone || !date || !timeSlot || timeSlot === "none") {
        alert("Please fill all required fields.");
        return;
    }

    const whatsappNumber = '919042718811'; // No '+' needed
    const whatsappMessage = `Hello, I want to book an appointment:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Date: ${date}
- Selected Slot: ${timeSlot}
- Message: ${message || "No message provided"}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    console.log("Generated WhatsApp URL:", whatsappURL);
    alert(whatsappURL);  // Debugging
    window.open(whatsappURL, '_blank');
});
