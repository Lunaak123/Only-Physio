document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let timeSlot = document.getElementById("time-slot").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "9042718811"; // Replace with a real WhatsApp number

     const whatsappMessage = `Hello, I want to book an appointment:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Date: ${date}
- Time: ${time-slot}
- Message: ${message}`; // Default text if empty

    let encodedMessage = encodeURIComponent(whatsappMessage); // Proper encoding
    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank"); // Open WhatsApp
});
