//apply loop to object

let objj = {
    myName: "Vasudha",
    myMother: "Mamata",
    myRollNo: 26,
    myAge: 22
}

for (let key in objj) {
    console.log(key, objj[key])
}

//retrieve value

console.log(objj.myRollNo)

//update

objj.myRollNo = 28
console.log(objj)

//delete

delete objj.myAge
console.log(objj)

//add new property

objj.language = "Marathi"
console.log(objj)

//object as element in array

let arr = [{
        myNameis: "Vasudha",
        myAgeis: 22
    },
    {
        myRollNois: 26,
        myCityis: "Amravati"
    },
    {
        mySkillsare: ["HTML", "JavaScript", "CSS"]
    }

]

//apply for loop to print all keys and their properties

for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
        console.log(key, arr[i][key])
    }
}