const lowerCount = document.querySelector('.btn-lower');
const addCount = document.querySelector('.btn-Add_Count');
const CounterShow = document.querySelector('.Show-Counter');

let counter =0;

function lowerCounter(){
    
    counter = counter-1;

    if(counter<0){
        counter =0
    }

    CounterShow.innerText = counter
}


function addCounter(){
    counter = counter+1;
    CounterShow.innerText = counter
}

addCount.addEventListener('click',addCounter)

lowerCount.addEventListener('click',lowerCounter)