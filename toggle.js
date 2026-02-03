const toggleBtn = document.querySelector('.theme-toggle-btn');
const body = document.body;

// default = dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.add(savedTheme === 'light' ? 'light-mode' : 'dark-mode');

toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode', !isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
