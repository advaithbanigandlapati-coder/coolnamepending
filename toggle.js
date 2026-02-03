function applyTheme() {
    const isConcept = localStorage.getItem('conceptMode') === 'true';
    if (isConcept) {
        document.body.classList.add('concept-active');
    }
}

function toggleTheme() {
    const isActive = document.body.classList.toggle('concept-active');
    localStorage.setItem('conceptMode', isActive);
}

// Run immediately on every page load
applyTheme();
