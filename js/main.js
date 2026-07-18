/**
 * Terralogic Infrastructure Solutions - Global JavaScript Controls
 */

// 1. Toggle Field Mode Function
function toggleFieldMode() {
    // Toggle the high-contrast class on the body
    const isFieldMode = document.body.classList.toggle('field-mode');
    
    // Save the user's preference so it persists across pages
    if (isFieldMode) {
        localStorage.setItem('field-mode-preference', 'enabled');
    } else {
        localStorage.setItem('field-mode-preference', 'disabled');
    }
}

// 2. Apply Saved Preference Immediately on Page Load
function applySavedTheme() {
    const savedPreference = localStorage.getItem('field-mode-preference');
    
    if (savedPreference === 'enabled') {
        document.body.classList.add('field-mode');
    }
}

// Execute the theme check as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', applySavedTheme);