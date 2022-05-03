let count=0;

const value=document.getElementById("value");
const btns=document.querySelectorAll(".btn");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles=e.currentTarget.classList;
        if(styles.contains("inc")){
            count++;
        }else if(styles.contains("dec")){
            count--;
        }else{
            count=0;
        }
        let color="black";
        if(count<0){
            color="red";
        }else if(count>0){
            color="green";
        }
        value.textContent=count;
        value.style.color=color
    })
})
