"use strict";

let finalPrice = 0;
let footer = document.getElementById('footer');
let selectedTopping = 0;
let allToppings = [];

// Get a reference to the <select> element that has options
var breadChooser = document.getElementById("bread");
var meatChooser = document.getElementById("meat");
var cheeseChooser = document.getElementById("cheese");
var veggieChooser = document.getElementById("veggies");
var condimentChooser = document.getElementById("condiments");
//price is called from the individual toppings file in the past project.
const price = () => {
	footer.innerHTML = `<h3 class="text-center"><p>${allToppings}</p></h3><h3 class="text-center">${finalPrice}</h3>`;
};

const addItAllUp = (event) => {
 	if (event.target.checked === true) {
  finalPrice += parseFloat(event.target.getAttribute("price"));
  allToppings.push(event.target.value);
  price();
 	} else if (event.target.checked === false){
  finalPrice -= parseFloat(event.target.getAttribute("price"));
  allToppings.pop(event.target.value);
  price();
 	}
};

breadChooser.addEventListener("change", addItAllUp);
meatChooser.addEventListener("change", addItAllUp);
cheeseChooser.addEventListener("change", addItAllUp);
cheeseChooser.addEventListener("change", addItAllUp);
veggieChooser.addEventListener("change", addItAllUp);
condimentChooser.addEventListener("change", addItAllUp);

module.exports = breadChooser;
