

function myfunction(x){
    x.classList.toggle('change')
}

const themeBtn = document.getElementById("themeBtn")

themeBtn.onclick = () =>{

    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        themeBtn.classList.remove('fa-moon')
        document.body.classList.add('changeTheme')
        
    }
    else{
        themeBtn.classList.add('fa-moon')
        document.body.classList.remove('changeTheme')
    }
}


const acc = document.querySelectorAll('.accordion');


for(let i=0; i<acc.length; i++){
    
    console.log(acc[i]);

    acc[i].addEventListener('click',function(){
        this.classList.toggle('active')

        var panel = this.nextElementSibling;
        
        if(panel.style.display==="block"){
            panel.style.display = "none"
        }else{
            panel.style.display = "block"
        }

    })
}