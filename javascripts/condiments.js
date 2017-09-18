"use strict";

const loadCondiments = (onCondimentsLoad, onLoadError) => {
  const condimentsLoader = new XMLHttpRequest();
  condimentsLoader.addEventListener('load', onCondimentsLoad);
  condimentsLoader.addEventListener('error', onLoadError);
  condimentsLoader.open('GET', '../data/condiments.json');
  condimentsLoader.send();
};

module.exports = loadCondiments;
