// Switch case without break



let city = 'lucknow'

switch (city) {
    case 'pune':
        console.log("Maharashtra")
    case 'lucknow':
        console.log("Uttarpradesh")
    case 'indore':
        console.log("Madhya Pradesh")
    default:
        console.log("City not found")
}
// Print all cities

// Switch case with break

let country = "India"

switch (country) {
    case 'India':
        console.log("My country is India")
        break
    case 'America':
        console.log("My country is America")
        break
    case 'Japan':
        console.log("My country is Japan")
        break
    default:
        console.log("None")
}

// with two cases

let name1 = "Vasudha"

switch (name1) {
    case 'Vasudha':
    case 'Wankhade':
        console.log("Vasudha Wankhade")
        break
    case 'Radhika':
    case 'Bapat':
        console.log("Radhika Bapat")
        break
    case 'Dhanashree':
    case 'Raut':
        console.log("Dhanashree Raut")
        break
    default:
        console.log("No name")
}