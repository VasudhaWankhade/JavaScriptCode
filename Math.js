// Math.floor()==>23.5=>23
// console.log(Math.floor(78.5)) //78
// console.log(Math.floor(78.1))
// console.log(Math.floor(78.9))
// console.log(Math.floor(78.6))
// console.log("===========================================================================")

// Math.ceil()==>

// console.log(Math.ceil(78.5))
// console.log(Math.ceil(78.01))
// console.log(Math.ceil(78.9))
// console.log(Math.ceil(78.1))
// console.log("===========================================================================")

// Math.round()==> round off the value
//34.5=>35,32.1=.32

// console.log(Math.round(78.5))
// console.log(Math.round(78.1))
// console.log(Math.round(78.8))
// console.log(Math.round(78.6))

// console.log("===========================================================================")

// Math.random()

// console.log(Math.floor(Math.random() * 6) + 1)

// Program 1


// let real = Math.floor(Math.random() * 6) + 1
// console.log(real)
// let userInput = prompt("Enter your guess")

// if (userInput == real) {
//     console.log("Your guess is correct")

// } else {
//     console.log("Your guess is incorrect")
// }

// Program 2
//give 6 chances to user to guess

// let random = Math.floor(Math.random() * 6) + 1
// console.log(random)
// let userInput;
// for (let i = 0; i < 6; i++) {
//     userInput = prompt("Guess!!")
//     if (userInput == random) {
//         console.log("Your guess is correct")
//         break
//     } else {
//         console.log("Your guess is incorrect")
//     }
// }

//how many chances  does user want?

// let random = Math.floor(Math.random() * 6) + 1
// console.log(random)
// let chances = prompt("How many chances do you want?")
// let userInput;
// for (let i = 0; i < chances; i++) {
//     userInput = prompt("Guess!!")
//     if (userInput == random) {
//         console.log("Your guess is correct")
//         break
//     } else {
//         console.log("Your guess is incorrect")
//     }
// }

// Program 3

//using while

// let random = Math.floor(Math.random() * 6) + 1
// console.log(random)
// let userInput;
// while (userInput != random) {
//     userInput = prompt("Guess!!")

//     console.log("Your guess is incorrect")
// }
// console.log("Your guess is correct!")

//Program 4==>after how many trial guess is correct

//using while


// let random = Math.floor(Math.random() * 6) + 1
// console.log(random)
// let userInput;
// let count = 0
// while (userInput != random) {
//     userInput = prompt("Guess!!")
//     console.log("Your guess is incorrect")
//     count++
// }
// console.log("Your guess is correct!" + "You tried " + count + " times")

// Program 5

let random = Math.floor(Math.random() * 6) + 1
console.log(random)

while (true) {
    userInput = prompt("Guess!!")
    if (userInput == random) {
        console.log("Your guess is correct")
        break
    } else {
        console.log("Your guess is incorrect")
    }

}