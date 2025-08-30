document.getElementById('btn-mouse').addEventListener('mouseenter',function(){
    console.log('mouse entered')
})

document.getElementById('btn-move').addEventListener('mousemove',function(){
    console.log('mouse moved')
})

document.getElementById('name').addEventListener('focus',function(){
    console.log('User is about to write name')
})

document.getElementById('name').addEventListener('blur',function(){
    console.log('User wont write name')
})

document.getElementById('name').addEventListener('keydown',function(event){
    console.log('Typing...',event.target.value)
})