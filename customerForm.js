

const nameInput = document.getElementById('name');
const send = document.getElementById('send');
const greetingMessage = document.getElementById('greetingMessage');

// Function to check if name contains only letters and spaces
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}

// Send Button click
send.addEventListener('click', function () {
    const username = nameInput.value.trim();

    if (username === '') {
        greetingMessage.textContent = 'Please enter your name';
    } else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use only letters in your name.';
    } else {
        greetingMessage.textContent = `Hello, ${username}! Your order is completed.`;

        // Show alert after successful validation
        alert("Thank you for your order! We’ll ensure fast delivery.");
    }
});
