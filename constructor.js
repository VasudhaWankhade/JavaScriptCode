//Object literals



let data = {
    nameFirst: "Vasudha",
    age: 22
}

//retrieve----dot and bracket notation

console.log(data.nameFirst)
console.log(data['nameFirst'])

//add new property

data.colour = "green"
console.log(data)

//update

data.colour = "White"
console.log(data)

//delete property

delete data.colour
console.log(data)

//The object created by using class is same as the normal object
//class is a template no new memory is assigned to it
//for class name always use first letter capital


// Setting the properties outside the class


class Details {
    device = undefined
    type = undefined
}

let device1 = new Details()
console.log(device1) //here type of device1 is details
console.log(typeof device1)

device1.device = "Mobile"
device1.type = "Electronic"
device1.languages = ["English", "Marathi"]

console.log(device1)

//Constructor       ===> It is same as function
//                  ===>use to set the properties values at the time of object creation

class Animals {
    constructor(animal, type) {
        this.nameOfAnimal = animal
        this.typeOfAnimal = type
    }
}
let lion = new Animals("Lion", "Wild")
console.log(lion)

lion.knownAs = 'King of Forest'
console.log(lion)


//

let array = [
    new Animals("Cat", "Pet"),
    new Animals("Tiger", "Wild"),
    new Animals("Dog", "Pet")
]
console.log(array)

//give property place and values home,forest and home serially

let places = ["Home", "Forest", "Home"]

array.forEach(function(el, index) {
    el.palce = places[index]
})

console.log(array)

//print all properties and values of array

array.forEach(function(el) {
    for (let key in el) {
        console.log(key, ":", el[key])
    }
})



//Set function

class Numbers {
    setNumber(n) {
        this.number = n
    }
    setType(type) {
        this.type = type
    }

    setAll(n, type, digits) {
        this.number = n
        this.type = type
        this.digit = digits
    }
}

let newNo = new Numbers()
console.log(newNo)


newNo.setNumber(-1)
console.log(newNo)

newNo.setType('integer')
console.log(newNo)
newNo.setAll(0, "Whole number", 1)
console.log(newNo)