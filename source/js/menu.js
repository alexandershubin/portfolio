'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const addOpenedMenuListener = () => {
    const svgButton = document.querySelector('.ham');
    const overlay = document.querySelector('.overlay');
    const siteMenu = document.querySelector('.menu__list');

    let isActive = false;

    const toggleMenu = () => {
      svgButton.classList.toggle('active');
      overlay.classList.toggle('overlay-modal');
      siteMenu.classList.toggle('active');
      isActive = !isActive;
    };

    const addEscOnButton = () => {
      window.addEventListener('keydown', (e) => {
        if (e.keyCode == 27 && isActive) {
          toggleMenu();
        }
      })
    };
    addEscOnButton();

    window.addEventListener('click', (e) => {
      const {target} = e;
      console.log(target);
      if (target.matches('.ham') || target.matches('.overlay')) {
        toggleMenu();
      }
    });
  };
  addOpenedMenuListener();
});

