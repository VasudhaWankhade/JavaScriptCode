//-------------1) Delete the duplicate element in array--------------------------------

//---------------------using includes( )-------------------------------------------------

// let arr = [12, 33, 43, 22, 34, 33, 26]
// let arr2 = []

// for (i = 0; i < arr.length; i++) {
//     if (!arr2.includes(arr[i])) {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)

//--------------------------------------------------------------------------------------
//find same element in two arrays

// let arr3 = [13, 24, 56, 32, 22, 55]
// let arr4 = [14, 245, 53, 55, 323]

// for (let i = 0; i < arr3.length; i++) {
//     if (arr4.includes(arr3[i])) {
//         console.log("The common element in two arrays is : ", arr3[i])
//     }
// }

//---------------------------------------------------------------------------------------

//--------------------------using filter(function(el)) and indexOf()---------------------------------------------

let arr = [12, 33, 43, 22, 34, 33, 26]
let arr2 = []
    // let filter = arr.filter(function(el, index) {
    //     return arr.indexOf(el) == index
    // })
    // console.log(filter)

//--------------------------using indexOf()----------------------------------------------

// for (let i = 0; i < arr.length; i++) {
//     if (arr2.indexOf(arr[i]) < 0) {
//         arr2.push(arr[i])
//     }
// }

//how many even and odd numbers in array

// let arr0 = [1, 223, 343, 54655332, 221, 345, 6775, 3332, 2323, 445, 534, 23324]
// let evencount = 0
// let oddcount = 0
// for (let i = 0; i < arr0.length; i++) {
//     arr0[i] % 2 == 0 ? evencount++ : oddcount++
// }
// console.log(evencount)
// console.log(oddcount)

//using reduce

// let noOfeven = arr0.reduce(function(acc, el) {
//     let even = el % 2 == 0 ? 1 : 0
//     return acc + even
// }, 0)

// let noOfodd = arr0.reduce(function(acc, el) {
//     let odd = el % 2 != 0 ? 1 : 0
//     return acc + odd
// }, 0)
// console.log(noOfeven)
// console.log(noOfodd)

//how many pairs of socks?

// let socks = ["red", "yellow", "red", "yellow", "blue", "red", "red", "blue"]


// let count = 0

// for (let i = 0; i < socks.length; i++) {
//     if (socks[i] == "red" || socks[i] == "yellow" || socks[i] == "blue") {
//         count++
//     }
// }
// console.log("No of pairs of socks are ", Math.floor(count / 2))

// //OR
// socks = ["red", "yellow", "red", "yellow", "blue", "red", "red", "blue"]

// let finalResult = {}

// for (let i = 0; i < socks.length; i++) {
//     if (finalResult[socks[i]]) {
//         finalResult[socks[i]] = finalResult[socks[i]] + 1
//     } else {
//         finalResult[socks[i]] = 1
//     }
// }
// console.log(finalResult)
// for (let key in finalResult) {
//     console.log(Math.floor(finalResult[key] / 2))
// }

// //find indexes of specific element which is reperated

// let namesCity = ["Amravati", "Mumbai", "Amravati", "Amravati"]
//find all indexes of "Amravati"

//Method 1

// namesCity.forEach(function(el, index) {
//     if (el === "Amravati") {
//         console.log(index)
//     }
// })

//Method 2

// let index2 = namesCity.map(function(el, index) {
//     if (el === "Amravati") {
//         return index
//     }
// })
// console.log(index2)

// //find element of specific length

// let countries = ["India", "Nepal", "USA", "Bhutan"]
//     //find element having 5 characters

// let length5 = countries.filter(function(el) {
//     if (el.length == 5) {
//         return el
//     }
// })
// console.log(length5)

//-----------------------------------

let num6 = [
        [1, 2, 3],
        [2, 3, 4],
        [3, 6, 7]
    ]
    // let singlearr = num6.flat()
    // console.log(singlearr)

console.log("-------------------------------------")

//without flat

// let retarr = num6[0].concat(num6[1]).concat(num6[2])
// console.log(retarr)

console.log("-----------------------------------------------")

//using for

//num6 = [
// [1, 2, 3], [2, 3, 4], [3, 6, 7]
// ]
// let num7 = []
// for (let i = 0; i < num6.length; i++) {
//     let a = num6[i]
//     for (j = 0; j < a.length; j++) {
//         num7.push(a[j])
//     }
// }
// console.log(num7)

//using reduce

//num6 = [
// [1, 2, 3], [2, 3, 4], [3, 6, 7]
// ]
console.log("--------------------------------")
let arrr = num6.reduce(function(acc, el) {
    return acc.concat(el)
}, [])
console.log(arrr)

//Find longest string in array

let string1 = ["Aurangabad", "Kashmir", "Maharashtra"]

//Solution 

let long = string1.reduce(function(acc, el) {
    if (el.length > acc.length) {
        return el
    } else { return acc }
    // el.length > acc.length ? el : acc
}, string1[0])
console.log(long)

// Find largest number in array

let noArr = [12, 45, 344, 567, 4554, 22323, 5767787]

//Solution 1

let largeNo = noArr.reduce(function(acc, el) {
    if (el > acc) {
        return el
    } else {
        return acc
    }
}, noArr[0])
console.log(largeNo)

//Solution 2

let bigNo = 0
for (let i = 0; i < noArr.length; i++) {
    if (noArr[i] > bigNo) { //noArr[i]<smallNo;smallNo=0====>for smallest number in array
        bigNo = noArr[i]
    }
}
console.log(bigNo)

//count how many times 101 is present

let digitts = [101, 11, 2, 334, 332, 4454, 223, 23, 45, 32, 101, 101, 101]

//Method 1

let countOf101 = digitts.filter(function(el) {
    return el == 101
}).length
console.log(countOf101)

//Method 2

let count = 0
for (let i = 0; i < digitts.length; i++) {
    if (digitts[i] == 101) {
        count++
    }
}
console.log(count)

//Method 3