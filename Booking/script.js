// Select the form
const form = document.getElementById('appointment-form');

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const timeSlot = document.getElementById('time-slot').value;
    const message = document.getElementById('message').value.trim();

    // Validate required fields
    if (!name || !phone || !date || !timeSlot) {
        alert("Please fill all required fields.");
        return;
    }

    // WhatsApp number (remove the "+" sign)
    const whatsappNumber = '919042718811';

    // Construct the WhatsApp message with proper encoding
    const whatsappMessage = `Hello, I want to book an appointment:
📝 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
📅 Date: ${date}
⏰ Selected Slot: ${timeSlot}
📝 Message: ${message || "No additional message provided"}`;

    // Encode the message properly for URL compatibility
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // Debugging: Show the generated link
    console.log("WhatsApp Link:", whatsappURL);
    alert("Opening WhatsApp with details...");

    // Open WhatsApp with message autofilled
    window.open(whatsappURL, '_blank');
});
