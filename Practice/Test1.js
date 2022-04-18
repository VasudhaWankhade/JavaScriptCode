let persons = [

    {
        firstName: "chinmay deshpande",
        age: 23,
        skills: ["python", "java", "javascript"]
    },

    {
        firstName: "poorva vyas",
        age: 24,
        skills: ["python", "java"]
    },


    {
        firstName: "sarika vyas",
        age: 28,
        skills: ["python", "java", "javascript", "python3"]
    }


]

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]["firstName"], persons[i]["skills"].length)
}

//Age

let personAge = persons.reduce(function(acc, el) {
    return acc + el.age
}, 0)
console.log(personAge)
let avgAge = personAge / persons.length
console.log(avgAge)

//Add html to skills

persons.forEach(function(el) {
    el.skills.push("HTML")
})
console.log(persons)

let moreAge = persons.filter(function(el) {
    return el.age > 25
})
console.log(moreAge)

//Add property language=English

persons.forEach(function(el) {
    el.language = "English"
})

console.log(persons)

//Chinmay:Pune      Poorva:Sangamner        Sarika:Ujjain

persons[0].city = "Pune"
persons[1].city = "Sangamner"
persons[2].city = "Ujjain"

console.log(persons)

//User Name

persons.forEach(function(el) {
    el.userName = el.firstName.split(' ').reduce(function(acc, el) {
        return el[0] + acc
    }, " ")
    el.userName
})
console.log(persons)

function isUnique(nameuser) {
    persons.reduce(function(el) {
        if (el.nameuser === nameuser) {
            return acc + nameuser
        } else {
            return nameuser + nameuser
        }
    }, " ")
}