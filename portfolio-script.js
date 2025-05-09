// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mobile navigation toggle functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        // Toggle navigation menu
        nav.classList.toggle('nav-active');
        
        // Animate burger icon
        burger.classList.toggle('toggle');
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
            
            // Get target section and scroll to it
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset for header height
                behavior: 'smooth'
            });
        });
    });
    
    // Typing animation for hero section
    const typingElement = document.getElementById('typing');
    const professions = ['Web Developer', 'Designer', 'Photographer', 'Freelancer']; // Customize these
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 200;
    
    function typeText() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            // Remove character
            typingElement.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Add character
            typingElement.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // Control typing state
        if (!isDeleting && charIndex === currentProfession.length) {
            // Complete word - pause before deleting
            isDeleting = true;
            typingDelay = 1000;
        } else if (isDeleting && charIndex === 0) {
            // Word deleted - move to next profession
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            typingDelay = 200;
        } else {
            // Adjust typing speed
            typingDelay = isDeleting ? 100 : 200;
        }
        
        // Continue typing animation
        setTimeout(typeText, typingDelay);
    }
    
    // Start typing animation
    typeText();
    
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        //