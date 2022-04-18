//Write a program to print the sum of negative numbers, sum of positive even numbers and the sum of positive odd numbers
// from a list of numbers (N) entered by the user. 
//The list terminates when the user enters a zero.

let countNegative = 0
let positiveEven = 0
let positiveOdd = 0

function result() {
    console.log(countNegative)
    console.log(positiveEven)
    console.log(positiveOdd)
}
let num;
while (num != 0) {
    num = prompt("Enter number")
    if (num < 0) {
        countNegative = countNegative + Number(num)
    } else if (num > 0) {
        if (num % 2 == 0) {
            positiveEven = positiveEven + Number(num)
        } else {
            positiveOdd = positiveOdd + Number(num)
        }
    }
}
result()