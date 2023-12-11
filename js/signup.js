// Save this code in a file, for example, script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

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

        // Continue with form submission or any other actions
        // For now, we'll just log the form data
        console.log('Email:', email);
        console.log('Repeated Email:', repEmail);
        console.log('Password:', password);
        console.log('Repeated Password:', repPassword);

        // You can submit the form here or perform any other actions
        // For example, uncomment the line below to submit the form
        // form.submit();
    });
});
