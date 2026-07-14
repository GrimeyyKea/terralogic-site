// Sync and enforce Field Mode layout across page transitions
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('fieldMode') === 'enabled') {
        document.body.classList.add('field-mode');
    }
});

// Primary trigger function for dashboard and article views
function toggleFieldMode() {
    document.body.classList.toggle('field-mode');
    if (document.body.classList.contains('field-mode')) {
        localStorage.setItem('fieldMode', 'enabled');
    } else {
        localStorage.setItem('fieldMode', 'disabled');
    }
}