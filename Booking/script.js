// Select elements
const form = document.getElementById('appointment-form');
const fromTimeInput = document.getElementById('from-time');
const toTimeInput = document.getElementById('to-time');
const timeSlotDropdown = document.getElementById('time-slot');

// Update time slots dynamically
function updateTimeSlots() {
    const fromTime = fromTimeInput.value;
    const toTime = toTimeInput.value;

    timeSlotDropdown.innerHTML = '<option value="">Select a time slot</option>';

    if (fromTime && toTime && fromTime < toTime) {
        let [fromHours, fromMinutes] = fromTime.split(':').map(Number);
        let [toHours, toMinutes] = toTime.split(':').map(Number);

        while (fromHours < toHours || (fromHours === toHours && fromMinutes < toMinutes)) {
            const slot = `${String(fromHours).padStart(2, '0')}:${String(fromMinutes).padStart(2, '0')}`;
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = slot;
            timeSlotDropdown.appendChild(option);

            fromMinutes += 30;
            if (fromMinutes >= 60) {
                fromMinutes -= 60;
                fromHours++;
            }
        }
    }
}

fromTimeInput.addEventListener('change', updateTimeSlots);
toTimeInput.addEventListener('change', updateTimeSlots);

// Send form data to WhatsApp
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const therapistType = document.getElementById('therapist-type').value;
    const date = document.getElementById('date').value;
    const fromTime = fromTimeInput.value;
    const toTime = toTimeInput.value;
    const timeSlot = timeSlotDropdown.value;
    const message = document.getElementById('message').value;

    const whatsappNumber = '9042718811';
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
