// Arrays
// 1. Number Sorter: Sort an array of numbers in ascending or descending order.
const numberList = [45, 54, 12, 56, 38]

function sortNumbers(numbers, order){
    if (order === 'asc') {
        return numbers.slice().sort((a, b) => a - b);
    } else if (order === 'desc') {
        return numbers.slice().sort((a, b) => b - a);
    } else {
        return console.log('Invalid order. Please use "asc" or "desc".');
    }
}

console.log(sortNumbers(numberList, "asc"));
console.log(sortNumbers(numberList, "desc"));


// 2. Word Finder: Check if a given word exists within an array of words.
const wordsList = [
    "Sun",
    "Bright",
    "Day",
    "Cool"
]
console.log(wordsList.includes("Black"));

// 3. Largest Number Finder: Find the largest number in an array
const numberFinder = [
    45,
    125,
    12,
    56,
    99
]
console.log(Math.max(numberFinder[0], numberFinder[1], numberFinder[2], numberFinder[3], numberFinder[4]));

// 4. Duplicate Remover: Remove duplicate elements from an array.
const wordLists = ["Sun", "Ball", "Day", "Cool", "Ball"]

function removeDuplicate(array){
    return console.log([...new Set(array)]);
}

removeDuplicate(wordList)

// 5.  Array Reverser: Reverse the order of elements in an array.
const wordList = [
    "Sun",
    "Bright",
    "Day",
    "Cool"
]
console.log(wordList.reverse());