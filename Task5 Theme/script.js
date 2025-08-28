document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    // 1. Respect system preference on first load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        // 2. Apply theme from localStorage
        setTheme(currentTheme);
    } else if (prefersDark) {
        // 3. If no theme saved, use system preference
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // 4. Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const themeToSet = body.classList.contains('dark-theme') ? 'light' : 'dark';
        setTheme(themeToSet);
    });
});