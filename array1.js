// To store more than one values we use array
// Array store the values by index

//           0  1   2   3  4  5
// let arrr = [12, 34, 5, 67, 7, 7]

// console.log(arrr[3])

//loop to print all elements of array

// for (let i = 0; i < arrr.length; i++) {
//     console.log(arrr[i])
// }

//----------------------------Methods of array-------------------------------------

//------------------------------1)Push()----------------------------------------------
//adds element at the end of array
//returns new length

// let city = ["Amravati", "Nagpur", "Pune", "Mumbai"]
// let l = city.push("Nashik")
// console.log(l)
// console.log(city)

//-------------------------------2)Pop()------------------------------------------------
//==>Remove element from the end of array
//return the element which is removed

// let r = city.pop()
// console.log(r)
// console.log(city)

// ---------------------------------3)Unshift()---------------------------------------
//==>Add element at the starting of array
//return the new length

// let l1 = city.unshift("Nashik")
// console.log(l1)
// console.log(city)

//---------------------------------4)Shift()---------------------------------------------
//==>Remove first element of array
//return the element which is removed

// let r1 = city.shift()
// console.log(r1)
// console.log(city)

//--------------------------------5)indexOf()-------------------------------------------
//return index of element

// let i = city.indexOf("Amravati")
// console.log(i)

// includes()==>check wheather given element is present in the array or not
//return boolean value

// let p = city.includes("Nashik")
// console.log(p)

//------------------------------------6)slice()------------------------------------------
//==>divide the array based on index
//return array


//      0           1       2          3
//[ 'Amravati', 'Nagpur', 'Pune', 'Mumbai' ]
//       -4        -3       -2        -1

// let ret = city.slice(-3, 3)
// console.log(ret)

// let ret1 = city.slice(0)
// console.log(ret1)

//-------------------------------7)map(function(el,index,array))---------------------------
//==>to perform same operation with each element of array
//returns new array

//using map

// let newArr = [12, 34, 5, 656, 67889, 5656]
// let add = newArr.map(function(el, index, array) {
//     return el + 2
// })
// console.log(add)

//short hand
// let newArr = [12, 34, 5, 656, 67889, 5656]
// let add = newArr.map(el => el + 2)
// console.log(add)



//using for

// let newArr1 = []

// for (let i = 0; i < newArr.length; i++) {
//     let newval = newArr[i] + 2
//     newArr1.push(newval)
// }
// console.log(newArr1)



//using for

// let birthYear = [1999, 1960, 2005, 2019]
// let age = []
// for (let i = 0; i < birthYear.length; i++) {
//     let ag = 2022 - birthYear[i]
//     age.push(ag)
// }
// console.log(age)



//using map method

// let age1 = birthYear.map(function(el, index, array) {
//     return 2022 - el
// })
// console.log(age1)



//-----------------------------8)filter(function(el,index,array)-----------------------------

//==>filter out the element based on condition
//returns array


//using for

let arr2 = [24, 56, 34, 57, 90, 9, 12]
    // let answer1 = []

// for (i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 25) {
//         answer1.push(arr2[i])
//     }
// }
// console.log(answer1)

//using filter

// let answer = arr2.filter(function(el, index, array) {
//     return el > 25
// })
// console.log(answer)

//short hand
// let answer = arr2.filter(el => el > 25)
// console.log(answer)


//-------------------------9)reduce(function(acc,el,index,array))---------------------------

//for addition of all elements of array
//return a single value number

//using for

let numbers = [12, 344, 556, 78, 89, 45, 788]
    // let addition = 0
    // for (let i = 0; i < numbers.length; i++) {
    //     addition = addition + numbers[i]
    // }
    // console.log(addition)


//using reduce

// let addd = numbers.reduce(function(acc, el, index, array) {
//     return acc + el //return acc*el
// }, 0)
// console.log(addd)

// short hand
// let addd = numbers.reduce((acc, el) => acc + el, 0)
// console.log(addd)


//--------------------10)forEach(function(el,index,array))---------------------------------

//to  perform same operation with each element of array
//returns nothing

// let name5 = ["Vasudha", "Sanju"]
// name5.forEach(function(el, index, array) {
//     console.log(el + "  Please visit again :)")
// })

// short hand
// let name5 = ["Vasudha", "Sanju"]
// name5.forEach(el =>
//     console.log(el + "  Please visit again :)")
// )

//using

//-------------------------11)every()--------------------------------------------------

//check condition for every element
//returns boolean value

let arr8 = [1, 23, 45, 67, 8, 65]
    // let tf = arr8.every(function(el, index, array) {
    //     return el > 25
    // })
    // console.log(tf)

//--------------------------------12)some()----------------------------------------

//check condition with each element
//returns boolean value


// let tf = arr8.some(function(el, index, array) {
//     return el > 25
// })
// console.log(tf)

//-----------------------------13)find(function(el,index,array))-----------------------------
//give first occured  element which satisfy the given condition
//return string or number

// let ay = [23, 45, 67, 87, 98, 11, 23]
// let g = ay.find(function(el, index, array) {
//     return el > 25
// })
// console.log(g)

//----------------------------14)findIndex(function(el,index,array))----------------------

//give the index of first elemnt which satisfy the given condition
//return single value

// let g1 = ay.findIndex(function(el, index, array) {
//     return el > 50
// })
// console.log(g1)

//------------------------15)flat()----------------------------------------------

//combines arrays present insame array
//returns array

//          0       1           2
//       0 1 2   0   1  2    0  1  2
let eg = [
        [1, 2, 3],
        [24, 34, 45],
        [12, 36, 57]
    ]
    // console.log(eg[1][2])

let f = eg.flat()
console.log(f)

//--------------------------16)sort()----------------------------------

let a = ["Vasudha", "Mamata", "Sanju"]
let s = a.sort()
console.log(s)

let s1 = [1, 4, 2, 65, 44, 22]
    // let s11 = s1.sort()
    // console.log(s11)

// --------------------------17)concat()-------------------------------------------
//combines two different arrays
//returns single array

let nue = a.concat(s1)
console.log(nue)

// ---------------------------18)splice(start,no. of elements to be deleted)-----------------------------------
//deletes element in array or can replace those elements
//returns array of elements which are deleted

let b = [1, 2, 3, 4, 5, 6, 76, 7, 8, 89, 9, 00]
let ret = b.splice(3, 2)
console.log(ret)
console.log(b)

//--------------------------20)fill(fill,start,end)-----------------------------------

let ww = b.fill('w', 2, 7)
console.log(ww)

//-------------------------21)join( )----------------------------------------------
//joins all elemnets of array by given - or @ etc
//returns string

let str = b.join(' @ ')
console.log(str)

//add element in array

//1)push()        2)unshift()       3)splice(from index,no.of elemnts to be deleted,replace by)           

//delete element in array

//1)pop()         2)shift()         3)splice(from from index,no.of elemnts to be deleted)