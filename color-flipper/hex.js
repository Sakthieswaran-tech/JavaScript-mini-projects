const hex_code=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn=document.getElementById("btn");
const col=document.querySelector(".color");

btn.addEventListener("click",handleClick);

function handleClick(){
    let hexcolor="#";
    for(let i=0;i<6;i++){
        let randomNum=Math.floor(Math.random()*hex_code.length)
        hexcolor+=hex_code[randomNum];
    }
    col.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor
}