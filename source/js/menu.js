'use strict';
window.addEventListener('DOMContentLoaded', function () {
  // функция для открытия и закрытия мменю
  const addOpenedMenuListener = () => {
    const svgButton = document.querySelector('.ham');
    const overlay = document.querySelector('.overlay');
    const siteMenu = document.querySelector('.menu__list');
    const itemSite = document.querySelectorAll('.menu__item');
    let isActive = false;

    // функция добавляет
    itemSite.forEach(item => {
      item.addEventListener('click', () => {
        itemSite.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
      })
    });

    const toggleMenu = () => {
      svgButton.classList.toggle('active');
      overlay.classList.toggle('overlay-modal');
      siteMenu.classList.toggle('active');
      document.body.classList.toggle('hide');
      isActive = !isActive;
    };

    // добавляет кликна закрытие меню по кнопке Esc
    const addEscOnButton = () => {
      window.addEventListener('keydown', (e) => {
        const isEscKey = e.key === `Escape` || e.key === `Esc`;
        if (isEscKey && isActive) {
          toggleMenu();
        }
      })
    };
    addEscOnButton();

    // добавляет клик на закрытие меню за пределами меню
    window.addEventListener('click', (e) => {
      const {target} = e;
      if (target.matches('.ham') || target.parentNode.matches('.ham') || target.matches('.overlay')) {
        toggleMenu();
      }
    });
  };
  addOpenedMenuListener();
});

