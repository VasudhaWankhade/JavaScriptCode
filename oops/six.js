let obj = {
    fullName: "Vasudha Wankhade",
    rollNo: 26,
    age: 22,
    display: function() {
        console.log(this.fullName)
    }
}
console.log(obj)
obj.display()

let student = {
    fullName: "Sanjivani",
    herClass: 12,
    herRollNo: 20
}
student.display = function() {
    console.log(this.fullName)
}
console.log(student)
student.display()

let kid = {
    fullName: "Shreenath",
    rollNo: 5
}

let displayAgain = function() {
    console.log(this.fullName)
}

//kid.displayAgain()

//bind ===> this is method used to set the value of this for the borrowed function or method and returns same function witth updated value 
//of this

displayAgain.bind(kid)()

//call ===>this is method used to set the value odd this for the borrowed function or method 
//no retrun
//first parameter is object for which we borrow we borrow method and second parameter is value of paramter of the borrowed function

let vasudha = {
    fullName: "Vasudha Wankhade",
    age: 22,
    location: "Amravati"
}

let sanju = {
    fullName: "Sanjivani Dadhe",
    age: 21,
    location: "Amravati"
}

let displayThis = function(school) {
    console.log(this.fullName, school)
}

displayThis.call(sanju, "--Golden Kids")

//apply

displayThis.apply(vasudha, ["---Samartha Junior College"])

class School {
    constructor(name, students) {
        this.SchoolName = name
        this.NumberOfStudents = students
    }
    static displayy() {
        console.log(this.SchoolName)
    }
}

let kido = new School("Golden Kids", 2000)
console.log(kido)

School.displayy.bind(kido)()