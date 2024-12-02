// activate strict mode
//forbids user to not make mistake, shows visable errors in developer console

"use strict";

//Functions
//Functions are a piece of code that can be reused many times in code
//Helps keep our code dry since it is reusable code blocks

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
