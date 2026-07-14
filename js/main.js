// Sync, enforce Field Mode, and manage calculation persistence on page load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Restore Field Mode state from local storage
    if (localStorage.getItem('fieldMode') === 'enabled') {
        document.body.classList.add('field-mode');
    }

    // 2. Identify all calculator inputs present on the current page
    const inputs = document.querySelectorAll('.calc-group input');
    const pageKey = window.location.pathname; // Unique key per article page
    
    if (inputs.length > 0) {
        inputs.forEach(input => {
            // Generate a completely unique storage key for this specific input on this specific page
            const storageKey = `terralogic-${pageKey}-${input.id}`;
            const savedValue = localStorage.getItem(storageKey);
            
            // If the user has history for this input, override the default HTML value
            if (savedValue !== null) {
                input.value = savedValue;
            }

            // Listen for changes in real-time to save data as the user types
            input.addEventListener('input', () => {
                localStorage.setItem(storageKey, input.value);
            });
        });

        // 3. Automatically trigger the active calculator to show live results immediately
        const calcBtn = document.querySelector('.calc-btn');
        if (calcBtn) {
            calcBtn.click();
        }
    }
});

// Primary toggle function for dark high-contrast mode
function toggleFieldMode() {
    document.body.classList.toggle('field-mode');
    if (document.body.classList.contains('field-mode')) {
        localStorage.setItem('fieldMode', 'enabled');
    } else {
        localStorage.setItem('fieldMode', 'disabled');
    }
}