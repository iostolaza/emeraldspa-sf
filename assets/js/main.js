// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Accordion Toggle
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const parent = header.parentElement;
    
    const isActive = parent.classList.toggle('active');
    
    if (isActive) {
        content.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Auto-open specific accordions on load
document.addEventListener('DOMContentLoaded', () => {
    // Open Hours Card by default if it exists
    const hoursCard = document.querySelector('.hours-card.accordion');
    if (hoursCard) {
        hoursCard.classList.add('active');
        const content = hoursCard.querySelector('.accordion-content');
        const icon = hoursCard.querySelector('.accordion-icon');
        if (content) content.style.display = 'block';
        if (icon) icon.style.transform = 'rotate(180deg)';
    }
});
