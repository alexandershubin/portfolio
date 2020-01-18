'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const valueBox = document.querySelectorAll('.value-box');
  const valuePercent = document.querySelectorAll('.value__procent');
  const skill = document.querySelector('.procent-list');

  // функция заполнения всех элементов скрол-бара
  const addLineBar = () => {
    valuePercent.forEach((item, i) => {
      scrollBar(item.innerHTML, i)
    });
  };

  // функция заполнения процентов в скрол-баре
  const scrollBar = (a, i) => {
    let width = 0;
    const interval = setInterval(() => {
      if (width >= a) {
        clearInterval(interval);
      } else {
        width++;
        valuePercent[i].innerHTML = valueBox[i].style.width = width + "%";
      }
    }, 30)
  };
  // функция загрузки скрол бара при прокрутки до блока
  const scrollPage = () => {
    window.addEventListener('scroll', scrollPage);
    let coords = skill.getBoundingClientRect(); // определет размеры блока
    let windowHeight = document.documentElement.clientHeight; // размер окна браузера
    let topVisible = coords.top > 0 && coords.top < windowHeight;
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    if (topVisible || bottomVisible) {
      addLineBar();
      window.removeEventListener('scroll', scrollPage);
    }
  };

  scrollPage();
});
