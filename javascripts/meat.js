"use strict";

const loadMeat = (onMeatLoad, onLoadError) => {
  const meatLoader = new XMLHttpRequest();
  meatLoader.addEventListener('load', onMeatLoad);
  meatLoader.addEventListener('error', onLoadError);
  meatLoader.open('GET', '../data/meat.json');
  meatLoader.send();
};

module.exports = loadMeat;
