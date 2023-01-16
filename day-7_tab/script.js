


function openCity(evt,tabname){
 
    var i, tabcontent,tablinks;

    tabcontent = document.getElementsByClassName("tabcontent")

    for(i=0; i<tabcontent.length; i++){
        


      tabcontent[i].style.display="none"

    }


    tablinks = document.getElementsByClassName("tablinks");


    for(i=0; i<tablinks.length; i++){
     let link =    tablinks[i].className.replace = tablinks[i].className.replace(" active","");

    }

    document.getElementById(tabname).style.display = "block";

    evt.currentTarget.className += " active";

}