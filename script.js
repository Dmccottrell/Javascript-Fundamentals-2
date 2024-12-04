// activate strict mode
//forbids user to not make mistake, shows visable errors in developer console

"use strict";

//Functions
//Functions are a piece of code that can be reused many times in code
//Helps keep our code dry since it is reusable code blocks

/*
//Function Declaration
function logger() {
	console.log("My name is Darryl");
}

//calling / running / invoking function
logger();
logger(); // This does not provide a value due to it doesn't return anything
logger();

//This however provides value since it is being returned
function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice; // juice will become result of running function
}
//recieve and capture function into a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); // console.log is a built in function

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Funtion declaration
function calcAge1(birthYear) {
	return 2024 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
	//This is an anonymous function
	return 2024 - birthYear;
};

const age2 = calcAge2(1999);

console.log(age1, age2);



//Arrow Function:

//Arrow function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	// multiple parameters with need
	// ig you have more than one line have to return value
	const age = 2024 - birthYear;
	const retirement = 65 - age;
	//return retirement;
	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "Darryl"));
console.log(yearsUntilRetirement(2000, "Julia"));



//Functions calling other Functions

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
	return juice; // juice will become result of running function
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
	// local variable to each function
	return 2024 - birthYear; // completely different variable outside of function below
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1999, "Darryl"));
console.log(yearsUntilRetirement(1935, "Mike"));


//Introduction to Arrays

//Arrays are data structures

const friend1 = "Michael";
const friend2 = "Peter";
const friend3 = "Steven";

//Array version of above

const friends = ["Michael", "Steve", "Peter"];

console.log(friends);

const y = new Array(1999, 2003, 2005);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); // finds the number of elments in the array
console.log(friends[friends.length - 1]); //can only put expression inside []

friends[2] = "Jay";
console.log(friends);

const firstName = "Darryl";
const darryl = [firstName, "Mccottrell", 2024 - 1999, "Engineer", friends];

console.log(darryl);
console.log(darryl.length);

//Exercise
const calcAge = function (birthYear) {
	return 2024 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

//console.log(calcAge(years)); // Example of what you can't due Produces NaN, can't due operations with arrays

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];

console.log(ages);


*/

//Array Methods

// add elements

const friends = ["Michael", "Steve", "Peter"];
const newLength = friends.push("Jay"); // push function adds new element to array
console.log(friends);
console.log(newLength); //not normally used

friends.unshift("John"); // moves element to front of array
console.log(friends);

//Remove elements
friends.pop(); //Removes last element, dont't need to pass an argument
const popped = friends.pop(); //Removes last element, dont't need to pass an argument
console.log(popped);
console.log(friends);

friends.shift(); // removes first element
console.log(friends);

console.log(friends.indexOf("Steve"));
console.log(friends.indexOf("bob"));

console.log(friends.includes("Steve")); // use includes method to write conditionals
console.log(friends.includes("bob"));

if (friends.includes("Steve")) {
	//most used case of includes method
	console.log("You have a friend called Steve");
}
