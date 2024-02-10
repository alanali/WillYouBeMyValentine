const vform = document.getElementById('valentineForm');
const ocolor = document.body.style.backgroundColor;
if (vform === null) {
    document.body.style.backgroundColor = 'red';
}

vform.addEventListener('submit', function(event) {
    const yourName = document.getElementById('yourName');
    const valentineName = document.getElementById('valentineName');

    if (!yourName.value || !valentineName.value) {
        const message = document.createElement('p');
        message.textContent = 'Please fill out both names.';
        message.classList.add('message');
        document.body.style.backgroundColor = 'red';
        document.body.appendChild(message);
        const submitButton = document.querySelector('#go-button button');
        submitButton.parentNode.insertBefore(message, submitButton.nextSibling);
        setTimeout(function() {
            document.body.removeChild(message);
            document.body.style.backgroundColor = ocolor;
        }, 2000);
        event.preventDefault();
        highlightEmptyInputs(yourName, valentineName);
    }
});