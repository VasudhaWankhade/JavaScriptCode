let enter = prompt("Enter the number")
let a = 0
let b = 1
let sum = 0
console.log(a)
console.log(b)
let aa = Number(enter)
for (let i = 0; i < aa; i++) {
    sum = a + b
    console.log(sum)
    a = b
    b = sum
}