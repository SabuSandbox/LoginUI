document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Entrance Animations
    gsap.from(".info-slider-box", { 
        duration: 1, 
        x: -40, 
        opacity: 0, 
        ease: "power3.out", 
        delay: 0.2 
    });

    gsap.from(".form-box", { 
        duration: 1, 
        x: 40, 
        opacity: 0, 
        ease: "power3.out", 
        delay: 0.4 
    });

    // 2. Continuous Fading Information Logic
    const infoData = [
        { title: "Our Vision", desc: "“To be the global leader providing end-to-end supply chain solutions to the fashion industry.”" },
        { title: "Our Mission", desc: "“To continuously exceed customer and shareholder expectations by strategically driving sustainability, technological advancement, and innovative solutions delivered with the best talent in the industry.”" },
        { title: "Who We Are", desc: "Executive Board, Leadership, Our Journey, People, and Awards." },
        { title: "What We Do", desc: "Design, Our Products, Manufacturing, and Operational Excellence." },
        { title: "We Are Global", desc: "Asia-Pacific, Central America, North America, UK, and Europe." },
        { title: "Key Pillars Of Success", desc: "Multi-National Presence, Multi-Product Offering, Strong Design, Operational Excellence, and Sustainable Care." },
        { title: "Our Values", desc: "Speed To Action, Customer Centricity, Integrity, Strive For Excellence, and Sustainability." },
        { title: "Working At Pearl Global", desc: "We encourage an environment of learning and growing with the organization. We learn together, grow together, and learn from mistakes together." }
    ];

    const infoSlider = document.getElementById('info-slider');
    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');
    let currentInfoIndex = 0;

    infoTitle.textContent = infoData[0].title;
    infoDesc.textContent = infoData[0].desc;

    setInterval(() => {
        gsap.to(infoSlider, { opacity: 0, duration: 0.8, onComplete: () => {
            currentInfoIndex = (currentInfoIndex + 1) % infoData.length;
            infoTitle.textContent = infoData[currentInfoIndex].title;
            infoDesc.textContent = infoData[currentInfoIndex].desc;
            
            gsap.to(infoSlider, { opacity: 1, duration: 0.8 });
        }});
    }, 6000);

});
