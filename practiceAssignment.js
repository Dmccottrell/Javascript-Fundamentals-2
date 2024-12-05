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

//ARRAYS

/* Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

Log to the console whether the array has 4 elements or not (true or false).

Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

const population = [10, 1441, 332, 83];
console.log(population.length === 4);

const percentages = [
	percentageOfWorld1(population[0]),
	percentageOfWorld1(population[1]),
	percentageOfWorld1(population[2]),
	percentageOfWorld1(population[population.length - 1]),
];
console.log(percentages);

//Methods Arrays
/* Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

*/

const neighbours = ["Canada", "Mexico"];

neighbours.push("Utopia");
neighbours.pop("Utopia");

if (neighbours.includes("Germany")) {
	console.log("Probably not a central european country");
}

neighbours[neighbours.indexOf("Mexico")] = "Mexico City;"; //Changing the name of neighbouring country
console.log(neighbours);

const myCountry = {
	country: "United States",
	capital: " Washington D.C",
	language: "English",
	population: 334,
	neighbours: ["Canada", "Mexico"],

	describe: function () {
		console.log(
			`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`,
		);
	},
	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;

		// Even simpler version (see why this works...)
		// this.isIsland = !Boolean(this.neighbours.length);
	},
};
//Dot and Bracket Notation\

//Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

//Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

console.log(
	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`,
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);
//`${myCountry.country} has ${mycountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`,

//Object methods

// Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// Call the describe method.

// Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

//ITERATION FOR LOOP
// Iteration: The for Loop
// There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

for (let votes = 1; votes <= 50; votes++) {
	console.log(`Voter number ${votes} is currently voting`);
}

//LOOPING ARRAYS, BREAKING AND CONTINUING

// Let's bring back the populations array from a previous assignment.

// Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
	const perc = percentageOfWorld1(populations[i]);
	percentages2.push(perc);
}

console.log(percentages2);

//LOOPING BACKWARDS and LOOPS in LOOPS

// Store this array of arrays into a variable called listOfNeighbours:

// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

// You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

const listOfNeighbours = [
	["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
	for (let y = 0; y < listOfNeighbours[i].length; y++)
		console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

//THE WHILE LOOP
// Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

// Reflect on what solution you like better for this task: the for loop or the while loop?

const percentages3 = [];

let i = 0;
while (i < populations.length) {
	const perc = percentageOfWorld1(populations[i]);
	percentages3.push(perc);
	i++;
}

console.log(percentages3);
