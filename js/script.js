var header = document.getElementById('header');
window.onscroll = function(){
    if(window.scrollY >= (screen.height - 500)){
        header.classList.add("scrolled")
    }
    else{
        header.classList.remove("scrolled")
    }
   
}