//how many vowels are there?

//Method 1

let findVowels = "kddhfdnmncaahdhhfjdfdklldk"
let count = 0
for (let i = 0; i < findVowels.length; i++) {
    if (findVowels[i] == 'a' || findVowels[i] == 'e' || findVowels[i] == 'i' || findVowels[i] == 'o' || findVowels[i] == 'u') {
        count++
    }
}
console.log(count)

//Method 2

let count2 = 0
let vowels = ['a', 'e', 'i', 'o', 'u']
for (let i = 0; i < findVowels.length; i++) {
    if (vowels.includes(findVowels[i])) {
        count2++
    }
}
console.log(count2)

//Method 3

let count3 = 0
for (let i = 0; i < findVowels.length; i++) {
    switch (findVowels[i]) {
        case 'a':
            count3++
            break
        case 'e':
            count3++
            break
        case 'i':
            count3++
            break;
        case 'o':
            count3++
            break
        case 'u':
            count3++
            break
    }
}
console.log(count3)

//Method 4

let count1 = 0
for (let i = 0; i < findVowels.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        switch (findVowels[i]) {
            case vowels[j]:
                count1++
                break
        }
    }
}
console.log(count1)


// which vowel is present how many times

let kk = {}
for (let i = 0; i < findVowels.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (findVowels[i] == vowels[j]) {
            if (kk[findVowels[i]]) {
                kk[findVowels[i]] += 1
            } else {
                kk[findVowels[i]] = 1
            }
        }
    }
}
console.log(kk)


//Print aaaabbbccd 

//Method 1

h = "4a3b2c1d"
let rev = ""
for (let i = 0; i < h.length; i++) {
    if (Number(h[i])) {
        for (let j = 0; j < Number(h[i]); j++) {
            rev = rev + h[i + 1]
        }
    }
}
console.log(rev)

//Method 2
//using repeat()

let combo = "1c2g4c" //cggcccc
let val = ""

for (let i = 0; i < combo.length; i++) {
    if (Number(combo[i])) {
        val = val + combo[i + 1].repeat(combo[i])
    }
}
console.log(val)

//string is present in the given string or not

//Method 1

let countries = "'India' 'Australia' 'Japan' 'France'"
let isThere = 'Japan'
if (countries.includes(isThere)) {
    console.log(" Yes country is available in the list")
} else {
    console.log("No country is not available in the list")
}

//Method 2

if (countries.indexOf(isThere) >= 0) {
    console.log(" Yes you got it!")
} else {
    console.logz(" Oh you miss it!")
}


//find how many capital letters are present

let vvvv = "AbsjhsdNnnMMMjisjajdsLL"

//Method 1

let countCapital = 0

for (let i = 0; i < vvvv.length; i++) {
    if (vvvv[i] >= "A" && vvvv[i] <= "Z") {
        countCapital++
    }
}
console.log(countCapital)

//Method 2

let alphaCapital = 0
let abcd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
for (let i = 0; i < vvvv.length; i++) {
    for (let j = 0; j < abcd.length; j++) {
        if (vvvv[i] == abcd[j]) {
            alphaCapital++
        } else {
            continue
        }
    }
}
console.log(alphaCapital)

//Method 3

let count000 = 0
for (let i = 0; i < vvvv.length; i++) {
    if (vvvv.charCodeAt(i) >= 65 && vvvv.charCodeAt(i) <= 90) {
        count000 += 1
    }
}
console.log(count000)

//make reverse each word

//Method 1

let nnnn = "Vasudha"
    //console.log(nnnn.reverse())

let sent = "wednesday is a good day"
let sent1 = ""
console.log(sent.split(' '))
let rettt = sent.split(' ').forEach(function(el) {
    let word = el.split('').reverse().join('')
    sent1 = sent1 + " " + word
})
console.log(sent1.trimStart())

//  Method 2

let a = 'wednsday This is good day'
let b = ''
for (let i = 0; i <= a.length - 1; i++) {
    b = a[i] + b
}
console.log(b)

let c = b.split(' ')
console.log(c)

let d = c.reverse()
console.log(d)
console.log(d.join(' '))