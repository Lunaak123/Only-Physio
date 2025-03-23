document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value.trim();
    let timeSlot = document.getElementById("time-slot").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check if required fields are filled
    if (!name || !email || !phone || !date || !timeSlot) {
        alert("Please fill all required fields.");
        return;
    }

    // WhatsApp Number (Replace with actual number in international format)
    let whatsappNumber = "9042718811"; // Example: +91 for India, remove + and spaces

    // Format the message correctly
    let whatsappMessage = `Hello, I would like to book a physiotherapy appointment.\n\n` +
                          `*Name:* ${name}\n` +
                          `*Email:* ${email}\n` +
                          `*Phone:* ${phone}\n` +
                          `*Date:* ${date}\n` +
                          `*Time Slot:* ${timeSlot}\n` +
                          `*Message:* ${message}`;

    // Encode message for URL
   let encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with pre-filled message
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank"); // Open in new tab
});
