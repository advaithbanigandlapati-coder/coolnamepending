function applyTheme() {
    const isConcept = localStorage.getItem('conceptMode') === 'true';
    const body = document.body;
    
    if (isConcept) {
        body.classList.add('concept-active');
    } else {
        body.classList.remove('concept-active');
    }
    updateIcon();
}

function toggleTheme() {
    const isActive = document.body.classList.toggle('concept-active');
    localStorage.setItem('conceptMode', isActive);
    updateIcon();
}

function updateIcon() {
    const isDark = document.body.classList.contains('concept-active');
    const iconElement = document.getElementById('theme-icon');
    
    if (iconElement) {
        // Change the attribute for Lucide
        iconElement.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        // Tell Lucide to re-render the icon
        lucide.createIcons();
    }
}

// Initialize on load
applyTheme();
lucide.createIcons();
