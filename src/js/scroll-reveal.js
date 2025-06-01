// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-down, .reveal-scale, .reveal-rotate');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once revealed, we can stop observing
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element comes into view
    });

    // Start observing all reveal elements
    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});

// Scroll Reveal for FAQ Items
function initFAQScrollReveal() {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqCategories = document.querySelectorAll('.faq-category');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Unobserve after revealing to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe FAQ items
    faqItems.forEach(item => {
        observer.observe(item);
    });

    // Observe FAQ categories
    faqCategories.forEach(category => {
        observer.observe(category);
    });
}

// Initialize FAQ scroll reveal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initFAQScrollReveal();
});

// Re-initialize on window resize to handle responsive layout changes
window.addEventListener('resize', () => {
    initFAQScrollReveal();
});

// Scroll Reveal for Team Page
function initTeamScrollReveal() {
    const teamElements = document.querySelectorAll(
        '.team-container h1, .team-description, .featured-card, .section-heading, .team-category, .team-member'
    );
    
    const observerOptions = {
        root: null,
        rootMargin: '50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Unobserve after revealing to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all team elements
    teamElements.forEach(element => {
        if (element) {
            observer.observe(element);
        }
    });
}

// Initialize all scroll reveals when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize team scroll reveal
    initTeamScrollReveal();
    
    // Initialize FAQ scroll reveal if on FAQ page
    if (document.querySelector('.faq-item')) {
        initFAQScrollReveal();
    }
});

// Re-initialize on window resize to handle responsive layout changes
window.addEventListener('resize', () => {
    initTeamScrollReveal();
    if (document.querySelector('.faq-item')) {
        initFAQScrollReveal();
    }
}); 