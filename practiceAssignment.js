"use strict";

/*FUNCTIONS PRACTICE
    Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

    Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
*/

function describeCountry(country, population, capitalCity) {
	const people = `${country} has ${population} million people and its capital city is ${capitalCity}  `;
	return people;
}

const descSouth = describeCountry("South America", 255, "Brazil");
const descItaly = describeCountry("Italy", 175, "Rome");
const descFrance = describeCountry("France", 50, "Paris");

console.log(descSouth, descItaly, descFrance);
