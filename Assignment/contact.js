document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form inputs
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const freeItem = document.getElementById('freeItem').value;

        // Validate form inputs
        if (!email || !message) {
            errorMessage.textContent = 'Please fill out all required fields.';
            return;
        }

        // Generate random number for the subject of the email
        const randomNumber = Math.floor(Math.random() * 10000);

        // Construct email message
        const subject = `Inquiry #${randomNumber}`;
        const emailBody = `Email: ${email}\nMessage: ${message}\nFree Item: ${freeItem}`;

        // Construct mailto link
        const mailtoLink = `mailto:johnsonlakeesha88@gmail.com?cc=ljhnsn40@icloud.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

        // Open user's email client
        window.location.href = mailtoLink;

        // Display success message
        errorMessage.textContent = 'Your message has been sent successfully. Redirecting to homepage...';

        // Automatically redirect to homepage after 5 seconds
        setTimeout(function() {
            window.location.href = 'landing_index.html';
        }, 5000);
    });
});

