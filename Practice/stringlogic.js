//which letter is present how many times

let say = "Hello to everyone".toLowerCase()
console.log(say)

/*
desired output:

o/p={
    h:1,
    e:4,
    l:2,
    o:3,
    t:1,
    v:1,
    r:1,
    y:1,
    n:1
}

*/
let obj = {}
for (let i = 0; i < say.length; i++) {
    if (obj[say[i]]) {
        obj[say[i]] += 1
    } else {
        obj[say[i]] = 1
    }
}
console.log(obj)

//------------------------------------------------YAY DONE!!!!!!!!!!!!!!!!!------------------------------------------------------------


//which vowel is present how many times

let letters = "aeioudjdjdjdmmnmcmxaeiou"
    /**
     * desired output
     * 
     * {
     * a:2,
     * e:2,
     * i:2,
     * o:2,
     * u:2
     * }
     */


//Method 1

let obj1 = {}
let vowels = ['a', 'e', 'i', 'o', 'u']
for (let i = 0; i < letters.length; i++) {
    vowels.forEach(function(el) {
        if (letters[i] == el) {
            if (obj1[letters[i]]) {
                obj1[letters[i]] += 1
            } else {
                obj1[letters[i]] = 1

            }
        }
    })
}
console.log(obj1)

//Method 2

//Using switch case

let a = 0
let e = 0
let i = 0
let o = 0
let u = 0

for (let x = 0; x < letters.length; x++) {
    switch (letters[x]) {
        case 'a':
            a += 1
            break
        case 'e':
            e += 1
            break
        case 'i':
            i += 1
            break
        case 'o':
            o += 1
            break
        case 'u':
            u += 1
            break

    }
}
console.log(a)
console.log(e)
console.log(i)
console.log(o)
console.log(u)

//Method 3 -----count numbers of vowels in the string

//letters = "aeioudjdjdjdmmnmcmxaeiou"
//vowels = ['a', 'e', 'i', 'o', 'u']

let countVowels = 0
for (let i = 0; i < letters.length; i++) {
    if (vowels.includes(letters[i])) {
        countVowels++
    }

}
console.log(countVowels)


//longest word in the string

let tell = "I am here to do my job".split(" ")

//Method 1

let longWord = tell.reduce((acc, el) => {
    if (acc.length > el.length) {
        return acc
    } else {
        return el
    }
}, "")
console.log(longWord)

//Method 2

