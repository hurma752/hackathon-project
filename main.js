"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    const themeToggle = document.getElementById('theme-toggle');
    // Toggle section visibility
    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.classList.toggle('hidden');
                    button.textContent = targetElement.classList.contains('hidden')
                        ? 'Show Section'
                        : 'Hide Section';
                }
            }
        });
    });
    // Theme toggle functionality
    let isDarkTheme = true;
    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDarkTheme) {
            root.style.setProperty('--primary-bg', 'var(--primary-bg-light)');
            root.style.setProperty('--secondary-bg', 'var(--secondary-bg-light)');
            root.style.setProperty('--accent-color', 'var(--accent-color-light)');
            root.style.setProperty('--text-color', 'var(--text-color-light)');
            root.style.setProperty('--text-muted', 'var(--text-muted-light)');
            root.style.setProperty('--border-color', 'var(--border-color-light)');
        }
        else {
            root.style.setProperty('--primary-bg', 'var(--primary-bg-dark)');
            root.style.setProperty('--secondary-bg', 'var(--secondary-bg-dark)');
            root.style.setProperty('--accent-color', 'var(--accent-color-dark)');
            root.style.setProperty('--text-color', 'var(--text-color-dark)');
            root.style.setProperty('--text-muted', 'var(--text-muted-dark)');
            root.style.setProperty('--border-color', 'var(--border-color-dark)');
        }
        themeToggle.textContent = isDarkTheme ? 'Switch to Dark Theme' : 'Switch to Light Theme';
        isDarkTheme = !isDarkTheme;
    };
    themeToggle.addEventListener('click', toggleTheme);
    // Add smooth transitions for section hover effects
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-5px)';
            section.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
