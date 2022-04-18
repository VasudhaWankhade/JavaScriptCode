//function  ==>to avoid repetation of code

let c = 20
let d = 10

console.log(c + d)
console.log(c - d)
console.log(c * d)
console.log(c / d)
console.log(c % d)

let f = 30
let n = 40

console.log(f + n)
console.log(f - n)
console.log(f * n)
console.log(f / n)
console.log(f % n)

//In above case we have to write above 5 lines every time for different variables
//so to avoid this repeatation we use function
console.log("==============================================================")

function calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}


calculator(20, 10)

console.log("==============================================================")



//Ways to write Function

//1)Function Declaration

function add(a, b) {
    console.log(a + b)
}

add(20, 30)

//2)Function Expression==>Firast class function in JavaScript

let add2 = function(c, d) {
    console.log(c + d)
}

add2(40, 50)

//3)Arrow Function==>Syntax advantage of arrow function is that if there is only one return 
//statement in blocks we can write it in minimize form as shown in 2nd example

let add3 = (m, n) => {
    console.log(m + n)
}

add3(5, 5)

let add4 = (s, t) => s + t
let jj = add4(60, 10)
console.log(jj)

console.log("==============================================================")
    // Different types of functions

//1)Function without parameter without return type ==> gives same output every time we call the function
//no return value so can not store and reuse output 

function substract() {
    console.log(20 - 10)
}
substract()
substract()

//2)Function with parameter without return type ==> gives different output for different 
//parameters every time we call the function but value can not be stored and reused

function sub1(x, y) {
    console.log(x - y)
}
sub1(10, 5)
sub1(20, 10)

//3)Function with parameter with return type==> can restore and reuse the value

function sub2(l, mm) {
    return l - mm
}
let value = sub2(25, 5)
console.log(value)
value = value + 100
console.log(value)

// 4)Function without paramter with return type

function call() {
    return "hello"
}
let val = call()
console.log(val)
console.log(val + " Vasudha")


console.log("=========================================================================")

let add1 = function(p = 1, q = 5, r = 6) {
    console.log(p + q + r)
}
add1(1, 2, 3)
console.log(add1)

//number as a parameter to another function

function add9(v, w) {
    console.log(v + w)
    return v + w
}
add9(1, 3) //4
let resultAdd = add9(1, 3)
console.log(add9) //4

//function with parameter but without argument

function multiply(c, d) {
    console.log(c)
    console.log(d)

    return c * d
}
multiply() //undefined undefined
let mul = multiply()
console.log(mul) //NaN

//already passed arguments

function divide(q = 10, r = 2) {
    console.log(q / r)
}
divide() //5
divide(15, 5) //3
let noret = divide()
console.log(noret) //undefined


//String as a parameter to another function

let strring = "Vishakhapattanam"

function wish(cityName) {
    console.log('Welcome to ', cityName)
}

wish(strring)



//array as a parameter to another function

let aarraayy = [1, 2, 4, 5]

function maxNumber(array) {
    let addititon7 = array.reduce(function(acc, el) {
        return acc + el
    }, 0)
    console.log(addititon7)

}
maxNumber(aarraayy)

//Object as a parameter to another function

let info = {
    nameOfcity: "Mumbai",
    famousFor: "Bollywood Industry",
    speciality: "Capital of Maharashtra"
}

function ct({ nameOfcity: ncity, speciality: spc }) {
    // console.log(nameOfcity)
    // console.log(speciality)
    console.log(ncity)
    console.log(spc)

}

ct(info)


//Function as a parameter to another function

let diviide = function(a1, a2) {
    console.log(a1 / a2)
}

function division(fn) {
    fn = function(a, b, c) {
        console.log(a + b + c)
    }
    fn(1, 2, 3)

}
division(diviide)