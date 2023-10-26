let btnTema = document.querySelector("#btnTema");


function cambioTema(){
   if( document.documentElement.getAttribute("data-bs-theme") == "dark"){
    document.documentElement.setAttribute("data-bs-theme", "light")
    
    
   }else{
    document.documentElement.setAttribute("data-bs-theme", "dark")
    
   }
}


btnTema.addEventListener("click",cambioTema)