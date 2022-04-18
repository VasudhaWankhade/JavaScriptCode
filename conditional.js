/*conditional statements==>When=used when there are multiple outputs for single input
For what?== to check condition is true or false
*/

//Example

/*
no.of ticket 5 ==5 %
no.of ticket 5<>10 ==10 %
no.of ticket 10< ==50 % */

let numOfTickets = 0

if (numOfTickets > 0 && numOfTickets <= 5) {
    console.log('You got 5% discount :)')
} else if (numOfTickets > 5 && numOfTickets <= 10) {
    console.log('You got 10% discount :)')
} else if (numOfTickets > 10) {
    console.log('You got 50% discount :)')
} else {
    console.log("No Discount :(")
}

//palindrome
//