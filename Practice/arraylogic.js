//Problem 1 :Delete duplicate element in  array

//Solution 1

let numbers = [1, 2, 3, 4, 5, 3, 3, 34, 2, 1, 3, 3]
let noDuplicate = []
for (let i = 0; i < numbers.length; i++) {
    if (!noDuplicate.includes(numbers[i])) {
        noDuplicate.push(numbers[i])
    }

}
console.log(noDuplicate)

//Solution 2

//numbers = [1, 2, 3, 4, 5, 3, 3, 34, 2, 1, 3, 3]
let nodupli = numbers.filter(function(el, index) {
    return numbers.indexOf(el) == index
})
console.log(nodupli)

//Solution 3

//numbers = [1, 2, 3, 4, 5, 3, 3, 34, 2, 1, 3, 3]
let newarr = []
numbers.forEach(function(el, index) {
    if (numbers.indexOf(el) == index) {
        newarr.push(el)
    }
})
console.log(newarr)

//                      Find the longest string from array

let str = ["Sanju", "Wankhade", "Vasudhaa"]
let o = str.reduce(function(acc, el) {
    if (el.length > acc.length) {
        return el
    } else {
        return acc
    }

}, str[0])
console.log(o)

let long = str.filter(function(el) {
    return el.length == o.length
})
console.log(long) //will give array of longest words having same length


//          Find largest number in array

//Solution 1

let num00 = [12, 44, 54, 32, 5, 567, 87766]
let bigNo = 0

for (let i = 0; i < num00.length; i++) {

    if (num00[i] > bigNo) {
        bigNo = num00[i]
    }
}
console.log(bigNo)

//Solution 2

let largest = num00.reduce(function(acc, el) {
    if (el > acc) {
        return el
    } else {
        return acc
    }
}, num00[0])
console.log(largest)

//Find same element in two arrays

let arrr1 = [12, 344, 56, 43, 23, 64, 33]
let arrr2 = [12, 345, 56, 54, 33, 366, 43]
let commonEl = []

for (let i = 0; i < arrr1.length; i++) {
    if (arrr2.includes(arrr1[i])) {
        commonEl.push(arrr1[i])
    }
}
console.log(commonEl)

//find even and odd numbers in array

let findSpecificNo = [12, 35, 56, 43, 23, 56]
let noEven = []
let noOdd = []

// Solution 1

for (let i = 0; i < findSpecificNo.length; i++) {
    if (findSpecificNo[i] % 2 == 0) {
        noEven.push(findSpecificNo[i])
    } else {
        noOdd.push(findSpecificNo[i])
    }
}
console.log("Even numbers are: ", noEven)
console.log("Odd numbers are: ", noOdd)

//Solution 2

let evenArr = findSpecificNo.filter(function(el) {
    return el % 2 == 0
})

let oddArr = findSpecificNo.filter(function(el) {
    return el % 2 != 0
})

console.log(evenArr)
console.log(oddArr)

//Solution 3---not verry useful

let odd = []
let byMap = findSpecificNo.map(function(el) {
    if (el % 2 == 0) {
        return el
    } else {
        odd.push(el)
    }
})
console.log(byMap)
console.log(odd)

//Solution 4

let EArr = []
let OArr = []
findSpecificNo.forEach(function(el) {
    if (el % 2 == 0) {
        EArr.push(el)
    } else {
        OArr.push(el)
    }
})
console.log(EArr)
console.log(OArr)

//Solution 5---------Not possible by reduce

let onlyEven = findSpecificNo.reduce(function(acc, el) {
    if (el % 2 == 0) {
        return el
    }
})
console.log(onlyEven)

//How many pairs of socks

let socksColors = ["green", "blue", "orange", "orange", "orange", "green", "blue", "red"]

//desired output 
/*
{
    green:2,
    blue:2,
    orange:3,
    red:1
}
*/

let noOfsocks = {}

for (let i = 0; i < socksColors.length; i++) {
    if (noOfsocks[socksColors[i]]) { //undefined==>false
        noOfsocks[socksColors[i]] = noOfsocks[socksColors[i]] + 1
    } else {
        noOfsocks[socksColors[i]] = 1
    }
}
console.log(noOfsocks)
let pairss = 0
for (let key in noOfsocks) {

    let countOfsocks = (Math.floor(noOfsocks[key] / 2))
    pairss = pairss + countOfsocks


}
console.log(pairss)


//Find indexes of element which is repeated in the array

let friends = ["Sanju", "Vasudha", "Yamini", "Sanju", "Sanju"]
    //find all indexes of Sanju

//Solution 1

let target = "Sanju"
for (let i = 0; i < friends.length; i++) {
    if (friends[i] == target) {
        console.log(i)
    }
}

//Solution 2

let iindex = friends.map(function(el, index) {
    if (el === "Sanju") {
        return index
    }
})
console.log(iindex)

//Solution 3

friends.forEach(function(el, index) {
    if (el === "Sanju") {
        console.log(index)
    }
})

//Find element of specific length

//Solution 1

let games = ["Cricket", "Football", "Badminton", "Chess", "Vollyball"]

let reqLength = games.filter(function(el) {
    return el.length == 9
})
console.log(reqLength)

//Solution 2

let length9 = []
for (let i = 0; i < games.length; i++) {
    if (games[i].length == 9) {
        length9.push(games[i])
    }
}
console.log(length9)

//4-3-2022

//1)Given string is palindrome or not

let isPalindrome = "radaro"

let returned = isPalindrome.split('').reverse().join('')
console.log(returned)

if (returned == isPalindrome) {
    console.log("Palindrome")
} else {
    console.log("Not palindrome")
}

