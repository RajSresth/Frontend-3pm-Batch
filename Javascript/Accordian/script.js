const acc=document.querySelectorAll(".accordian")

acc.forEach((element,i)=> {
    element.addEventListener("click",()=>{
        const cross=document.querySelector(`.accordian:nth-of-type(${i+1}) .cross`);
        cross.classList.toggle("show")
    
        const content=document.querySelector(`.accordian:nth-of-type(${i+1}) .content`);
        content.classList.toggle("show")
    })
    
})
    
