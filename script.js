document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Transparent Header Scrolling Detection Engine
    const header = document.getElementById("globalHeader");
    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Code health validation call upon generation state

    // 2. Responsive Mobile Drawer Interaction Framework
    const menuToggle = document.getElementById("menuToggle");
    const primaryNav = document.getElementById("primaryNav");
    const navLinks = document.querySelectorAll(".nav-link");

    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        primaryNav.classList.toggle("active");
        document.body.style.overflow = isExpanded ? "auto" : "hidden";
    };

    menuToggle.addEventListener("click", toggleMenu);

    // Minimize mobile modal shell upon link interaction loops
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (primaryNav.classList.contains("active")) {
                toggleMenu();
            }
        });
    });

    // 3. Simple Parallax Logic on Story Image Node
    const parallaxImg = document.querySelector(".parallax-img");
    window.addEventListener("scroll", () => {
        if (!parallaxImg) return;
        const speed = 0.15;
        const rect = parallaxImg.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const shift = (window.innerHeight - rect.top) * speed;
            parallaxImg.style.transform = `scale(1.15) translateY(${-shift / 4}px)`;
        }
    });

    // 4. Menu Filtering Engine
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuCards = document.querySelectorAll(".menu-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterButtons.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");

            const selectedCategory = e.target.getAttribute("data-category");

            menuCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (selectedCategory === cardCategory) {
                    card.style.display = "block";
                    setTimeout(() => card.style.opacity = "1", 50);
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => card.style.display = "none", 300);
                }
            });
        });
    });

    // 5. Protected Client Input Form Validation System
    const form = document.getElementById("reservationForm");
    
    const validateField = (input, errorSpan) => {
        let isValid = true;
        
        if (input.type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(input.value.trim());
        } else if (input.type === "date") {
            const selectedDate = new Date(input.value);
            const today = new Date();
            today.setHours(0,0,0,0);
            isValid = input.value !== "" && selectedDate >= today;
        } else {
            isValid = input.value.trim() !== "";
        }

        if (!isValid) {
            input.classList.add("invalid");
            errorSpan.classList.add("visible");
        } else {
            input.classList.remove("invalid");
            errorSpan.classList.remove("visible");
        }
        return isValid;
    };

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const isNameValid = validateField(document.getElementById("clientName"), document.getElementById("nameError"));
            const isEmailValid = validateField(document.getElementById("clientEmail"), document.getElementById("emailError"));
            const isPhoneValid = validateField(document.getElementById("clientPhone"), document.getElementById("phoneError"));
            const isDateValid = validateField(document.getElementById("reserveDate"), document.getElementById("dateError"));
            const isGuestValid = validateField(document.getElementById("guestCount"), document.getElementById("guestError"));

            if (isNameValid && isEmailValid && isPhoneValid && isDateValid && isGuestValid) {
                // Successful compilation placeholder. Simulate data handling pipeline
                alert("Transmission complete. Your reservation token request has been routed successfully.");
                form.reset();
            }
        });
    }

    // 6. Active Navigation Highlight Engine on Scroll Spies
    const sections = document.querySelectorAll("section");
    const scrollSpy = () => {
        let currentSectionId = "home";
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", scrollSpy);

    // 7. Micro-Trigger Interactivity Framework (Scroll Reveal)
    const revealElements = document.querySelectorAll(".reveal-on-scroll, .animate-up");
    const revealOnScrollInit = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = window.innerHeight - 80;
            if (elementTop < revealPoint) {
                el.classList.add("visible");
            }
        });
    };
    window.addEventListener("scroll", revealOnScrollInit);
    setTimeout(revealOnScrollInit, 200); // Prime execution trace upon loading
});