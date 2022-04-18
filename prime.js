function prime(x) {
    if (x < 2) {
        console.log("number is not prime")
    } else if (x % 2 == 0 || x % 3 == 0 || x % 5 == 0 || x % 7 == 0) {
        console.log("Number is not prime")
    } else {
        console.log("Number is prime")
    }
}


prime(25)
prime(33)
prime(19)
prime(0)
prime(119)

