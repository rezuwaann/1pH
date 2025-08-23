//1. parent node
const mainContainer = document.getElementById('main-conatainer')


// 2.create child node
const placeSection = document.createElement('section')

const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';

placeSection.appendChild(h1);

const ul = document.createElement('ul')

const li1 = document.createElement('li')
li1.innerText = 'Sundarban'

const li2 = document.createElement('li')
li2.innerText = "Cox's"

ul.appendChild(li1)
ul.appendChild(li2)
placeSection.append(ul)


// 3.append places section to the container
mainContainer.appendChild(placeSection)



// easier way
const booksSection = document.createElement('section')
booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
 <li>Physics</li>
 <li>Chemistry</li>
 <li>Math</li>
</ul>
`
mainContainer.appendChild(booksSection)