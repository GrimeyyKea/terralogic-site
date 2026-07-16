// Theme Selectors
const themeToggleBtn = document.getElementById('themeToggle');
const toggleIcon = themeToggleBtn.querySelector('.toggle-icon');
const toggleText = themeToggleBtn.querySelector('.toggle-text');

// Theme Toggle Functionality
themeToggleBtn.addEventListener('click', function() {
    const isFieldMode = document.body.classList.toggle('field-mode');
    
    if (isFieldMode) {
        toggleIcon.textContent = '🌙';
        toggleText.textContent = 'Regular Mode';
        localStorage.setItem('fieldMode', 'enabled');
    } else {
        toggleIcon.textContent = '☀';
        toggleText.textContent = 'Field Mode';
        localStorage.setItem('fieldMode', 'disabled');
    }
});

// Load Saved Preference on App Initialization
if (localStorage.getItem('fieldMode') === 'enabled') {
    document.body.classList.add('field-mode');
    toggleIcon.textContent = '🌙';
    toggleText.textContent = 'Regular Mode';
}

// Volume Calculation Form handling
document.getElementById('calculateBtn').addEventListener('click', function() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const depth = parseFloat(document.getElementById('depth').value);

    // Form Validation
    if (isNaN(length) || isNaN(width) || isNaN(depth) || length <= 0 || width <= 0 || depth <= 0) {
        alert("Please enter valid positive dimensions.");
        return;
    }

    // Dirt volume math: L x W x D
    const cubicMeters = length * width * depth;
    const cubicYards = cubicMeters * 1.30795; // conversion factor

    // Interface Rendering
    const resultsCard = document.getElementById('resultsCard');
    const volumeResult = document.getElementById('volumeResult');
    const yardageResult = document.getElementById('yardageResult');

    volumeResult.textContent = cubicMeters.toFixed(2);
    yardageResult.textContent = cubicYards.toFixed(2);

    resultsCard.classList.remove('hidden');
});