document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('name') && urlParams.has('valentine')) {
        const yourName = urlParams.get('name');
        const valentineName = urlParams.get('valentine');
        updatePage(yourName, valentineName);
    }
    const vform = document.getElementById('valentineForm');
    document.querySelectorAll('.go-button').forEach(button => {
        button.addEventListener('click', pop);
    });
    vform.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!validForm()) {
            document.body.classList.add('transition');
            document.body.style.backgroundColor = 'red';
            setTimeout(function() {
                document.body.style.backgroundColor = 'white';
                setTimeout(function() {
                    document.body.classList.remove('transition');
                }, 1000);
            }, 1000);
        } else {
            const yourName = document.getElementById('yourName').value;
            const valentineName = document.getElementById('valentineName').value;
            updatePage(yourName, valentineName);
        }
    });
});

function updatePage(name, val) {
    document.body.style.backgroundColor = 'hsla(305,100%,78%,0.96)';
    // const url = `https://alanali.github.io/WillYouBeMyValentine/?name=${name}&valentine=${val}`;
    // window.history.pushState({}, '', url);
    document.getElementById('title').textContent = `${val}, will you be ${name}'s valentine?`;
    // Remove elements
    const inputElements = document.querySelectorAll('.hearts input');
    inputElements.forEach(input => {
        input.remove();
    });
    const button = document.querySelector('.go-button');
    button.parentNode.removeChild(button);

    document.querySelectorAll('.options-container').forEach(container => {
        container.style.display = 'flex';
    });

    document.querySelectorAll('.hearts').forEach(container => {
        container.addEventListener('click', function() {
            alert('Model viewer clicked!');
        });
        container.addEventListener('mouseenter', function() {
            container.classList.add('hover-effect');
        });
        container.addEventListener('mouseleave', function() {
            container.classList.remove('hover-effect');
        });
    });

}

function validForm() {
    const yourName = document.getElementById('yourName');
    const valentineName = document.getElementById('valentineName');
    return yourName.value.trim() !== '' && valentineName.value.trim() !== '';
}

function pop(e) {
    if (!validForm()) {
        return;
    }
    let amount = 20;
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 30; i++) {
        createParticle(x, y);
      }
    } else {
      for (let i = 0; i < amount; i++) {
        createParticle(e.clientX, e.clientY + window.scrollY);
        }
    }
}
  
function createParticle(x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;

    particle.innerHTML = ['❤️','🩷','🧡','🩵','💜','❤️‍🔥','💖','💝','💞','💕','💗','💓','💘'][Math.floor(Math.random() * 13)];
    particle.style.fontSize = `${Math.random() * 24 + 10}px`;
    width = height = 'auto';

    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
        {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1
        },
        {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 0
        }
    ], {
        duration: Math.random() * 1000 + 4000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay
    });
animation.onfinish = removeParticle;
}
  
function removeParticle(e) {
    e.srcElement.effect.target.remove();
}