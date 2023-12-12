document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const repEmail = document.getElementById('rep-email').value;
        const password = document.getElementById('psw').value;
        const repPassword = document.getElementById('psw-repeat').value;

        // Check if passwords match
        if (password !== repPassword) {
            alert("Passwords do not match! Please try again.");
            return;
        }

        // Check if email addresses match
        if (email !== repEmail) {
            alert("Emails do not match! Please try again.");
            return;
        }

        // Display a greeting alert with the first and last name
        alert(`Welcome, ${firstName} ${lastName}!`);

        // Continue with form submission or any other actions
        // For now, we'll just log the form data
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Repeated Email:', repEmail);
        console.log('Password:', password);
        console.log('Repeated Password:', repPassword);
    });
});
