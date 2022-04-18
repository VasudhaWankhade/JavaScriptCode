//                                          OOPS

const { isConstructorDeclaration } = require("typescript")

//Encapsulation ===>to maintain privacy of data
//               ===>create object by creating the class

//Polymorphism  ===> when there are multiple 
//              ===> one to many

//Inheritance   ===> child has access to parent's methods and properties

//Abstraction   ===> details without additional information

//Object literal

let v = {
    myName: "Vasudha",
    myAge: 22,
    myHobby: ["Reading Books", "Playing"],
    display: function() {
        console.log(this.myHobby)
    }
}

v.display()

//using class

class Details {
    constructor(yourNm, yourAg, yourHb) {
        this.yourName = yourNm
        this.yourAge = yourAg
        this.yourHobby = yourHb
    }
    display() {
        console.log(this.yourHobby)
    }
}

let vv = new Details("Vasudha", 22, ["Reading Books", "Playing"])
vv.display()
console.log(vv)

//function constructor

//It is old method to create object as we create object by class

let Student = function(nm, ag, hobby) {
    this.name = nm
    this.age = 22
    this.hobby = hobby
    this.display = function() {
        console.log(this.name)
    }
}

let sanju = new Student("Sanju", 22, ["Cricket"])
console.log(sanju)

let vasudha = new Student("Vasudha", 22, ["Reading Books"])
console.log(vasudha)

//In both objects that we created by function constructor Student has display as default function
//So to remove it we directly attach it to Student prototype
//Every javascript object has property __proto__

console.log(sanju.__proto__ === Student.prototype)