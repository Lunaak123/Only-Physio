document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let timeSlot = document.getElementById("time-slot").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "919876543210"; // Replace with a real WhatsApp number

    let whatsappMessage = `Hello, I would like to book a physiotherapy appointment.\n\n` +
                          `*Name:* ${name}\n` +
                          `*Email:* ${email}\n` +
                          `*Phone:* ${phone}\n` +
                          `*Date:* ${date}\n` +
                          `*Time Slot:* ${timeSlot}\n` +
                          `*Message:* ${message}`;

    let encodedMessage = encodeURIComponent(whatsappMessage); // Encoding fix
    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank"); // Open WhatsApp
});
