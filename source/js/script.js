window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let menuButton = document.querySelector(".menu__button"),
    menuList = document.querySelector(".menu__list"),
    menuItem = document.querySelectorAll(".menu__item"),
    overlay = document.querySelector(".overlay"),
    body = document.querySelector("body");

  // прописываем условия показа блока
  function showBorder(b) {
    if (menuItem[b].classList.contains('item-disable')) {
      menuItem[b].classList.remove('item-disable');
      menuItem[b].classList.add('item-active');
    }
  }

  //скрываем все стили
  function hideBorder() {
    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove("item-active");
      menuItem[i].classList.add("item-disable");
    }
  }


  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function () {
      hideBorder();
      showBorder(i);
    });
  }

  menuButton.addEventListener("click", function () {
    if (menuButton.classList.contains("button-closed") && menuList.classList.contains("menu-closed")) {
      menuButton.classList.remove("button-closed");
      menuButton.classList.add("button-opened");
      menuList.classList.remove("menu-closed");
      menuList.classList.add("menu-opened");
      overlay.classList.add("overlay-modal");
      body.style.overflow = "hidden";
    } else {
      menuButton.classList.remove("button-opened");
      menuButton.classList.add("button-closed");
      menuList.classList.remove("menu-opened");
      menuList.classList.add("menu-closed");
      overlay.classList.remove("overlay-modal");
      body.style.overflow = '';
    }
  });
});