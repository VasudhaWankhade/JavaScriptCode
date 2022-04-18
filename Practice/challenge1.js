//let enter = prompt("")
let sum = 0

for (let i = 0; i < 100; i++) {
    let enter = prompt("Enter the number")
    if (enter != 0) {
        sum = sum + Number(enter)
    } else if (enter == 0) {
        console.log(`The addition is ${sum}`)
        break
    }
}