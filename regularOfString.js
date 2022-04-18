let longSentence = "My name is Vasudha and full name is Vasudha Wankhade vasudha"

//regular expression is used only for strings
//it is written in /---/
//it is used to find the match of specific pattern of string in the given string

let reg = /Vasudha/gi

//g flag ==> to search the string pattern globally for all occurance
//i flag ==> caseInsensitive

let firstTime = reg.exec(longSentence)
console.log(firstTime) //give array and search for first occurance in the string
console.log(firstTime)
let secondTime = reg.exec(longSentence)
console.log(secondTime)

let thirdTime = reg.exec(longSentence)
console.log(thirdTime)

let fourthTime = reg.exec(longSentence)
console.log(fourthTime)

let final = reg.exec(longSentence)
while (final) {
    console.log(final)
    final = reg.exec(longSentence)
}

// test()

let testResult = reg.test(longSentence)
console.log(testResult)



//search , match and replace
//These methods of string cana lso be called on regular expression


//search()
//give index of  first occurance

let names = "Vasudha Sanju Vasudha"
let reg11 = /Vasudha/gi

let ret = names.search(reg11)
console.log(ret)


//replace()
//return string

let ret1 = names.replace(reg11, 'Sanju')
console.log(ret1)

//match()
//return array

let ret2 = names.match(reg11)
console.log(ret2)

//program
//copy
let abc = '0123456789'
let pattern = ""
for (let i = 0; i < abc.length; i++) {
    if (abc[i] != 5 && abc[i] != 0) {
        pattern = pattern + String(10 - Number(abc[i]))
        console.log(pattern)
    } else {
        val = Number(abc[i]) === 0 ? 5 : 0
        pattern = pattern + val
    }

}
console.log(pattern)


//let number="456738"