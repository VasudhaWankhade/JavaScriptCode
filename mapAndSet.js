let nm = new String() //object
let nm1 = "Vasudha" //string

//                                                      Map 
// data type in JavaScript
//can have any data structure

let num = new Map()
console.log(num)

//size ---property gives length of Map

console.log(num.size)

//set ---- method to set key and values

num.set("Name", "Vasudha")
console.log(num)
console.log(num.size)

//boolean as a key

num.set(true, "isEligible")
console.log(num)

//number as a key

num.set(24, "Age")
console.log(num)

//array as akey

let arr = [23, 24, 25]
num.set(arr, "AgesOfStudents")
console.log(num)

//object as a key

let obj = {
    myName: "Vasudha",
    myAge: 24
}
num.set(obj, "Info")
console.log(num)

//get() ---method to get value of specific key

console.log(num.get(arr))
console.log(num.get(true))
console.log(num.get(24))

//clear() --- method to clear all elements of map

//num.clear()
//console.log(num)

//has()---- method to check wheather key is present in map or not
//-------reutrns boolean value

console.log(num.has(true))
console.log(num.has(24))

//keys() ---method to get all keys of map
//----------returns object

console.log(num.keys())

//values() ---method to get all values of map
//------------returns object

console.log(num.values())

//entries()----method to get all keys and values as array in object

console.log(num.entries())

//delete() ---method to delete specific key and its value in map

let a = num.delete("Name")
console.log(a)
console.log(num)

//                                      Logical

let quizOne = new Map(
    [
        ["Question :", "Answer"],
        ["What is capital of India", "Delhi"],
        ["What is capital of Japan", "Tokiyo"],
        ["What is capital of China", "Beijing"],
        ["What is capital of America", "Washington DC"],
        ["What is capital of Nepal", "Kathmandu"]
    ]
)
console.log(quizOne)

//print all keys and its values

for (let key of quizOne.keys()) {
    console.log(key)
}

console.log(quizOne.values())
for (let key of quizOne.values()) {
    console.log(key)
}


//                                      Set ----datatype in array

let sett = new Set()
console.log(sett)

let array0 = [1, 2, 3, 4, 5, 6, 7]
let info2 = new Set(array0)
console.log(info2)

let info3 = new Set([
    ["Vasudha"],
    ["Sanju"]
])
console.log(info3)

let returnArray = Array.from(info2)
console.log(returnArray)

//add()--- method of Set to add  new element at the end

console.log(info2.add(1000000))
console.log(info2)

//clear()--- to clear all element in the Set

// info2.clear()
// console.log(info2)

//has()---method to check wheather element is present in Set or not

console.log(info2.has(6))

//size ---- property of Set give length of Set

console.log(info2.size)

//delete() --method to delete specific element of Set

console.log(info2.delete(6))
console.log(info2)

//print all elements of Set 

console.log(info2.keys())
console.log(info2.values())
console.log(info2.entries())