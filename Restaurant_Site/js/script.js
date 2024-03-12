let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let scroll_btn = document.querySelector(".scroll_btn");
window.addEventListener("scroll", () =>{
    if(document.body.scrollTop>40|| document.documentElement.scrollTop>40){
        scroll_btn.style.opacity=1
        scroll_btn.addEventListener("click",()=>{
            window.scrollTo({behavior:"smooth",top:20})
        })
    }else{
        scroll_btn.computedStyleMap.opacity=0
        
    }
})