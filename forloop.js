//for====> to run loop for finite number of times

// for(initialization;condition;increment/decrement){
//  body
//}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

console.log("================================================================")
let j = 0

for (; j <= 10;) {
    console.log(j)
    j++
}

// Even and odd numbers


for (let b = 1; b <= 50; b++) {
    if (b % 2 == 0) {
        console.log('Number is even', b)
    } else {
        console.log('Number is odd', b)
    }
}

console.log("================================================================")

// print 10,8,6,4,2

let k = 10
for (; k >= 2;) {
    console.log(k)
    k -= 2
}

console.log("================================================================")

//5 table

for (let o = 1; o <= 10; o++) {
    console.log(o * 5)
}

console.log("================================================================")

//break statement

for (let y = 0; y < 5; y++) {
    if (y == 2) {
        break;
    }
    console.log(y) //0,1
}

// continue statement

for (let t = 0; t < 10; t++) {
    if (t == 2) {
        continue;
    }
    console.log(t) //print all numbers except 2
}