// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData);

    // In a real implementation, you would send this to a server
    console.log('Quote request submitted:', data);

    // Show success message
    alert('Thank you for your quote request! We will contact you at ' + data.phone + ' within 24 hours to discuss your landscaping project.');

    // Reset form
    quoteForm.reset();
});

// Scroll animations for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card, .feature-item, .portfolio-item, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Portfolio item click handler (for when real photos are added)
document.querySelectorAll('.portfolio-item:not(.placeholder)').forEach(item => {
    item.addEventListener('click', function () {
        // This will be used when real photos are added
        // Can implement lightbox functionality here
        console.log('Portfolio item clicked');
    });
});

// Before/After Slider
const slider = document.getElementById('beforeAfterSlider');
const afterImage = document.querySelector('.after-image');
const sliderButton = document.querySelector('.slider-button');

if (slider && afterImage && sliderButton) {
    slider.addEventListener('input', (e) => {
        const value = e.target.value;
        afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        sliderButton.style.left = `${value}%`;
    });
}
