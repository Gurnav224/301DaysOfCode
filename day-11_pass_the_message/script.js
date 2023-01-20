

const actionBtn = document.querySelector('.MsgBtn')


actionBtn.addEventListener('click',passTheMessage,false);

function passTheMessage(){
    const inputValue = document.querySelector('#messageInput').value;
   
   document.querySelector('#showMsg').innerHTML = inputValue;
}
