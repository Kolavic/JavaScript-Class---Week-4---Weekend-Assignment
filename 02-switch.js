// Switch
// 1. Day of the Week Printer: Print the name of the day for a given number (1-7)
let weekNumber = window.prompt("Enter number")
weekNumber = Number(weekNumber)

switch (true) {
    case weekNumber === 1:
        console.log("Today is Sunday");
        break

    case weekNumber === 2:
        console.log("Today is Monday");
        break

    case weekNumber === 3:
        console.log("Today is Tuesday");
        break

    case weekNumber === 4:
        console.log("Today is Wednesday");
        break

    case weekNumber === 5:
        console.log("Today is Thursday");
        break

    case weekNumber === 6:
        console.log("Today is Friday");
        break

    case weekNumber === 7:
        console.log("Today is Saturday");
        break

    default:
        console.log("Enter a number between 1 and 7");
    
}


// 2. Grade Evaluator: Assign a letter grade (A, B, C, D, or F) based on a numerical grade.
let scoreNumber = window.prompt("Enter a number from 0 - 100")
scoreNumber = Number(scoreNumber)

switch(true) {
    case scoreNumber >= 70 && scoreNumber <= 100:
        console.log(`${scoreNumber}: Grade A`);
        break

    case scoreNumber >= 60 && scoreNumber <= 69:
        console.log(`${scoreNumber}: Grade B`);
        break

    case scoreNumber >= 50 && scoreNumber <= 59:
        console.log(`${scoreNumber}: Grade C`);
        break

    case scoreNumber >= 40 && scoreNumber <= 49:
        console.log(`${scoreNumber}: Grade D`);
        break

    case scoreNumber >= 0 && scoreNumber <= 39:
        console.log(`${scoreNumber}: Grade F`);
        break

    default:
        console.log(`Enter a number not more than 100. You entered ${scoreNumber}`);
}

// 3. Rock-Paper-Scissors Game: Determine the winner based on player choices.

const gameOptions = [
    0,
    1,
    2
]

let machineChoice = Math.floor(Math.random() * gameOptions.length)

let playerInput = window.prompt("Let's play Rock, Paper, Scissors")
let playerChoice = playerInput.toLowerCase()

switch (true) {
    // Draw outcomes
    case playerChoice === "rock" && machineChoice === 0:
        console.log("This is a draw, we both chose Rock");
        break

    case playerChoice === "paper" && machineChoice === 1:
        console.log("This is a draw, we both chose Paper");
        break

    case playerChoice === "scissors" && machineChoice === 2:
        console.log("This is a draw, we both chose Scissors");
        break

    // Machine win outcomes
    case playerChoice === "rock" && machineChoice === 1:
        console.log("You: Rock. Me: Paper. I win this round");
        break

    case playerChoice === "paper" && machineChoice === 2:
        console.log("You: Paper. Me: Scissors. I win this round");
        break

    case playerChoice === "scissors" && machineChoice === 0:
        console.log("You: Scissors. Me: Rock. I win this round");
        break

    // Player win outcomes
    case playerChoice === "rock" && machineChoice === 2:
        console.log("You: Rock. Me: Scissors. You win this round");
        break

    case playerChoice === "paper" && machineChoice === 0:
        console.log("You: Paper. Me: Rock. You win this round");
        break

    case playerChoice === "scissors" && machineChoice === 1:
        console.log("You: Scissors. Me: Paper. You win this round");
        break

    default:
        console.log("Invalid input");
}





// 4. Month Name Displayer: Print the name of a month for a given number (1-12).
let monthNumber = window.prompt("Enter number")
monthNumber = Number(monthNumber)

switch (true) {
    case monthNumber === 1:
        console.log("January");
        break

    case monthNumber === 2:
        console.log("February");
        break

    case monthNumber === 3:
        console.log("March");
        break

    case monthNumber === 4:
        console.log("April");
        break

    case monthNumber === 5:
        console.log("May");
        break

    case monthNumber === 6:
        console.log("June");
        break

    case monthNumber === 7:
        console.log("July");
        break

    case monthNumber === 8:
        console.log("August");
        break
    
    case monthNumber === 9:
        console.log("September");
        break

    case monthNumber === 10:
        console.log("October");
        break

    case monthNumber === 11:
        console.log("November");
        break

    case monthNumber === 12:
        console.log("December");
        break

    default:
        console.log("Enter a number between 1 and 12");
}


// 5. Simple Menu: Create a menu with a few options and execute different actions based on the user's choice.

function simpleMenu(customerChoice){
    switch(true){
        case customerChoice === "Item 1":
            console.log("Potato and Chips");
            break
    
        case customerChoice === "Item 2":
            console.log("Bread and Egg");
            break
    
        case customerChoice === "Item 3":
            console.log("Rice and Stew");
            break
    
        default:
            console.log("Pick an item on the menu");
    }
}

simpleMenu("Item 1")