"use strict";

// User inputs the number of cats they would like to see in the input box
// That would make a call to the specified API, and add the user's number to the end of the API URL
// Once the cats come back, they are printed to the dom with the image, cat name, color, skills, and amount of toes

const dom = require('./domHandler');


const requestSomeCats = (usersCatsNum) => {
	let catsData = {};
	$.ajax('https://random-dogs-api.herokuapp.com/cats/' + usersCatsNum).done((data) => {
		catsData = data.cats;
		dom.createDomString(catsData);
	}).fail((error) => {
		console.log(error);
	});
};



module.exports = {requestSomeCats};