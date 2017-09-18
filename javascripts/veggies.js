"use strict";

const loadVeggies = (onVeggiesLoad, onLoadError) => {
  const veggiesLoader = new XMLHttpRequest();
  veggiesLoader.addEventListener('load', onVeggiesLoad);
  veggiesLoader.addEventListener('error', onLoadError);
  veggiesLoader.open('GET', '../data/veggies.json');
  veggiesLoader.send();
};

module.exports = loadVeggies;
