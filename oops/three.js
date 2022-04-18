let obj = {
    fullName: "Vasudha",
    age: 22
}
console.log(obj)

//Function constructor

let Names = function(name, age, address) {
    this.myName = name
    this.myAge = age
    this.myAddress = address
}

let vw = new Names("Vasudha", 22, "Amravati")
console.log(vw)

console.log(vw.__proto__ === Names.prototype)

console.log(vw instanceof Names)

Names.prototype.language = "Marathi"
console.log(vw.hasOwnProperty("language"))
console.log(vw.language)

//Vehicle function constructor

let Vehicle = function(model, regNo, avg) {
    this.model = model
    this.regNo = regNo
    this.average = avg

    // this.display = function() {
    //     console.log(this.model)
    // }
}

let bmw = new Vehicle("sedane", 234, 200)
console.log(bmw)
    // bmw.display()

Vehicle.prototype.display = function() {
    console.log(this.model)

}
console.log(bmw)

let Person = function(nm, pl) {
    this.Name = nm
    this.place = pl
}

let vW = new Person("Vasudha", "Amravati")
console.log(vW)

Person.prototype.language = "German"
console.log(vW.language)

console.log(vW.hasOwnProperty("language"))
console.log(vW.hasOwnProperty("Name"))

let array = ["Vasudha", "Sanju", "Mamta"]

console.log(array instanceof Array)
console.log(array.__proto__ === Array.prototype)



//Define method which will remove duplicate elements

Array.prototype.removeDuplicate = function() {
    console.log(Array.from(new Set(this)))
}
let array2 = ["Vasudha", "Sanju", "Mamta", "Mamta"]

array2.removeDuplicate()
console.log(array2)

console.log(array2.sort())


//Object can also be created by using ES6 class

//static ==> when static keyword is used for method then that method can onnly be called on class not on their instances

let Bank = class {
    constructor(holder, accNo, accType, bal) {
        this.holder = holder
        this.accNo = accNo
        this.accType = accType
        this.Bal = bal
    }

    currentBal() {
        console.log(this.Bal)
    }

    static deposit() {
        console.log(this.holder)
    }

}

let sanju = new Bank("Sanjivani", 9677, "Saving", 100)
console.log(sanju)

sanju.currentBal()
    //sanju.deposit()       //error
Bank.deposit()