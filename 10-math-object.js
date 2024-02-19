// Math Object
// 1. Random Number Generator (use Math.random() to generate random numbers)
function randomNumberGenerator(){
    return console.log(Math.floor(Math.random() * 10000));
}

randomNumberGenerator()

// 2.  Quadratic Equation Solver (use Math.sqrt() to find roots of a quadratic equation)


// 3.  Distance Calculator (use the Pythagorean theorem to calculate distance between points)
function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

const distance = calculateDistance(1, 2, 4, 6);
console.log(`The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is: ${distance}`);


// 4. Trigonometric Calculator (calculate sine, cosine, tangent using Math.sin(), Math.cos(), Math.tan())


// 5. Finance Calculator (calculate simple interest, compound interest, loan payments)
function simpleInterest(principal, rate, time){
    return console.log(`Simple interest is: $${(principal * rate * time)/100}`);
}
simpleInterest(1000, 5, 3)