"use strict";

const sandwichDiv = document.getElementById('sandwich');
let sandwich = document.getElementById('sandwich').children;
let components =[];
let position = 0;

	for (let value of sandwich) {
		components.push(value.id);
	}

const domString = (input) => {
  let price = Object.values(input[0]);
	let name = Object.keys(input[0]);
	let finalString = "";

	for (var i = 0; i < name.length; i++){
		let string = "";
		string +=	 `<label class="checkbox-inline"><input type="checkbox" value="${name[i]}" price="${price[i]}">${name[i]}</label>`;
		finalString += string;
	}
	writeSandwich(finalString);
	position += 1;
  };

  const writeSandwich = (string) => {
	   let type = document.getElementById(components[position]);
	    type.innerHTML += string;
};

module.exports = domString;
