function toggleTheme() {
    const themeLink = document.getElementById('theme-style');
    let current = themeLink.getAttribute('href');
    let target = current.includes('gold') ? 'assets/css/silver-theme.css' : 'assets/css/gold-theme.css';
    themeLink.setAttribute('href', target);
    localStorage.setItem('userTheme', target);
}


(function() {
    const saved = localStorage.getItem('userTheme');
    if (saved && document.getElementById('theme-style')) {
        document.getElementById('theme-style').setAttribute('href', saved);
    }
})();