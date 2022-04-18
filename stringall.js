let x = "harshal"
let reverseString = "";
for (let i = x.length; i >= 0; i--) {
    reverseString = reverseString + x[i]
}
console.log(reverseString)


//String 

let str = "Vasudha"
console.log(str.length)


//---------------------------------------------1) split()-------------------------------------------------------


//to convert string in array

let toArray = str.split('')
console.log(toArray)

//to convert array in string

let toString = toArray.join('')
console.log(toString)

let toSmall = str.toLowerCase()
console.log(toSmall)

let toBig = str.toUpperCase()
console.log(toBig)

//---------------------------------------------2) trim() -----------------------------------------------------

//to remove space from the beginning of string

let str1 = " Amravati"
let atStart = str1.trimStart()
console.log(atStart)

let str2 = "Amravati "
let atEnd = str2.trimEnd()
console.log(atEnd)

let str3 = " Amravati "
let both = str3.trim()
console.log(both)

let str4 = "Amrav ati"
let noSpace = []
for (let i = 0; i < str4.length; i++) {
    if (str4[i] != " ") {
        noSpace.push(str4[i])
    }
}
let atLast = noSpace.join('')
console.log(atLast)

//----------------------------------------------3) includes()---------------------------------------------

let boolean = str.includes('s')
console.log(boolean)

let countries = "'India' 'Australia' 'Japan' 'France'"
let isThere = 'Japan'
if (countries.includes(isThere)) {
    console.log(" Yes country is available in the list")
} else {
    console.log("No country is not available in the list")
}

//using indexOf()

if (countries.indexOf(isThere) > 0) {
    console.log("country is available")
} else {
    console.log("Country is not available")
}



//---------------------------------------------4) indexOf()-------------------------------------------------

let index = str.indexOf('V')
console.log(index)

let index2 = str.indexOf('e')
console.log(index2)

//Find number of vowels in the string

let sentence = "Hello everyone".toLowerCase()
let vowels = ['a', 'e', 'i', 'o', 'u']
let count = 0
for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
        count++
    }
}
console.log(count)

//using switch case

let count1 = 0
for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        switch (sentence[i]) {
            case vowels[j]:
                count1++
                break
        }
    }
}
console.log(count1)

//find which vowel is present how many times

//let sentence = "Hello everyone".toLowerCase()
let aCount = 0
let eCount = 0
let iCount = 0
let oCount = 0
let uCount = 0

for (let i = 0; i < sentence.length; i++) {
    switch (sentence[i]) {
        case 'a':
            aCount++
            break
        case 'e':
            eCount++
            break
        case 'i':
            iCount++
            break
        case 'o':
            oCount++
            break
        case 'u':
            uCount++
            break
    }
}
console.log("Number of a ", aCount)
console.log("Number of e ", eCount)
console.log("Number of i ", iCount)
console.log("Number of o ", oCount)
console.log("Number of u ", uCount)

// //Another method


// let sentence = "Hello everyone".toLowerCase()
// let vowels = ['a', 'e', 'i', 'o', 'u']
let kk = {}
for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (sentence[i] == vowels[j]) {
            if (kk[sentence[i]]) {
                kk[sentence[i]] += 1
            } else {
                kk[sentence[i]] = 1
            }
        }
    }
}
console.log(kk)


//------------------------------------------------5) repeat()----------------------------------------------------

let repeated = "s".repeat(4)
console.log(repeated)

let combo = "1c2g4c" //cggcccc
let val = ""

for (let i = 0; i < combo.length; i++) {
    if (Number(combo[i])) {
        val = val + combo[i + 1].repeat(combo[i])
    }
}
console.log(val)

//-----------------------------------------6) slice()------------------------------------------------------

//  0   1   2   3   4   5   6
let str11 = "Vasudha" //  V   a   s   u   d   h   a
let ret = str11.slice(1, 4) //asu
console.log(ret)

//----------------------------------------7) charAt()--------------------------------------------------

let word = "Amravati"
let char = word.charAt(3)
console.log(char)


//--------------------------------------------Note------------------------------------------------------

word[0] = "M"
console.log(word) //same as original string because string is inmutable means its one charracter can not be updated we have to update whole string

//number+number =number
//number+string=string
//string +number=string
//string+string=string

let aa = 2
let bb = 3
let cc = "Hi"
console.log(cc + aa + bb) //Hi23
console.log(aa + bb + cc) //5Hi


//---------------------------------------- 8) charCodeAt() -----------------------------------------

let word1 = "Vasudha"
let char1 = word1.charCodeAt(3)
console.log(char1)

//---------------------------------------- 9) replace()------------------------------------

let wish = "Good morning and Good luck"
let withBetter = wish.replace("Good", "Better") //replaces only first occurance
console.log(withBetter)

//Write a method which will replace all the same words with required one's

function replaceWith(wordToreplace, byWord, stringg) {
    for (let i = 0; i < stringg.length; i++) {
        if (stringg[i] == wordToreplace) {
            stringg[i].replace(byWord)
        }

    }
    console.log(stringg)
}
replaceWith("Good", "Better", wish)

//concatation

let w1 = "Amravati"
let w2 = "Nagpur"
console.log(`First city is ${ w1 } and second is ${w2}`) //  ${ }===> will give string only


//-------------------------------------------- 10)search()---------------------------------------------------
//return index

let zz = w1.search("a")
console.log(zz)

//---------------------------------------------11) substring(from index, to index)--------------------------------------

let zzz = w1.substring(1, 4)
console.log(zzz) //mra

//--------------------------------------------