//Rest operator 

function addAll(...arr) {
    return arr.reduce(function(acc, el) {
        return acc + el
    }, 0)
}

let equalsTo = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(equalsTo)


function below8(...arr) {
    return arr.filter(function(el) {
        return el < 8
    })
}
let lessThan8 = below8(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
console.log(lessThan8)



//Spread operator

let income = [1, 3, 2, 4, 5, 123, 4667, 332, 67889, 3234, 67887]

function last5days(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}
last5days(...income)