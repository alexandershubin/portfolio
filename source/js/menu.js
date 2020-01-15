'use strict';
window.addEventListener('DOMContentLoaded', function () {
  // функция для открытия и закрытия меню
  const addOpenedMenuListener = () => {
    const svgButton = document.querySelector('.ham');
    const overlay = document.querySelector('.overlay');
    const siteMenu = document.querySelector('.menu__list');
    const itemSite = document.querySelectorAll('.menu__item');
    let isActive = false;
    const isMob = document.body.scrollWidth > 768 ? false : true;

    // функция добавляет border на элемент меню и скрывает меню при клике
    itemSite.forEach(item => {
      item.addEventListener('click', () => {
        itemSite.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        toggleMenu();

      })
    });

    const toggleMenu = () => {
      svgButton.classList.toggle('active');
      if (isMob) overlay.classList.toggle('overlay-modal');
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

//  функция показывает/скрывает меню при скролле
  const hideShowBar = () => {
    const menuBar = document.querySelector(`.header-top`);
    let prevScrollpos = window.pageYOffset;
    window.addEventListener(`scroll`, () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        menuBar.style.top = "0";
      } else {
        menuBar.style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
    });
  };
  hideShowBar();
});

