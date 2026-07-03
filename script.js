document.addEventListener("DOMContentLoaded", () => {
    
    // Theme Engine
    const themeToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = htmlElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";
            htmlElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("portfolio-theme", newTheme);
        });
    }

    // System Preloader Animation Framework
    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loaderBar");
    const loaderPercentage = document.getElementById("loaderPercentage");
    const body = document.body;

    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 10) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            setTimeout(() => {
                loader.style.opacity = "0";
                body.classList.remove("loading");
                setTimeout(() => {
                    loader.style.display = "none";
                    handleScrollReveals();
                }, 500);
            }, 300);
        }
        loaderBar.style.width = `${progress}%`;
        loaderPercentage.innerText = `${progress}%`;
    }, 40);

    // Premium Interaction Cursor Tracking Matrix
    const cursor = document.getElementById("customCursor");
    const cursorDot = document.getElementById("customCursorDot");

    if (cursor && cursorDot) {
        window.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;
        });

        const interactiveNodes = document.querySelectorAll("a, button, .tilt-target, .skill-badge");
        interactiveNodes.forEach(node => {
            node.addEventListener("mouseenter", () => cursor.classList.add("expand"));
            node.addEventListener("mouseleave", () => cursor.classList.remove("expand"));
        });
    }

    // High Density Background Microparticle Render Matrix - Increased Count & Speed
    const canvas = document.getElementById("particleCanvas");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        let particlesArray = [];
        const numberOfParticles = 140; // Increased density for more vibrant galaxy feel

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.8 + 0.6; // Slightly larger bounds
                this.speedX = Math.random() * 0.4 - 0.2; // Slightly faster movement
                this.speedY = Math.random() * 0.4 - 0.2;
                this.opacity = Math.random() * 0.6 + 0.2; // Higher visibility threshold
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    // Interactive Ambient Displacement Tracker
    const ambientGlow = document.getElementById("ambientGlow");
    if (ambientGlow) {
        window.addEventListener("mousemove", (e) => {
            ambientGlow.style.left = `${e.clientX}px`;
            ambientGlow.style.top = `${e.clientY}px`;
        });
    }

    // Dynamic High-Performance Typewriter Engine
    const typewriterTarget = document.getElementById("typewriterTarget");
    if (typewriterTarget) {
        const phrases = JSON.parse(typewriterTarget.getAttribute("data-phrases"));
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 60;

        function handleTypewriter() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typewriterTarget.innerText = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 30;
            } else {
                typewriterTarget.innerText = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 70;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400;
            }
            setTimeout(handleTypewriter, typingSpeed);
        }
        setTimeout(handleTypewriter, 1000);
    }

    // Viewport Intersection Scroll Reveal Engine
    const revealElements = document.querySelectorAll(".reveal-element");
    function handleScrollReveals() {
        const triggerBottom = window.innerHeight * 0.9;
        revealElements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", handleScrollReveals);

    // Mobile Navigation Drawer Switch Engine
    const mobileToggle = document.getElementById("mobileNavToggle");
    const mobileNavigation = document.getElementById("mobileNavigation");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    if (mobileToggle && mobileNavigation) {
        function toggleMobileMenu() {
            const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
            mobileToggle.setAttribute("aria-expanded", !isExpanded);
            mobileNavigation.classList.toggle("open");
            mobileNavigation.setAttribute("aria-hidden", isExpanded);
        }
        mobileToggle.addEventListener("click", toggleMobileMenu);
        mobileLinks.forEach(link => link.addEventListener("click", toggleMobileMenu));
    }
});