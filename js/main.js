window.addEventListener('DOMContentLoaded', () => {
    const defaultLinks = document.querySelectorAll('.prevent-default');

    defaultLinks.forEach(i => {
        i.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
});