document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Entrance Animations
    // Animate the two new sections on the left
    gsap.from(".info-card", { 
        duration: 1, 
        x: -40, 
        opacity: 0, 
        ease: "power3.out", 
        stagger: 0.2, // Makes them drop in sequentially
        delay: 0.2 
    });

    // Animate the main form
    gsap.from(".form-box", { 
        duration: 1, 
        x: 40, 
        opacity: 0, 
        ease: "power3.out", 
        delay: 0.4 
    });

});
