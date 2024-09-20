const button=document.querySelector("button")

/* click */
button.addEventListener("click",()=>{
    console.log("Button Left Clicked..!!")
})

/* dblclick 
button.addEventListener("dblclick",()=>{
    console.log("Jhukega Nahi..!!")
})*/

/* mousedown 

button.addEventListener("mousedown",()=>{
    console.log("Mouse Pressed")
})*/

/* Mouseup
button.addEventListener("mouseup",()=>{
    console.log("Mouse Released")
})*/

/* mousemove
button.addEventListener("mousemove",(e)=>{
    console.log(`Mouse Position X=${e.clientX} y=${e.clientY}`)
})*/

/* mouseover and mouseenter 
button.addEventListener("mouseover",()=>{
    document.body.style.cssText="background-color:#000"
    console.log("Mouse is Hover")
})*/

/* mouseout  and mouseleave
button.addEventListener("mouseout",()=>{
    document.body.style.cssText="background-color:white"
    console.log("Mouse is Out")
})*/

/* contextmenu for Right click 
button.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
    console.log("Button Right Clicked")
})
*/

/*wheel 
button.addEventListener("wheel",(e)=>{
    console.log(e.deltaY)
})*/

