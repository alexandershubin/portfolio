'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const addLineBar = () => {
    const valueBox = document.querySelector('.value-box1');
    const valueProcent = document.querySelector('.value__procent');
    let width = 0;

    setInterval(() => {
      if (width >= 80) {
        clearInterval();
      } else {
        width++;
        valueProcent.innerHTML = valueBox.style.width = width + "%";
      }
    }, 20)
  };
  addLineBar();

});
