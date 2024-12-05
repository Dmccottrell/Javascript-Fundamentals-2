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



//recap

const darrylArray = [
	"Darryl",
	"McCottrell",
	2024 - 1999,
	"engineer",
	[Julia, Dad, Mom], //array within an array
];

//Objects
//simplest way to use objects, called object literal
// use objects to group together objects that belong together, order does not matter compared to arrays
const darryl = {
	// curly braces to define an object
	firstName: "Darryl",
	lastName: "McCottrell",
	age: 2024 - 1999,
	job: "Engineer",
	friends: ["Chimmey, Paul, Eric"],
};


const darryl = {
	// curly braces to define an object
	firstName: "Darryl",
	lastName: "McCottrell",
	age: 2024 - 1999,
	job: "Engineer",
	friends: ["Chimmey", "Paul", "Eric"],
};

console.log(darryl);

//Dot Notation

console.log(darryl.lastName);
console.log(darryl["lastName"]); // bracket notation

const nameKey = "Name";

console.log(darryl["first" + nameKey]);
console.log(darryl["last" + nameKey]);

//when we need to computer propert name like above use bracket notation, otherwise use the dot notation

const interestedIn = prompt(
	"What do you wantr to know about Darryl? Choose between firstName, lastName, age, job, and friends",
);

if (darryl[interestedIn]) {
	console.log(darryl[interestedIn]); // need to use bracket notation in this prompt case
} else {
	console.log(
		'Wrong request! Choose between firstName, lastName, age, job, and friends"',
	);
}

darryl.location = "Chicago";
darryl["X"] = "Thatnoob24";
console.log(darryl);

//Challenge
//"Darryl has 3 friends, and his best friend is called Michael"

console.log(
	`${darryl.firstName} has ${darryl.friends.length} friends and, his best friend is called ${darryl.friends[0]}`,
);


//OBJECT Methods
//methods are properties and an instance below object methods can hold functions as long as colon : is used
const darryl = {
	// curly braces to define an object
	firstName: "Darryl",
	lastName: "McCottrell",
	birthYear: 1999,
	job: "Engineer",
	friends: ["Chimmey", "Paul", "Eric"],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {
	// 	return 2024 - birthYear;
	// },

	// calcAge: function () {
	// 	//console.log(this); //this point to the object for example darryl is the object so it calls it uses it in place of the object
	// 	return 2024 - this.birthYear; // references darryk birthyear object
	// },

	calcAge: function () {
		this.age = 2024 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()} year old ${
			darryl.job
		}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license `; // if/else statement, if true prints a, if false prints no
	},
};

console.log(darryl.calcAge());

console.log(darryl.age); //most effiecient
console.log(darryl.age);
console.log(darryl.age);
//console.log(darryl["calcAge"](1999)); // breacket notation would need to be a string to call the function

//challenge
//"Darryl is a 25 year old teacher, and he has a drivers license"

console.log(darryl.getSummary());
 

//FOR LOOP iteration

console.log("Lifting weights repition 1");

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repition ${rep} `); //call intializer in console to show rep counter being increased
}
*/
//Looping arrays, breaking and continuing

const darryl = [
	"Darryl",
	"McCottrell",
	2024 - 1999,
	"engineer",
	["Julia", "Dad", "Mom"],
];

const types = [];
// Normal way of going through array
// console.log(darrylArray[0]);
// ///...
// console.log(darrylArray[1]);
// console.log(darrylArray[4]);

//for loop version of going through array
for (let i = 0; i < darryl.length; i++) {
	// use length to find the amount within array
	console.log(darryl[i], typeof darryl[i]);

	types[i] = typeof darryl[i];
}

types[0] = "string";
console.log(types);
