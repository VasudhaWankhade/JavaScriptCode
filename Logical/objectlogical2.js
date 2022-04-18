let namesOfstudents = [{
        namee: "Vasudha Wankhade"
    },
    {
        namee: "Sanju Dhdhe"
    },
    {
        namee: "Varsha Wa"
    },
    {
        namee: "Vinita Wel"
    }
]

//give new property userName:initials of firstname and lastname

namesOfstudents.forEach(function(el) {

    let user = el.namee.split(" ").reduce(function(acc, el) {
        return acc + el[0]
    }, " ")
    let newUser = checkUsername(user)
    el.userName = newUser
})
console.log(namesOfstudents)

function checkUsername(userNName) {
    for (let i = 0; i < namesOfstudents.length; i++) {
        if (namesOfstudents[i].userName == userNName) {

            return userNName + userNName
        } else {
            return userNName
        }
    }
}