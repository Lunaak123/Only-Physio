// Select elements
const form = document.getElementById('appointment-form');
const timeSlotDropdown = document.getElementById('time-slot');

// Send form data to WhatsApp
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const timeSlot = timeSlotDropdown.value;
    const message = document.getElementById('message').value;

    const whatsappNumber = '8220638753';
    const whatsappMessage = `Hello, I want to book an appointment:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Date: ${date}
- Selected Slot: ${timeSlot}
- Message: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
});
