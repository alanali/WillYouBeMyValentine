document.addEventListener('DOMContentLoaded', function() {
    const vform = document.getElementById('valentineForm');
    if (vform === null) {
        document.body.style.backgroundColor = 'red';
    }

    vform.addEventListener('submit', function(event) {
        document.body.style.backgroundColor = 'green';
        const yourName = document.getElementById('yourName');
        const valentineName = document.getElementById('valentineName');

        if (!yourName.value || !valentineName.value) {
            event.preventDefault();
            if (!yourName.value) {
                yourName.setCustomValidity('Please enter your name');
            } else {
                yourName.setCustomValidity('');
            }
            if (!valentineName.value) {
                valentineName.setCustomValidity('Please enter your valentine\'s name');
            } else {
                valentineName.setCustomValidity('');
            }
        }
    });
});