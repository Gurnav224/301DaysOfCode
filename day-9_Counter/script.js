
var counter = 0;


function CounterPlus(){
  
    counter= counter+1;
    document.querySelector('.show_counter').innerHTML = counter;
}


function CounterMinus() {

    if(counter>0){
        counter = counter-1;
            
        }

    document.querySelector('.show_counter').innerHTML = counter;
}