let array = [{
        nameOfperson: "Vasudha Wankhade",
        age: 22
    },
    {
        nameOfperson: "Sanju Dadhe",
        age: 21
    },
    {
        nameOfperson: "Dhanashree Raut",
        age: 22
    }
]

//print names and age  of all person

//by forEach

// array.forEach(function(el) {
//     console.log(el.nameOfperson, " ", el.age)
// })

// //by for loop

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]["nameOfperson"], array[i]["age"])
// }

// //by map

// let mapArr = array.map(function(el) {
//     return el.nameOfperson + '--' + el.age
// })
// console.log(mapArr)
// let map1 = mapArr.join(" ")
// console.log(map1)

// //add property skills=["JavaScript","Python"] to each object

// //by map

// array.map(function(el) {
//     el.skills = ["JavaScript", "Python"]
// })
// console.log(array)

// //by forEach

// array.forEach(function(el) {
//     el.skills = ["JavaScript", "Python", "Java"]
// })
// console.log(array)

// //by for

// for (let i = 0; i < array.length; i++) {
//     array[i]["skills"] = ["JavaScript", "Python", "Java", "CSS"]
// }
// console.log(array)

// //average of age

// let avgOfages = array.reduce(function(acc, el) {
//     return acc + el.age
// }, 0)
// console.log(avgOfages / array.length)

// //name of those whose age is >21

// let age21 = array.filter(function(el) {
//     return el.age > 21
// })
// console.log(age21)

// let nameOf21 = array.map(function(el) {
//     if (el.age > 21) {
//         return el.nameOfperson
//     }
// })
// console.log(nameOf21)

// //Add property language English to first,then Marathi to next and Hindi to third


array = [{
        nameOfperson: "Vasudha Wankhade",
        age: 22
    },
    {
        nameOfperson: "Sanju Dadhe",
        age: 21
    },
    {
        nameOfperson: "Dhanashree Raut",
        age: 22
    }
]



let lang = ['English', 'Marathi', 'Hindi']
for (let i = 0; i < array.length; i++) {
    lang.forEach(function(el) {
        array[i]['language'] = lang[i]
    })

}
console.log(array)