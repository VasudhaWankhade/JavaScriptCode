//Sanju is allowed to go out with his friends only on the even days of a given month.
// Write a program to count the number of days he can go out in the month of August.

let August = 31
let count = 0
for (let date = 1; date < August; date++) {
    if (date % 2 == 0) {
        console.log(`Today's date is ${date} Sanju is allowed to go out`)
        count++
    } else {
        console.log(`Today's date is ${date}Sanju is not allowed to go out`)
    }
}
console.log(count)