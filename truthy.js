/*truthy===>1)  -1 or any integer
            2)   'A','Gjhhj'
            3)   ' '=> space inside the string
            4)   []
            5)   {}
            6)    true

falsy===>1)  0
         2)   ''=>Blank string
         3)   undefined
         4)     null
         5)   false
*/



if (0) {
    console.log('Hi')
} else {
    console.log('Bye')
}

if (-1) {
    console.log('Hi')
} else {
    console.log('Bye')
}

if ('W') {
    console.log('Hi')
} else {
    console.log('Bye')
}

if ('fjdjdfj') {
    console.log('Hi')
} else {
    console.log('Bye')
}

if ('') {
    console.log('Hi')
} else {
    console.log('Bye')
}

if (' ') {
    console.log('Hi')
} else {
    console.log('Bye')
}

if (undefined) {
    console.log('Hi')
} else {
    console.log('Bye')
}

if (null) {
    console.log('Hi')
} else {
    console.log('Bye')
}

if ([]) {
    console.log('Hi')
} else {
    console.log('Bye')
}

if ({}) {
    console.log('Hi')
} else {
    console.log('Bye')
}

console.log('===========================================================================')

let b = Boolean([])
console.log(b)

let d = Boolean('')
console.log(d)

let c = Boolean(' ')
console.log(c)

console.log("========================================================================")

//0====>Try again
// 1====>Study more
// any number===> pass
let score = 1
if (score == 0) {
    console.log("Try again")
} else if (score == 1) {
    console.log("Study more")
} else {
    console.log("Pass")
}