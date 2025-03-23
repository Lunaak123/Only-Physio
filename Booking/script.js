document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let timeSlot = document.getElementById("time-slot").value;
    let message = document.getElementById("message").value;

    // WhatsApp Number (Replace with your number)
    let whatsappNumber = "9042718811"; // Change this to your WhatsApp number

    // Format message
    let whatsappMessage = `Hello, I would like to book a physiotherapy appointment.\n\n` +
                          `*Name:* ${name}\n` +
                          `*Email:* ${email}\n` +
                          `*Phone:* ${phone}\n` +
                          `*Date:* ${date}\n` +
                          `*Time Slot:* ${timeSlot}\n` +
                          `*Message:* ${message}`;

    // Encode message for URL
    let encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp link
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
});
