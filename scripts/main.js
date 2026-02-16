document.addEventListener('DOMContentLoaded', () => {
    // Show logo immediately if started at scrolled position
    const navLogo = document.querySelector('.nav_logo');
    if (window.scrollY > 100 && navLogo) {
        navLogo.classList.add('is-visible');
    }

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Once it starts drawing/typing, we don't need to watch it anymore
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Watch for typing animations
    const typingElements = document.querySelectorAll('.newtype.payoff');
    typingElements.forEach(el => observer.observe(el));

    // Target the logo wrapper specifically
    const logoWrapper = document.querySelector('.final-logo-wrapper');
    if (logoWrapper) observer.observe(logoWrapper);

    // Watch for famous ideas sketches
    const famousIdeas = document.querySelectorAll('.famous_ideas');
    famousIdeas.forEach(el => observer.observe(el));

    // Glitch Effect Persistent Swap
    document.querySelectorAll('.glitch-effect').forEach(el => {
        el.addEventListener('mouseenter', () => {
            const target = el.querySelector('span');
            const newText = el.getAttribute('data-text');
            if (target && target.textContent !== newText) {
                target.textContent = newText;
            }
        });
    });

    // --- Copy Email Functionality ---
    const copyEmailBtn = document.getElementById('copy-email');
    const copyFeedback = document.querySelector('.copy-feedback');

    if (copyEmailBtn && copyFeedback) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // The email address to copy
            const email = "ps.staal@gmail.com";

            navigator.clipboard.writeText(email).then(() => {
                copyFeedback.classList.add('is-visible');

                setTimeout(() => {
                    copyFeedback.classList.remove('is-visible');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // --- Footer Slogan Glitch Cycling ---
    const footerSlogans = [
        "Putting the funk back in functional.",
        "Sic Parvis Magna.",
        "Imagine the possibilities.",
        "Remixing reality.",
        "Veridis Quo."
    ];

    // Pick a random starting slogan
    let currentSloganIndex = Math.floor(Math.random() * footerSlogans.length);
    const footerGlitchContainer = document.getElementById('footer-glitch');

    if (footerGlitchContainer) {
        footerGlitchContainer.style.cursor = 'pointer';
        const mainText = footerGlitchContainer.querySelector('.main-text');
        const layers = footerGlitchContainer.querySelectorAll('.glitch-layer');

        // Set initial random slogan
        const initialSlogan = footerSlogans[currentSloganIndex];
        mainText.textContent = initialSlogan;
        layers.forEach(layer => {
            layer.textContent = initialSlogan;
        });

        const triggerSloganTransition = () => {
            const nextIndex = (currentSloganIndex + 1) % footerSlogans.length;
            const nextSlogan = footerSlogans[nextIndex];

            // Start glitch animation
            footerGlitchContainer.classList.add('is-glitching');

            // Swap text halfway through (masking the change)
            setTimeout(() => {
                mainText.textContent = nextSlogan;
                layers.forEach(layer => {
                    layer.textContent = nextSlogan;
                });
            }, 250);

            // End glitch state
            setTimeout(() => {
                footerGlitchContainer.classList.remove('is-glitching');
            }, 550);

            currentSloganIndex = nextIndex;
        };

        // Cycle every 10 seconds
        let glitchInterval = setInterval(triggerSloganTransition, 10000);

        // Allow clicking to trigger transition
        footerGlitchContainer.addEventListener("click", () => {
            clearInterval(glitchInterval);
            triggerSloganTransition();
            glitchInterval = setInterval(triggerSloganTransition, 10000);
        });
    }
});
