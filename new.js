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