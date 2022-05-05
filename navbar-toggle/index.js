const navTog=document.querySelector(".nav-toggle");
const links=document.querySelector(".links")
const icons=document.querySelector(".social-icon")

navTog.addEventListener("click",()=>{
    console.log(links);
    links.classList.toggle("show-links")
    icons.classList.toggle("show-links")
})