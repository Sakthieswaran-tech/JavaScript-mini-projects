const modalbtn=document.querySelector(".modal-btn");
const modalOverLay=document.querySelector(".modal-overlay");
const closeBtn=document.querySelector(".close-btn");

modalbtn.addEventListener("click",()=>{
    modalOverLay.classList.add("open-modal");
})

closeBtn.addEventListener("click",()=>{
    modalOverLay.classList.remove("open-modal");
})