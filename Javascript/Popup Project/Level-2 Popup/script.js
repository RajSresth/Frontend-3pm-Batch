const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
let res;

btn1.addEventListener("click",()=>{
    res=true;
    closePopup()
})

btn2.addEventListener("click",()=>{
    res=false;
    closePopup()
    if(!res)
    {
        setTimeout(() => {
            openPopup()
        }, 2000);
    }
})

function openPopup()
{
    const overlay=document.querySelector(".overlay")
    overlay.style.display="block";
    const popup=document.querySelector(".myPop");
    popup.classList.add("show")
}

function closePopup()
{
    const overlay=document.querySelector(".overlay")
    overlay.style.display="none";
    const popup=document.querySelector(".myPop");
    popup.classList.remove("show")
}


window.addEventListener("load",()=>{
   setTimeout(openPopup, 2000);
})