//function constructor

let City = function(name, state) {
    this.Name = name
    this.state = state
        // this.display = function() {
        //     console.log(this.Name)
        // }
}

let amt = new City("Amravati", "Maharashtra")
console.log(amt)

let ngp = new City("Nagpur", "Maharashtra")
console.log(ngp)

//display method is repeated 

City.prototype.display = function() {
    console.log(this.Name)
}

console.log(amt.__proto__ === City.prototype)

City.prototype.language = "Marathi"
console.log(amt.language)
console.log(amt.hasOwnProperty('language'))
console.log(ngp instanceof City)

amt.display()
ngp.display()


//Program One ---using class constructor

class Animals {
    constructor(nm, tp) {
        this.Name = nm
        this.type = tp
    }

    itsName() {
        console.log(this.Name)
    }
}

console.log(typeof Animals)

let tiger = new Animals("Tiger", "Wild")
console.log(tiger)

tiger.itsName()

console.log(tiger.hasOwnProperty('Name'))
console.log(tiger instanceof Animals)

tiger.Name = "Lion"
console.log(tiger)

//Program Two

let addProto = {
    display: function() {
        console.log("OK")
    }
}

let colours = Object.create(addProto)
console.log(colours)

console.log(typeof colours)

colours.first = "Green"
colours.second = "Yellow"
colours.third = "Orange"
console.log(colours)

colours.display()


//Inheritance ==> Child can access properties and methods of Parent due to inheritance



class Child {
    name = "Sanjivani"
    aadharNo = 7875
}

let sanjuOne = new Child()
console.log(sanjuOne)

class Young extends Child {
    education = "Graduate"
}
let sanjuTwo = new Young()
console.log(sanjuTwo)

class Oldage extends Young {
    pension = 50000
}

let sanjuThree = new Oldage()
console.log(sanjuThree)

console.log(sanjuThree.name)


// Program


class ChildOne {
    constructor(name, aadhar) {
        this.Name = name
        this.AadharNo = aadhar
    }

    display() {
        console.log(this.Name, this.AadharNo)
    }
}

class YoungOne extends ChildOne {
    constructor(name, aadhar, ed) {
            super(name, aadhar)
            this.Education = ed
        }
        // display() {
        //     console.log(this.Name, this.AadharNo, this.Education)
        // }
}

class OldageOne extends YoungOne {
    constructor(name, aadhar, ed, pension) {
        super(name, aadhar, ed)
        this.Pension = pension
    }

    // display() {
    //     console.log(this.Name, this.AadharNo, this.Education, this.Pension)
    // }
}

let sanju = new OldageOne("Sanjivani", 7875, "Graduate", 50000)
console.log(sanju)

//sanju.display() //override
//sanju.display()
sanju.display()