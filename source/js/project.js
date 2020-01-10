window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const listGallery = document.querySelector('.portfolio__list');

  const gallery = [{
      category: `graphics, web, marketing`,
      img: `img.png`
    },
    {
      category: `graphics, web, marketing`,
      img: `img_2.png`
    },
    {
      category: `web, illustrator`,
      img: `img_3.png`
    },
    {
      category: `graphics, photoshop`,
      img: `img_4.png`
    },
    {
      category: `photoshop, graphics`,
      img: `img_5.png`
    }
  ];

  const filterButtons = () => {
    const btns = document.querySelectorAll(`.portfolio__buttons button`);
    btns.forEach((item) => {
      item.addEventListener(`click`, (e) => {
        btns.forEach(item => item.classList.remove('active'))
        item.classList.add('active');
        const category = item.innerHTML.toLowerCase();
        renderGallery(category);
      })
    });
  };

  const renderGallery = (category) => {
    const html = gallery
      .filter(item => category === 'all' ? item : item.category.includes(category))
      .reduce((acc, it) => [...acc, `<img src="img/${it.img}">`], []);
    listGallery.innerHTML = html.join(``);
  };

  renderGallery('all');
  filterButtons();
});
