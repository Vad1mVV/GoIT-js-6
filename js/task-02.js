const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

function makeHTMLString (name) {
  const listPartEl = document.createElement("li");
  listPartEl.textContent = name;
  listPartEl.classList.add('item');

  return listPartEl;
};

list.append(...ingredients.map(makeHTMLString));