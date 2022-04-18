//ES6 class

class BOI {
    constructor(AccHolder, AccType, Balance) {
        this.AccHolder = AccHolder
        this.AccType = AccType
        this.Balance = Balance
        this.transactions = []
    }

    Transactions(a) {
        this.transactions.push(a)
        return this.transactions
    }

    Credit(amount) {
        this.Balance = this.Balance + amount
        this.Transactions(amount)
        return this.Balance
    }

    Debit(amount) {
        this.Balance = this.Balance - amount
        this.Transactions(-amount)
        return this.Balance
    }

    UserName() {
        this.user = this.AccHolder.split(' ').reduce(function(acc, el) {
            return acc + el[0]
        }, "")
        console.log(this.user)
    }
    CountTransaction() {
        console.log(this.transactions.length)
    }

}



let vasudha = new BOI("Vasudha Wankhade", "Saving", 1000000)
    //console.log(vasudha)

vasudha.Credit(1000000)
    //console.log(vasudha)

vasudha.Debit(1000000)
    //console.log(vasudha)

//console.log(vasudha.transactions)

vasudha.Debit(5000)
vasudha.Debit(1000)
vasudha.Credit(10100)
vasudha.Debit(30303)
vasudha.Debit(11012)


let ab = vasudha.Transactions()
console.log(ab)

vasudha.CountTransaction()

vasudha.UserName()

//last 5 transactions

console.log(vasudha.transactions.slice(-5))

let transact = [1000, -200, 200020, -30303, 9229]

transact.forEach(function(el) {
    if (el > 0) {
        vasudha.Debit(el)
    } else if (el < 0) {
        vasudha.Credit(el)
    }
})

console.log(`The bank statement for account holder ${vasudha.user} is as follows : ${vasudha.transactions}`)



//Inheritance from ourself

class Thinker {
    constructor(name, thought) {
        this.name = name
        this.thought = thought
    }
    display() {
        console.log(this.name)
    }
}

class Doer extends Thinker {
    constructor(name, thought, active) {
        super(name, thought)
        this.action = active
    }
    display() {
        console.log(this.thought)
        super.display()
    }
}

class Achiever extends Doer {
    constructor(name, thought, active, gain) {
        super(name, thought, active)
        this.gain = gain
    }
    display() {
        console.log(this.gain)
        super.display()
    }
}

let ram = new Achiever("Ram", "I think I can do it",
    "I am doing it by hard work", "I did it successfully")
console.log(ram)

ram.display()


//Polymorphism

//same class ,same method name ,different signature  ----------> overloading


// class Addition {
//     sum(x, y) {
//         console.log(x + y)
//     }

//     sum(x, y, z) {
//         console.log(x + y + z)
//     }
// }

// let aaa = new Addition()
// aaa.sum(1, 2, 3)
// aaa.sum(1, 2)


class Addition {
    sum(x, y, z) {
        if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        } else if (x != undefined && y != undefined) {
            console.log(x + y)
        } else {
            console.log("invalid input")
        }
    }
}





let aaa = new Addition()
aaa.sum(1, 2, 3)
aaa.sum(1, 2)

//same class , same method name , different signature   ===>  overlaoding