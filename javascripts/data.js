"use strict";
const printToDom = require('./dom');
const loadBread = require('./bread');
const loadMeat = require('./meat');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadVeggies = require('./veggies');

const errorFunction = () => {
  console.log("error error error file load");
};

const breadLoad = function () {
  let breadArray = JSON.parse(this.responseText).bread;
  printToDom(breadArray);
  loadMeat(meatLoad, errorFunction);
};

const meatLoad = function () {
  let meatArray = JSON.parse(this.responseText).meat;
  printToDom(meatArray);
  loadCheese(cheeseLoad, errorFunction);
};

const cheeseLoad = function () {
  let cheeseArray = JSON.parse(this.responseText).cheese;
  printToDom(cheeseArray);
  loadVeggies(veggiesLoad, errorFunction);
};
const veggiesLoad = function () {
  let veggiesArray = JSON.parse(this.responseText).veggies;
  printToDom(veggiesArray);
  loadCondiments(condimentsLoad, errorFunction);
};

const condimentsLoad = function () {
  let condimentsArray = JSON.parse(this.responseText).condiments;
  printToDom(condimentsArray);
};



const init = () => {
  loadBread(breadLoad, errorFunction);
  // loadMeat(meatLoad, errorFunction);
  // loadCheese(cheeseLoad, errorFunction);
  // loadCondiments(condimentsLoad, errorFunction);
  //loadVeggies(veggiesLoad, errorFunction);
};

module.exports = init;
