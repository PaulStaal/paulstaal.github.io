const DAYLIGHT_POINTS = [
    { hour: 0, l: 0.25, c: 0.02, h: 260, textL: 0.9 },   // Midnight
    { hour: 5, l: 0.30, c: 0.04, h: 270, textL: 0.85 },  // Pre-dawn
    { hour: 6, l: 0.85, c: 0.06, h: 30, textL: 0.2 },    // Dawn (Sunrise)
    { hour: 9, l: 0.96, c: 0.02, h: 80, textL: 0.2 },    // Morning
    { hour: 12, l: 0.98, c: 0.01, h: 200, textL: 0.2 },  // Noon
    { hour: 17, l: 0.94, c: 0.05, h: 60, textL: 0.2 },   // Golden Hour
    { hour: 19, l: 0.80, c: 0.10, h: 40, textL: 0.2 },   // Sunset
    { hour: 21, l: 0.40, c: 0.04, h: 270, textL: 0.85 }, // Twilight
    { hour: 24, l: 0.25, c: 0.02, h: 260, textL: 0.9 }   // Midnight (wrap)
];

function interpolate(start, end, factor) {
    return start + (end - start) * factor;
}

function updateDaylightStyles(overrideTime = null) {
    if (!document.documentElement.classList.contains('daylight-mode')) return;

    const now = new Date();
    const currentTime = overrideTime !== null ? overrideTime : (now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600);

    let p1 = DAYLIGHT_POINTS[0];
    let p2 = DAYLIGHT_POINTS[DAYLIGHT_POINTS.length - 1];

    for (let i = 0; i < DAYLIGHT_POINTS.length - 1; i++) {
        if (currentTime >= DAYLIGHT_POINTS[i].hour && currentTime < DAYLIGHT_POINTS[i + 1].hour) {
            p1 = DAYLIGHT_POINTS[i];
            p2 = DAYLIGHT_POINTS[i + 1];
            break;
        }
    }

    const factor = (currentTime - p1.hour) / (p2.hour - p1.hour);

    const l = interpolate(p1.l, p2.l, factor);
    const c = interpolate(p1.c, p2.c, factor);
    const h = interpolate(p1.h, p2.h, factor);
    const textL = interpolate(p1.textL, p2.textL, factor);

    const root = document.documentElement;
    root.style.setProperty('--dl-l', l.toFixed(3));
    root.style.setProperty('--dl-c', c.toFixed(3));
    root.style.setProperty('--dl-h', h.toFixed(3));
    root.style.setProperty('--dl-text-l', textL.toFixed(3));
}

(function () {
    const isTestPage = window.location.pathname.includes('daylight-test.html');
    let theme = localStorage.getItem('theme');

    if (isTestPage) {
        theme = 'daylight';
    } else if (!theme || theme === 'daylight') {
        // Fallback to dark if homepage, otherwise system preference
        const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('/index.html');
        if (isHomepage) {
            theme = 'dark';
        } else {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    }

    document.documentElement.classList.remove('light-mode', 'dark-mode', 'daylight-mode');
    document.documentElement.classList.add(`${theme}-mode`);
    if (theme === 'daylight') {
        updateDaylightStyles();
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        // Dynamic UI update based on mode
        const updateUI = () => {
            const root = document.documentElement;
            const theme = root.classList.contains('daylight-mode') ? 'Daylight' :
                root.classList.contains('dark-mode') ? 'Dark' : 'Light';
            toggle.setAttribute('title', `Toggle Theme (Current: ${theme})`);
        };

        updateUI();

        toggle.addEventListener('click', () => {
            const root = document.documentElement;
            const isTestPage = window.location.pathname.includes('daylight-test.html');
            let newTheme;

            if (isTestPage) {
                // Cycle through all 3 on the test page
                if (root.classList.contains('daylight-mode')) newTheme = 'light';
                else if (root.classList.contains('light-mode')) newTheme = 'dark';
                else newTheme = 'daylight';
            } else {
                // Only Light/Dark on regular pages
                newTheme = root.classList.contains('dark-mode') ? 'light' : 'dark';
            }

            root.classList.remove('light-mode', 'dark-mode', 'daylight-mode');
            root.classList.add(`${newTheme}-mode`);
            localStorage.setItem('theme', newTheme);
            updateUI();

            if (newTheme === 'daylight') {
                updateDaylightStyles();
            } else {
                // Clear inline styles when not in daylight mode
                root.style.removeProperty('--dl-l');
                root.style.removeProperty('--dl-c');
                root.style.removeProperty('--dl-h');
                root.style.removeProperty('--dl-text-l');
            }
        });
    }

    // Update Daylight Mode colors every minute only if on test page
    if (window.location.pathname.includes('daylight-test.html')) {
        setInterval(updateDaylightStyles, 60000);
    }
});
