document.addEventListener('DOMContentLoaded', function() {
    const vform = document.getElementById('valentineForm');

    vform.addEventListener('submit', function(event) {
        const yourName = document.getElementById('yourName');
        const valentineName = document.getElementById('valentineName');
        if (!yourName.value || !valentineName.value) {
            document.body.classList.add('transition');
            document.body.style.backgroundColor = 'red';
            setTimeout(function() {
                document.body.style.backgroundColor = 'white';
                setTimeout(function() {
                    document.body.classList.remove('transition');
                }, 1000);
            }, 1000);
            event.preventDefault();
        }
    });
});