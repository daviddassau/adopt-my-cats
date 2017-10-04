"use strict";


const createDomString = (catz) => {
	let catString = '';
	catz.forEach((cat) => {
		console.log('cat in forEach', cat);
		catString +=   `<div class="col-md-4">`;
		catString +=     `<div class="cat-card">`;
		catString +=       `<div class="image-container">`;
		catString +=         `<img src="${cat.imageUrl}">`;
		catString +=       `</div>`;
		catString +=       `<div class="description-container">`;
		catString +=         `<h3>${cat.name}</h3>`;
		catString +=         `<p> Color: ${cat.color}</p>`;
		catString +=         `<p> Skills: ${cat.specialSkill}</p>`;
		catString +=         `<p class="disabled-cat"> Toes: ${cat.numberOfToes}</p>`;
		catString +=       `</div>`;
		catString +=     `</div>`;
		catString +=   `</div>`;
	});
	printToDom(catString);
};


const printToDom = (catString) => {
	$('#catCardHolder').html(catString);
};


module.exports = {createDomString};