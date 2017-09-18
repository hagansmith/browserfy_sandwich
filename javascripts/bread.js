"use strict";

const loadBread = (onBreadLoad, onLoadError) => {
  const breadLoader = new XMLHttpRequest();
  breadLoader.addEventListener('load', onBreadLoad);
  breadLoader.addEventListener('error', onLoadError);
  breadLoader.open('GET', '../data/bread.json');
  breadLoader.send();
};

module.exports = loadBread;
