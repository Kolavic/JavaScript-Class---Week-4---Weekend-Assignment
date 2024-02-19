// Arrow Functions
// 1. Array Element Doubler: Double each element in an array.
const doubleElement = () => {

}


// 2.  String Concatenation: Combine two strings into a single string.
const combineString = (string1, string2) => {
    let joinedString = string1 + string2
    console.log(joinedString);
}

combineString("Sam", "Son")

// 3. Even Number Filter: Filter an array of numbers to keep only the even ones.
const evenNumberFilter = () => {
    numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    delete numberArray[0]
    console.log(numberArray);
}

evenNumberFilter()

const filterEvenNumbers = (arr) => arr.filter((number) => number % 2 === 0);

// Example usage
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersArray = filterEvenNumbers(originalArray);

console.log('Original Array:', originalArray);
console.log('Even Numbers Array:', evenNumbersArray);


// 4. Word Splitter: Split a sentence into an array of words.
const splitWord = () => {

}

// Word Splitter function using arrow function
const splitSentence = (sentence) => sentence.split(/\s+/);

// Example usage
const originalSentence = "This is a sample sentence.";
const wordsArray = splitSentence(originalSentence);

console.log('Original Sentence:', originalSentence);
console.log('Words Array:', wordsArray);


// 5. Number Multiplier: Multiply a number by a given factor.
const multiplyNumber = (number, factor) => {
    let result = number * factor
    console.log(`${number} x ${factor} = ${result}`);
}

multiplyNumber(5, 3)