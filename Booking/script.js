document.getElementById("whatsapp-btn").addEventListener("click", function() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let timeSlot = document.getElementById("time-slot").value;
    let message = document.getElementById("message").value.trim() || "No additional message"; // Handle empty message

    // Validate required fields
    if (!name || !email || !phone || !date || !timeSlot) {
        alert("Please fill in all required fields before sending.");
        return;
    }

    let whatsappNumber = "9042718811"; // Replace with your WhatsApp number

    const whatsappMessage = `Hello, I want to book an appointment:\n\n` +
                            `*Name:* ${name}\n` +
                            `*Email:* ${email}\n` +
                            `*Phone:* ${phone}\n` +
                            `*Date:* ${date}\n` +
                            `*Time:* ${timeSlot}\n` +  // ✅ Corrected here
                            `*Message:* ${message}`;

    let encodedMessage = encodeURIComponent(whatsappMessage); // Encode text properly
    let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappURL, "_blank"); // Open WhatsApp
});
