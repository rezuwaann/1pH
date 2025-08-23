const d=document.getElementById('old-dhaka')

console.log(d.childNodes)
console.log(d.childNodes[0].parentNode)
console.log(d.childNodes[0].parentNode.parentNode)


let newChild=document.createElement('li')
newChild.innerText='This is new element'

const playersList=document.getElementById('player-list')
playersList.appendChild(newChild)