function myFunction(x){
    x.classList.toggle("change")
}

const themeBtn = document.getElementById("theme-btn")

themeBtn.onclick = () =>{

    themeBtn.classList.toggle("fa-sun");
    if(themeBtn.classList.contains("fa-sun")){
        themeBtn.classList.remove("fa-moon")
        document.body.classList.add("changeTheme")
        
    }
    else{
        themeBtn.classList.add("fa-moon")
        document.body.classList.remove("changeTheme")
    }

    
}
