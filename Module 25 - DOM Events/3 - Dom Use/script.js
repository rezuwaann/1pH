document.getElementById('login-btn').addEventListener('click',function(){
    document.getElementById('user-info').innerText='Logged in Successfully';
})


document.getElementById('btn-update').addEventListener('click',function(){
    
    const inputField=document.getElementById('input-field')
   
    const name=inputField.value;
  
    document.getElementById('name-info').innerText=name;
    
})