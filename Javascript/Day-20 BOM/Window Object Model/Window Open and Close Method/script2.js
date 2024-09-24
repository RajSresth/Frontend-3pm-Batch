// Open Button

const btn1=document.getElementById("btn1")
let windowName;

btn1.addEventListener("click",()=>{
    windowName=window.open("https://www.google.com","chombu","width=600,height=400")
})


//close button
const btn2=document.getElementById("btn2")

btn2.addEventListener("click",()=>{
    windowName.close()  
})