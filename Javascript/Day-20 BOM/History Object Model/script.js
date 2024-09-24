console.log(window.history)

/* history.back() method*/
const btn1=document.getElementById("btn1")
btn1.addEventListener("click",()=>{
    history.back()
})

/* history.forward() */
const btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    history.forward()
})

/* history.go() */
const btn3=document.getElementById("btn3")

btn3.addEventListener("click",()=>{
    history.go(2)
})
