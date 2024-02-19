// For Loops
// 1. Number Summation: Calculate the sum of all numbers from 1 to a given number.
let numberSummation = window.prompt("Enter a number:");
numberSummation = Number(numberSummation)

if (!isNaN(numberSummation)) {
    let summation = 0;

    for (let i = 0; i <= numberSummation; i++) {
        summation += i;
    }

    console.log(`The sum of numbers from 1 to ${numberSummation} is: ${summation}`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}

// 2. Countdown Timer: Print a countdown from a given number to 1.
let numberToCount = window.prompt("Enter a number")
numberToCount = Number(numberToCount)

for (let i = numberToCount; i >= 1; i--){
    let countDown = i
    console.log(countDown);
}

// 3. Multiplication Table Generator: Print a multiplication table for a given number.
let numberToMultiply = window.prompt("Enter a number")
numberToMultiply = Number(numberToMultiply)

for(let i = 1; i <= 12; i++){
    let multiplicationTable = numberToMultiply * i
    console.log(`${numberToMultiply} x ${i} = ${multiplicationTable}`);
}

// 4.  Array Element Printer: Print each element of an array.
const arrayElement = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
]

for(let i = 0; i < arrayElement.length; i++){
    console.log(arrayElement[i]);
}


// 5.  String Repeater: Repeat a string a specified number of times.
let stringToRepeat = window.prompt("Enter a string")

for(let i = 0; i < 5; i++){
    console.log(stringToRepeat);
}