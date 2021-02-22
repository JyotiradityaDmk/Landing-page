const animatedSection = document.querySelector('.animated-area');

function createMeteors(){
    const meteor = document.createElement('span');
    meteor.style.left = Math.random() * innerWidth + 'px';
    animatedSection.append(meteor);

    setTimeout(()=>{
        meteor.remove();
    },2000);
}

setInterval(createMeteors,100);

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    // Animate Links
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
    });
}

navSlide();