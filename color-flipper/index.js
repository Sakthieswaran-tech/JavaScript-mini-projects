const colors=["red","green","yellow","wheat"]

const btn=document.getElementById("btn");
const col=document.querySelector(".color");

btn.addEventListener("click",()=>{
    const randomNumber=getRandomNum();
    document.body.style.backgroundColor=colors[randomNumber];
    col.textContent=colors[randomNumber]
})

function getRandomNum(){
    return Math.floor(Math.random()*colors.length)
}