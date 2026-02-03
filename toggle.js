const toggleBtn = document.querySelector('.theme-toggle-btn');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
