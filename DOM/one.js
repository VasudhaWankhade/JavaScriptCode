let a = document.querySelector("ul")
console.log(a)

let b = document.querySelectorAll('li') //returns Nodelist
console.log(b)

let c = document.querySelector('li')
console.log(c)

let d = document.getElementById('greet')
console.log(d)

let e = document.getElementsByTagName('li') //returns HTML collection
console.log(e)

let f = document.getElementsByClassName('hello') //returns HTML collection
console.log(f)

//For retrieving elements 

{ /* <p id="greet" class="smile">Nice to meet you...</p> */ }

let g = document.querySelector('p') //By tag name
console.log(g)

let i = document.querySelector('#greet') //By id
console.log(i)

let j = document.querySelector('.smile') //By class name
console.log(j)

let k = document.querySelector('p[name="nice"]') //By formula
console.log(k)


//Creating the elements

let button1 = document.createElement('button') //<button></button>
button1.textContent = "Click Me" //<button>Click Me</button>
greet.appendChild(button1)

button1.addEventListener('click', function() {
    p.style.color = "red"
})

let listEl = document.createElement('li') //<li></li>
listEl.textContent = "Good Morning" //<li>Good Morning</li>
a.appendChild(listEl)