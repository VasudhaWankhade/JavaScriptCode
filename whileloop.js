// while===>till i get the head

// let i = -2
// while (i < 10) {
//     console.log(i)
//         // i++
//         // i+=1
//     i = i + 1
// }
// console.log("=====================================================================")
//     // print 10,8,6,4,2

// let j = 10
// while (j >= 2) {
//     console.log(j)
//     j -= 2
// }

// console.log("================================================================")
//     //Even and odd numbers

// let k = 1
// while (k <= 50) {
//     if (k % 2 == 0) {
//         console.log(k, " is even number")
//     } else {
//         console.log(k, " is odd number")
//     }
//     k++
// }

// // 2 table

// // let e = 2
// // while (e <= 20) {
// //     console.log(e)
// //     e += 2
// // }

// let e = 2
// while (e <= 10) {
//     console.log(e * 2)

// }

//break statement


// let y = 1
// while (y <= 10) {
//     if (y == 5) {
//         break
//     }
//     console.log(y) //1//2//3//4
//     y++
// }

let y = 0
while (y <= 10) {
    y++
    if (y == 5) {
        break
    }
    console.log(y) //1//2//3//4

}



// continue statement

// problem statement

// let r = 1
// while (r <= 10) {
//     if (r == 6) {
//         continue
//     }
//     console.log(r) //1//2//3//4//5
//     r++
// }
// above is infite loop

// solution

let r = 0

while (r < 10) {
    r++
    if (r == 6) {
        continue
    }
    console.log(r) //1  2   3   4   5   7   8   9   10 

}