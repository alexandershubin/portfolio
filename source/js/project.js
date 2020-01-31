'use strict';
window.addEventListener('DOMContentLoaded', function () {
  initGallery();
});

const listGallery = document.querySelector('.portfolio__list');
const gallery = [{
    category: `graphics, web, marketing`,
    img: `img.png`,
    href: `https://alexandershubin.github.io/milatask.github.io/`
  },
  {
    category: `graphics, web, marketing`,
    img: `img_2.png`,
    href: `https://alexandershubin.github.io/milatask.github.io/`
  },
  {
    category: `web, illustrator`,
    img: `img_3.png`,
    href: `https://alexandershubin.github.io/milatask.github.io/`
  },
  {
    category: `graphics, photoshop`,
    img: `img_4.png`,
    href: `https://alexandershubin.github.io/milatask.github.io/`
  },
  {
    category: `photoshop, graphics`,
    img: `img_5.png`,
    href: `https://alexandershubin.github.io/milatask.github.io/`
  }
];

/**
 * Обработать клик по кнопке фильтра
 * @param {HTMLElement} button
 * @returns {void}
 */
const buttonClickHandler = (button) => {
  const category = button.innerHTML.toLowerCase();
  renderGallery(category === 'all' ? undefined : [category]);
};

/**
 * Подсветить выбранные категории
 * @param {Array<string>} [categories]
 * @param {NodeList} buttons
 */
const highlightButtons = (categories = ['all'], buttons) => {
  buttons.forEach(button => {
    const buttonCategory = button.innerHTML.toLowerCase();
    button.classList.toggle('active', checkCategoriesIntersect([buttonCategory], categories));
  });
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
  const buttons = document.querySelectorAll(`.portfolio__buttons button`);
  const html = gallery
    .filter(item => !categories
      ? item
      : checkCategoriesIntersect(item.category.split(', '), categories))
    .reduce((acc, it) => [...acc, `
        <li><a href="${it.href}"><img class="portfolio__image" src="img/${it.img}"></a></li>
      `], []);

  listGallery.innerHTML = html.join(``);
  getAnimationImage();
  highlightButtons(categories, buttons);
};

/**
 * Инициализировать кнопки фильтра
 * @returns {void}
 */
const initFilterButtons = () => {
  const buttonsContainer = document.querySelector(`.portfolio__buttons`);

  buttonsContainer.addEventListener('click', (evt) => {
    const missClick = !evt.target.matches('button');
    return missClick ? false : buttonClickHandler(evt.target);
  });
};

/**
 * Проверить пересекаются ли категории
 * @param {Array<string>} a
 * @param {Array<string>} b
 * @returns {boolean}
 */
const checkCategoriesIntersect = (a, b) => {
  const intersection = a.filter(category => b.includes(category));
  return Boolean(intersection.length);
};

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
};

/**
 * Инициализировать галерею
 * @returns {void}
 */
const initGallery = () => {
  renderGallery();
  initFilterButtons();
  initImagesFilter();
};

//составные данные
// const node = (a, b) => (f) => f(a, b);
// const getTag = (node) => node((a,b) => a);
// const getContent = (node) => node((a,b) => b);
//
// const htmlString = (node) => `<${getTag(node)}>${getContent(node)}</${getTag(node)}>`
//
// const h1 = node('h1', 'Hello World');
// console.log(htmlString(h1));

