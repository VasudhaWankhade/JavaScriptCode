//Find longest word in given string

let sentence = "Wish you and your family Happy Holi"

//To separate each word and store it in array we can use split() method

let arrayy = sentence.split(" ")
console.log(arrayy)

let longWord = arrayy.reduce(function(acc, el) {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }
}, arrayy[0])
console.log(longWord)

//Update example

let car = {
    model: "BMW",
    color: "Black"
}

//print properties and key value of above object

for (let key in car) {
    console.log(key, car[key])
}

//Write it in function

function details(obbject) {
    for (let key in obbject) {
        console.log(key, obbject[key])
    }
}
details(car)

//Array

let digits = [1, 2, 3, 5, 6, 78, 00]

function retrieve(arrOfnum) {
    arrOfnum[1] = 100
    console.log(arrOfnum)
}
console.log(digits)
retrieve(digits) //will give updated array
console.log(digits) //will give updated array

//Object

let soap = {
    nameOfbrand: "Liril",
    cost: 20,
    manufacturedIn: "India"
}

function soapInfo(soapName) {
    console.log(soapName)
    soapName.cost = 35
}
console.log(soap) //will give same object
soapInfo(soap) //will give same object
console.log(soap) //will give cost=35

//function as a parameter to another function

let arrForfun = [12, 345, 675, 34, 65, 32, 77, 44, 56]
let evven = []
let oodd = []

let whatTodo = function(el) {
    if (el == 0) {
        evven.push(el)
        return evven
    } else {
        oodd.push(el)
        return oodd
    }
}

function solveArr(arr, fn) {

}


solveArr(arrForfun, whatTodo)
    //console.log(evven)