// Function Parameters
// 1.  Number Adder: Take two numbers as parameters and return their sum.
function numberAdder(number1, number2){
    let answer = number1 + number2
    let result = `${number1} + ${number2} is ${answer}`
    return console.log(result);
}
numberAdder(10, 19)

// 2. Word Length Checker: Take a word as input and return its length.
function wordLengthChecker(wordInput){
    let length = wordInput.length
    let result = `${wordInput} has ${length} characters`
    return console.log(result);
}
wordLengthChecker("Sample")

// 3.  Age Difference Calculator: Calculate the age difference between two people given their birth years.
function ageDifferenceCalculator(age1, age2){
    let answer = age1 - age2
    let result = `${age1} - ${age2} is ${answer}`
    return console.log(result);
}
ageDifferenceCalculator(54, 12)

// 4. Temperature Converter: Convert between Celsius and Fahrenheit.
function temperatureConverter(celsiusTemp){
    let celsiusToFahrenheit = 33.8
    let conversion = ((9/5) * celsiusTemp) + 32
    let result = `${celsiusTemp}C is ${conversion}F`
    return console.log(result);
}

temperatureConverter(4)

// 5. Currency Converter: Convert between two different currencies.
function currencyConverter(nairaCurrency){
    let exchangeRate = 1250
    let conversion = nairaCurrency / exchangeRate
    let result = `N${nairaCurrency} = $${conversion}`
    return console.log(result);
}
currencyConverter(25000)