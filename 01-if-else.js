If-Else
// 1. Age Eligibility Checker: Determine if a person is eligible to vote based on their age
function ageEligibilityChecker(){
    let votingAge = 18
    let userAge = window.prompt("Enter your age")

    if (userAge >= votingAge){
        console.log("You are eligible to vote");
    } else {
        console.log("You are not elgible to vote");
    }
}

ageEligibilityChecker()

// 2. Even or Odd Number Identifier: Check if a given number is even or odd and display a message.
function evenOddIdentifier(){
    let userNumber = window.prompt("Enter a number")
    let formula = userNumber % 2

    if (formula === 0) {
        console.log(`${userNumber} is an even number`);
    } else {
        console.log(`${userNumber} is an odd number`);
    }
}

evenOddIdentifier()

// 3. Vowel or Consonant Classifier: Determine if a given letter is a vowel or a consonant.

function alphabetType(){
    let alphabet = window.prompt("Enter a letter")

    if (alphabet === "a" || alphabet === "e"  || alphabet === "i" || alphabet === "o" || alphabet === "u") {
        console.log(`${alphabet} is a vowel`);
    } else {
        console.log(`${alphabet} is a consonant`);
    }
}

alphabetType()

// 4. Largest Number Finder: Compare two numbers and return the larger one.

function largestNumber(number1, number2){
    if(number1 > number2){
        console.log(`${number1} is the larger number`);
    } else {
        console.log(`${number2} is the larger number`);
    }
}

largestNumber(48, 48)

// 5. Simple Calculator: Create a calculator that can perform basic arithmetic operations (+, -, *, /).

function simpleCalculator(number1, operator, number2){
    if (operator === "+") {
        console.log(number1 + number2);
    } else if (operator === "-") {
        console.log(number1 - number2);
    } else if (operator === "*") {
        console.log(number1 * number2);
    } else if (operator === "/") {
        console.log(number1 / number2);
    } else {
        console.log("Invalid operation");
    }
}

simpleCalculator(456, "/", 45)