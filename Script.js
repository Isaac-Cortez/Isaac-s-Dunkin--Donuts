document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            // Remove active from others to ensure consistency
            link.classList.remove('active');
        }
    });

    const orderButtons = document.querySelectorAll('.btn-custom');
    orderButtons.forEach(btn => {
        if (btn.innerText.toLowerCase().includes('order now')) {
            btn.addEventListener('click', () => {
                window.location.href = 'Menu.html';
            });
        }
    });