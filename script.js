const vform = document.getElementById('valentineForm');
const ocolor = document.body.style.backgroundColor;

vform.addEventListener('submit', function(event) {
    const yourName = document.getElementById('yourName');
    const valentineName = document.getElementById('valentineName');
    if (!yourName.value || !valentineName.value) {
        document.body.style.backgroundColor = 'red';
        setTimeout(function() {
            document.body.style.backgroundColor = ocolor;
        }, 2000);
        event.preventDefault();
    }
});