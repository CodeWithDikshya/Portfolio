// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio hover effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = "scale(1.05)";
        item.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = "scale(1)";
        item.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    });
});

// Fade-in animation for sections
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2;
        if (sectionTop < triggerPoint) {
            section.classList.add('visible');
        }
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
