function makeYellow() {
    document.body.style.backgroundColor = 'yellow'
}

function makeRed() {
    document.body.style.backgroundColor = 'Red'
}

blueBtn = document.getElementById('btn-make-blue')
blueBtn.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

purpleBtn=document.getElementById('make-purple') 
purpleBtn.onclick=makePurple;

function makePurple(){
    document.body.style.backgroundColor='purple'
}
