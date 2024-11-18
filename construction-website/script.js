// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from submitting until validation

    // Grab the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if all fields are filled
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Basic email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display success message
    alert('Form submitted successfully! We will get back to you shortly.');
    document.getElementById('contactForm').reset(); // Reset the form after submission
});

// Cost estimation calculation with validation
function calculateCost() {
    const area = parseFloat(document.getElementById('area').value);
    const rate = parseFloat(document.getElementById('rate').value);

    // Validate area and rate inputs
    if (isNaN(area) || area <= 0) {
        alert('Please enter a valid area greater than 0.');
        return;
    }

    if (isNaN(rate) || rate <= 0) {
        alert('Please enter a valid construction rate greater than 0.');
        return;
    }

    // Calculate the cost
    const cost = area * rate;

    // Display the result with formatting
    document.getElementById('result').innerText = `Estimated Cost: $${cost.toFixed(2)}`;
}
