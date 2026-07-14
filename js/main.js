/* Terralogic Infrastructure Solutions - Global Logic */

// Common responsive check for charts
window.addEventListener('resize', () => {
    // Re-trigger calculator logic if chart exists on page
    if (typeof calcTrench === 'function') calcTrench();
    if (typeof calcSwell === 'function') calcSwell();
    if (typeof calcDensity === 'function') calcDensity();
    if (typeof calcFleet === 'function') calcFleet();
});

// Helper for UI interactions
const TerralogicUI = {
    init: function() {
        console.log("Terralogic Infrastructure Dashboard initialized.");
    }
};

document.addEventListener('DOMContentLoaded', TerralogicUI.init);