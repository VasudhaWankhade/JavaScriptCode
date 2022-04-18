let heading = document.querySelector('h1[class="mainHeading"]')
console.log(heading)

heading.addEventListener('click', function() {
    heading.style.color = "yellow"
    heading.textContent = "Welcome to our Website"
    heading.style.backgroundColor = "pink"
})