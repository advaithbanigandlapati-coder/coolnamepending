function applyTheme() {
    // Check localStorage (Memory) to see if conceptMode is true
    const isConcept = localStorage.getItem('conceptMode') === 'true';
    if (isConcept) {
        document.body.classList.add('concept-active');
    } else {
        document.body.classList.remove('concept-active');
    }
}

function toggleTheme() {
    const isActive = document.body.classList.toggle('concept-active');
    // Save the choice in memory
    localStorage.setItem('conceptMode', isActive);
}

// THIS IS THE KEY: Every page must run this the second it loads
applyTheme();
