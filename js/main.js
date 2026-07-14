// Check and apply Field Mode setting when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('fieldMode') === 'enabled') {
        document.body.classList.add('field-mode');
    }
});

// Global toggle option
function toggleFieldMode() {
    document.body.classList.toggle('field-mode');
    if (document.body.classList.contains('field-mode')) {
        localStorage.setItem('fieldMode', 'enabled');
    } else {
        localStorage.setItem('fieldMode', 'disabled');
    }
}