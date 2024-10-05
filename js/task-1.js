const categories = document.querySelectorAll(`#categories .item`);
categories.forEach(category => {
  const categoriesTitle = category.querySelector(`h2`).textContent;
  const elementsItem = category.querySelectorAll('ul li').length;
});

console.log(`Category: ${categoriesTitle}`);
console.log(`Elements: ${elementsItem}`);
