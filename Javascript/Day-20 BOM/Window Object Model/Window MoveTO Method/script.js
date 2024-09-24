// Open a new Window
const btn1=document.getElementById("btn1")
let windowName;

btn1.addEventListener("click",()=>{
    windowName=window.open("","chombu","width=100,height=100");
    windowName.document.write(`<h1>Jai Shree Ram</h1>`)    

})

// Move a new Window
const btn2=document.getElementById("btn2")

btn2.addEventListener("click",()=>{
    // windowName.moveTo(300,300)
    windowName.moveBy(300,300)
    windowName.focus()
})

//Resize a new Window
const btn3=document.getElementById("btn3")

btn3.addEventListener("click",()=>{
    windowName.resizeTo(800,400)
    windowName.focus()
})