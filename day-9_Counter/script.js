
var counter = 0;


function CounterPlus(){
  
    counter= counter+1;
    document.querySelector('.show_counter').innerHTML = counter;
}


function CounterMinus() {
    counter = counter-1;

    document.querySelector('.show_counter').innerHTML = counter;
}