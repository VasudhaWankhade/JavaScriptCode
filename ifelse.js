// Greatest of three numbers

let a = 1000000
let b = 20000
let c = 400
let max = 0
    // Program 1


if (a > b && a > c) {
    max = a
} else if (b > c) {
    max = b
} else {
    max = c
}
console.log(max)

// Program 2

if (a > b) {
    if (a > c) {
        max = a
    }
} else if (b > c) {
    max = b
} else {
    max = c
}
console.log(max)

//  program 3


max = a
if (b > max) {
    max = b
}
if (c > max) {
    max = c
}
console.log(max)

// Program of continue and break

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    if (i == 7) {
        break
    }
    console.log(i) //0   1   2   3   4   6   
}


// Ternary operator==>When there are only two conditions ternary operator is used

let age = 18

if (age > 18) {
    console.log("You can drive")
} else(console.log("You can not drive"))

age > 18 ? console.log("You can drive") : (console.log("You can not drive"))
    //condition?    If condition is true    :   If condition is false


30 > 10 && 20 > 5 ? console.log("You can") : console.log("You can not")