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

//I created this function on my own
function sportsTeam(city, football, baseball, basketball) {
	const team = `In the ${city}, my sports teams are ${football} for football.
        ${baseball} for baseball. And ${basketball} for basketball`;
	return team;
}

sportsTeam("Chicago", "Bears", "Cubs", "Bulls");
sportsTeam("Milwaukee", "Packers", "Brewers", "Bucks");

console.log(sportsTeam);

//FUNCTION DECLARATIONS VS EXPRESSIONS

/* The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

*/
//Function declaration
// function percentageOfWorld1(population) {
// 	return (population / 7900) * 100;
// }

//Function Expression
const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100;
};

//Calling function
const world1 = percentageOfWorld1(334);
const world2 = percentageOfWorld1(126);
const world3 = percentageOfWorld1(1114);

console.log(world1, world2, world3);

//Arrow functions

//Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percUS = percentageOfWorld3(334);
const percFrance = percentageOfWorld1(126);
const percChina = percentageOfWorld1(1114);

console.log(percUS, percChina, percFrance);

//CALLING FUNCTIONS WITHING FUNCTION

/* Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.

*/

function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
	const percentage = percentageOfWorld1(population);
	const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
	console.log(description);
};

describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 334);
