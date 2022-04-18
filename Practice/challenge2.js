// alphabet = prompt("Enter the alphabet")
for (let i = 0; i < 100; i++) {
    let alphabet = prompt("Enter the alphabet")
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    if (vowels.includes(alphabet)) {
        console.log("Vowel")
    } else {
        console.log("Consonant")
    }
}