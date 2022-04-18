// Destructure: To separately store and print values
//less code

//Array

let num = [12, 456, 78, 67, 34, 234, 45]
let [a, b, c, d, e, f, g, h, i] = num
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

//Object

let details = {
    myName: "Vasudha",
    mylastName: "Wankhade",
    myDob: "6"

}

let { myName: mn, mylastName: ml, myDob: md } = details
console.log(mn)
console.log(ml)
console.log(md)

// Array inside the object

let data = {
    myFirstname: "Vasudha",
    myLastname: "Wankhade",
    myCity: "Amravati",
    myHobbies: ["Cricket", "Chess"]
}

let { myFirstname: mf, myLastname: mlt, myCity: mct, myHobbies: [ckt, chs] } = data
console.log(mf)
console.log(mlt)
console.log(mct)
console.log(ckt)
console.log(chs)

//Object inside the array

let employee = [{
        firstName: "Renuka",
        lastName: "Kadu"
    },
    {
        idNo: 1566,
        skills: ["JavaScript", "Python", "CSS"]
    },
    {
        age: 24,
        dob: 1998
    }
]

let [{ firstName: f1, lastName: l1 }, { idNo: id, skills: [js, py, cs] }, { age: edge, dob: bod }] = employee
console.log(f1)
console.log(l1)
console.log(id)
console.log(js)
console.log(py)
console.log(cs)
console.log(edge)
console.log(bod)