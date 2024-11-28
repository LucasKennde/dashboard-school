document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            rootElement.setAttribute('data-theme', 'light');
        } else {
            rootElement.setAttribute('data-theme', 'dark');
        }
    });

});
