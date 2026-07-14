// Sync, enforce Field Mode, manage input persistence, and handle programmatic layout monetization
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

        // Automatically trigger the active calculator to show live results immediately
        const calcBtn = document.querySelector('.calc-btn');
        if (calcBtn) {
            calcBtn.click();
        }
    }

    // 3. Centralized Monetization Engine Initializer
    initializeMonetizationSlots();
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

// Programmatic Display Monetization Manager
function initializeMonetizationSlots() {
    const adSpaces = document.querySelectorAll('.ad-space');
    const isMobile = window.innerWidth < 768;

    adSpaces.forEach((slot, index) => {
        // Clear out raw fallback text templates safely
        const structuralLabel = slot.innerText || "Advertisement";
        slot.innerHTML = '';

        // Inject standard compliance tag required by ad network policies (Google/IAB rules)
        const labelContainer = document.createElement('div');
        labelContainer.className = 'ad-label';
        labelContainer.innerText = 'Advertisement';
        slot.appendChild(labelContainer);

        // Create the responsive inner ad broker target
        const adFrameMock = document.createElement('div');
        adFrameMock.style.width = '100%';
        adFrameMock.style.display = 'flex';
        adFrameMock.style.justifyContent = 'center';
        adFrameMock.style.alignItems = 'center';
        adFrameMock.style.fontWeight = '600';

        if (isMobile) {
            // Set up optimized mobile layouts (Mobile Leaderboards / Anchors)
            slot.style.maxWidth = '320px';
            slot.style.height = '50px';
            adFrameMock.innerHTML = `<span style="color: var(--accent-orange); font-size: 0.75rem;">Premium Sponsor Banner Slot ${index + 1} (320x50)</span>`;
        } else {
            // Set up optimized tablet/desktop broad layouts (Horizontal Leaderboards)
            slot.style.maxWidth = '728px';
            slot.style.height = '90px';
            adFrameMock.innerHTML = `<span style="color: var(--accent-orange); font-size: 0.8rem;">Programmatic Network Display Slot ${index + 1} (728x90)</span>`;
        }

        slot.appendChild(adFrameMock);
        slot.classList.add('ad-space-loaded');
    });
}