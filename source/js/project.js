'use strict';
window.addEventListener('DOMContentLoaded', function () {
  initGallery();
});

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

/**
 * Обработать клик по кнопке фильтра
 * @param {HTMLElement} button 
 * @param {NodeList} btns 
 * @returns {void}
 */
const buttonClickHandler = (button, btns) => {
  const category = button.innerHTML.toLowerCase();
  btns.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  renderGallery(category === 'all' ? undefined : [category]);
};

/**
 * Получить случайное целое число
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const getRandomIntegerNumber = (min, max) => {
  return (Math.random() * (max - min)) + min;
};

/**
 * Анимировать появление изображений
 * @returns {void}
 */
const getAnimationImage = () => {
  const listGalleryImg = document.querySelectorAll('.portfolio__list img');
  listGalleryImg.forEach(item => {
    item.style.animationDelay = getRandomIntegerNumber(0, 0.4) + 's';
  })
};

/**
 * Отрендерить галлерею
 * @param {Array<string>} [categories]
 * @returns {void}
 */
const renderGallery = (categories) => {
  const html = gallery
    .filter(item => !categories 
      ? item 
      : checkCategoriesIntersect(item.category.split(', '), categories))
    .reduce((acc, it) => [...acc, `
        <li><img class="portfolio__image" data-categories="${it.category}" src="img/${it.img}"></li>
      `], []);

  listGallery.innerHTML = html.join(``);
  getAnimationImage();
};

/**
 * Обработать клик по изображению
 * @param {HTMLElement} image
 * @returns {void}
 */
const imageClickHandler = (image) => {
  const categories = image.dataset.categories.split(', ');
  renderGallery(categories);
}

/**
 * Инициализировать кнопки фильтра
 * @returns {void}
 */
const initFilterButtons = () => {
  const buttonsContainer = document.querySelector(`.portfolio__buttons`);
  const btns = document.querySelectorAll(`.portfolio__buttons button`);

  buttonsContainer.addEventListener('click', (evt) => {
    if (!evt.target.matches('button')) {
      return;
    }

    buttonClickHandler(evt.target, btns);
  });
};

/**
 * Проверить пересекаются ли категории
 * @param {Array<string>}
 * @param {Array<string>}
 * @returns {boolean}
 */
const checkCategoriesIntersect = (a, b) => {
  const intersection = a.filter(category => b.includes(category));
  return Boolean(intersection.length);
}

/**
 * инициализирует фильтр по изображениям
 * @returns {void}
 */
const initImagesFilter = () => {
  const imagesContainer = document.querySelector('.portfolio__list');
  
  imagesContainer.addEventListener('click', (evt) => {
    const {target} = evt;
    
    if (!target.matches('.portfolio__image')) {
      return;
    }

    imageClickHandler(target);
  });
}

/**
 * Инициализировать галерею
 * @returns {void}
 */
const initGallery = () => {
  renderGallery();
  initFilterButtons();
  initImagesFilter();
}
