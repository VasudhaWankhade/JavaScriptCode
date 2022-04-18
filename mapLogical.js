//                                      Logical

let quizOne = new Map(
    [
        ["Question :", "Answer"],
        ["What is capital of India", "Delhi"],
        ["What is capital of Japan", "Tokiyo"],
        ["What is capital of China", "Beijing"],
        ["What is capital of America", "Washington DC"],
        ["What is capital of Nepal", "Kathmandu"]
    ]
)
console.log(quizOne)

//print all keys

// for (let key of quizOne.keys()) {
//     console.log(key)
// }

// console.log(quizOne.values())
// for (let key of quizOne.values()) {
//     console.log(key)
// }

let correct = 0

// for (let [key, value] of quizOne) {
//     if (key === "Question :") {
//         let yourAnswer = prompt(key)
//         if (yourAnswer === value) {
//             correct += 1
//         }
//     }
// }

let regularExp = /^What/i
for (let [key, value] of quizOne) {
    if (regularExp.test(key)) {
        let yourAnswer = prompt(key)
        if (yourAnswer === value) {
            correct++
        }
    }
}

console.log(correct)

console.log("You score is :", correct, "outof 5")

if (correct == 0) {
    console.log("Try again :(")
} else if (correct <= 3 && correct >= 1) {
    console.log("Good attempt")
} else {
    console.log("Fantastic !")
}