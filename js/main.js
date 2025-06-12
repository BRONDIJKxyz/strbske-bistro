// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library with enhanced settings
    AOS.init({
        duration: 1000,
        easing: 'ease-out',
        once: false,
        offset: 50,
        delay: 100,
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
    });
    
    // Refresh AOS after 500ms to ensure all elements are properly initialized
    setTimeout(function() {
        AOS.refresh();
    }, 500);

    // Navigation behavior
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
    
    // Handle navbar transparency on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.remove('transparent');
        } else {
            navbar.classList.add('transparent');
        }
    });
    
    // Initially set navbar to transparent if at top of page
    if (window.scrollY < 100) {
        navbar.classList.add('transparent');
    }

    // Menu tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Show the corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-pane`).classList.add('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
