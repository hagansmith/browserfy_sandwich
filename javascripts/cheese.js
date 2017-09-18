"use strict";

const loadCheese = (onCheeseLoad, onLoadError) => {
  const cheeseLoader = new XMLHttpRequest();
  cheeseLoader.addEventListener('load', onCheeseLoad);
  cheeseLoader.addEventListener('error', onLoadError);
  cheeseLoader.open('GET', '../data/cheese.json');
  cheeseLoader.send();
};

module.exports = loadCheese;
