//Object literal


let vasudha = {
    myName: "Vasudha Wankhade",
    myAge: 22,
    display: function() {
        console.log(vasudha.myName)
    }
}

console.log(vasudha)

//By class

class Details {

    constructor(mnm, mag) {
        this.myName = mnm
        this.myAge = mag

    }
    display = function() {
        console.log(this.myName)
    }

}

let vasudhaa = new Details("Vasudha", 22)
console.log(vasudhaa)

//By using function constructor

let Student = function(snm, sag) {
    this.stName = snm
    this.stAge = sag
        //this.display = function() {
        //    console.log(this.stName)
        //}
}

let sanju = new Student("Sanjivani", 22)
console.log(sanju)

let vv = new Student("Vasudha", 22)
console.log(vv)

//Display function is common b to each object created by Student
//To remove it we directly add it to Student prototype

Student.prototype.display = function() {
    console.log(this.stName)
}

let mamta = new Student("Mamta", 45)
console.log(mamta)

//instance of 

console.log(mamta instanceof Student) //returns boolean value
console.log(mamta.__proto__ === Student.prototype)

// New property can be added to prototype


Student.prototype.location = "Maharashtra"
console.log(mamta.location)

let Personality = function(nm, adrs) {
    this.name = nm
    this.addaress = adrs
}

let namu = new Personality("Namarata", "Amravati")
console.log(namu)

Personality.prototype.hobby = "Travelling"
console.log(namu.hobby)

let vvv = new Personality("Vasudha", "Travelling")
console.log(vvv.hobby)

console.log(vvv.hasOwnProperty("hobby"))

//Array 

let array = [11, 22, 44, 55, 66]

console.log(array.__proto__ === Array.prototype)

//This means that array is object of class Array

//There is no method such as "Duplicate" for array but we can create it

Array.prototype.Duplicate = function() {
    return Array.from(new Set(this))
}

let arr1 = [11, 11, 22, 11, 44]
console.log(arr1.Duplicate())

//Create a method which give addition of all elements of array

Array.prototype.Addition = function() {
    let add = this.reduce(function(acc, el) {
        return acc + el
    }, 0)

    return add
}

let arr2 = [1, 2, 3, 4, 5]
console.log(arr2.Addition())