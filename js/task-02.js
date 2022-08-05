const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function renderList(array, rootSelector) {
  const targetRenderPoint = document.querySelector(rootSelector)
  const listItems = []
  array.forEach((ingredient) => {
    const createLi = document.createElement('li');
    createLi.classList.add('item');
    createLi.textContent = ingredient
    listItems.push(createLi)

  })
   targetRenderPoint.append(...listItems)
}

renderList(ingredients, "#ingredients")











  



