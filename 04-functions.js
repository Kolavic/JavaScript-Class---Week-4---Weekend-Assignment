// Functions
// 1. Greeter Function: Take a person's name as input and greet them with a personalized message.
function greetUser(userName = "User"){
    console.log(`Hello, ${userName}. Welcome to our app.`);
}

greetUser("Kay")

// 2.  Area Calculator: Calculate the area of a rectangle, triangle, or circle.
function areaCalculator(width, length){
    let areaFormula = width * length
    return console.log(areaFormula);
}

areaCalculator(19, 6)

// 3. Palindrome Checker: Determine if a given word or phrase is a palindrome (reads the same backward as forward)
function palindromeChecker(userInput){
    let cleanedInput = userInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let reversedInput = cleanedInput.split('').reverse().join('');
    
    if (cleanedInput === reversedInput) {
        console.log(`"${userInput}" is a palindrome.`);
    } else {
        console.log(`"${userInput}" is not a palindrome.`);
    }
}

palindromeChecker("Sample")
palindromeChecker("Madam")
palindromeChecker("A Santa at NASA")


// 4. Number Reverser: Reverse the digits of a given number
function numberReverser(userNumber){
    userNumber = String(userNumber)
    let arrayedNumber = userNumber.split('').reverse().join('')
    return console.log(arrayedNumber);
}

numberReverser(123456789)
  

// 5. Simple Sorting Function: Sort an array of numbers in ascending or descending order
function sortNumbers(numberInput, order = "ascending"){
    if (order === "ascending") {
        let numOperation = numberInput.slice().sort((a, b) => a - b)
        return console.log(`Ascending order: ${numOperation}`);

    } else if (order === "descending") {
        let numOperation = numberInput.slice().sort((a, b) => b - a)
        return console.log(`Descending order: ${numOperation}`);
    } else {
        console.log("Invalid input");
    }
}

const numberArray = [3, 65, 12, 23, 91, 44]

sortNumbers(numberArray, "ascending")
sortNumbers(numberArray, "descending")