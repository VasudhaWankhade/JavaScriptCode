//count number of 33 in array

let no = [12, 34, 25, 23, 33, 33, 33, 55, 33]
let count = 0
for (let i = 0; i < no.length; i++) {
    if (no[i] == 33) {
        count++
    }
}
console.log(count)

//which element is present how many times

let word = ['a', 'm', 'r', 'a', 'v', 'a', 't', 'i']

/*Desired output
{
    a:3,
    m:1,
    r:1,
    v:1,
    t:1,
    i:1
} */

let desired = {}

for (let i = 0; i < word.length; i++) {
    if (desired[word[i]]) {
        desired[word[i]] = desired[word[i]] + 1
    } else {
        desired[word[i]] = 1
    }
}
console.log(desired)

//Another option using switch case

//word = ['a', 'm', 'r', 'a', 'v', 'a', 't', 'i']
let countOfa = 0
let countOfm = 0
let countOfr = 0
let countOfv = 0
let countOft = 0
let countOfi = 0

for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
        case 'a':
            countOfa++;
            break;
        case 'm':
            countOfm++;
            break;
        case 'r':
            countOfr++;
            break;
        case 'v':
            countOfv++;
            break;
        case 't':
            countOft++;
            break;
        case 'i':
            countOfi++;
            break;
    }
}
console.log(countOfa)
console.log(countOfm)
console.log(countOfr)
console.log(countOfv)
console.log(countOft)
console.log(countOfi)