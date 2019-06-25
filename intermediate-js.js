// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]


originalArray.reverse()

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}


// Log the type of bicycle:
var type = bicycle.filter( value => value.type)

console.log(type);

// Log the bell:
var gear = bicycle.filter( value => value.gear)

console.log(gear);

// Log the PSI:
var specs = bicycle.filter( value => value.specs)

console.log(specs);


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"

function letterCounter(str, letter)
{
	var letterCounter = 0;
	for (let i = 0; i < str.length; i++)
	{
		letterCounter += 1;
	}
}
return letterCounter;
}
console.log(letterCounter)



var array = ourString.toLocaleLowerCase().split("")

letterCounter = (array1, value) => {
	return.array.filter(v) => (v === value)).length
}
console.log(letterCounter(array1,"l"))

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const getFib = ( => {
	var count = []
	for (let i =0; i <arr.length; i++){
		var element = arr[i]
		if (element % 2 !== 0)
		count.push(element)
	}
}
return answer
}
console.log(addCheck(fullArr))

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
const onlyOdd = (arr) => {
	var newArr = fullArr.fliter (v) =>{
		if(typeof (v) === "number"){
			(parseInt(v,10) % 2 === 1)
		} 
	}
}
return newArr
}
console.log(onlyOdd())