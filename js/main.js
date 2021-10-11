window.addEventListener('DOMContentLoaded', () => {
    const defaultLinks = document.querySelectorAll('.prevent-default'),
          btnMenu = document.querySelector('.header-btn-menu'),
          menu = document.querySelector('.wrapper-header-menu'),
          lineBtnMenu = btnMenu.querySelectorAll('.line'),
          doc = document.querySelector('.document');

    defaultLinks.forEach(i => {
        i.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('open-menu');
        
        if (menu.classList.contains('open-menu')) {
            lineBtnMenu[0].style.cssText = 'background-color: white; transform: rotate(45deg); top: 4px;';
            lineBtnMenu[1].style.cssText = 'background-color: white; transform: rotate(-45deg); bottom: 4px;';

            doc.style.overflow = 'hidden';
        } else {
            lineBtnMenu.forEach(i => {
                i.style.cssText = '';
            });

            doc.style.overflow = '';
        }
    });
});