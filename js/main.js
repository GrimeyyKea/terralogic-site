/* Terralogic Infrastructure Solutions - Global Logic */

document.addEventListener('DOMContentLoaded', () => {
    // Restore Field Mode state
    if (localStorage.getItem('fieldMode') === 'enabled') {
        document.body.classList.add('field-mode');
    }

    // Input persistence across refreshes using path-based unique keys
    const inputs = document.querySelectorAll('.calc-group input, .calc-group select');
    const pageKey = window.location.pathname;
    
    inputs.forEach(input => {
        const storageKey = `terralogic-${pageKey}-${input.id}`;
        const savedValue = localStorage.getItem(storageKey);
        if (savedValue !== null) {
            input.value = savedValue;
        }
        input.addEventListener('input', () => {
            localStorage.setItem(storageKey, input.value);
        });
        input.addEventListener('change', () => {
            localStorage.setItem(storageKey, input.value);
        });
    });

    // Auto-run active calculations if they exist
    if (typeof calcSwell === 'function') calcSwell();
    if (typeof calcDensity === 'function') calcDensity();
    if (typeof calcTrench === 'function') calcTrench();
    if (typeof calcFleet === 'function') calcFleet();
    if (typeof runConversion === 'function') runConversion();
});

function toggleFieldMode() {
    document.body.classList.toggle('field-mode');
    if (document.body.classList.contains('field-mode')) {
        localStorage.setItem('fieldMode', 'enabled');
    } else {
        localStorage.setItem('fieldMode', 'disabled');
    }
}

// Global hook to support fluid canvas redraw checks on device re-orientation
window.addEventListener('resize', () => {
    if (typeof calcTrench === 'function') calcTrench();
    if (typeof calcSwell === 'function') calcSwell();
    if (typeof calcDensity === 'function') calcDensity();
    if (typeof calcFleet === 'function') calcFleet();
    if (typeof runConversion === 'function') runConversion();
});