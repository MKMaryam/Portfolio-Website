document.addEventListener("DOMContentLoaded", function() {
    const openFormButton = document.getElementById('open-form');
    const contactForm = document.getElementById('contact-form');
    const closeFormButton = document.getElementById('close-form');

    // Show the form when the envelope icon is clicked
    openFormButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        contactForm.classList.remove('hidden');
    });

    // Hide the form when the close button is clicked
    closeFormButton.addEventListener('click', function() {
        contactForm.classList.add('hidden');
    });
});
