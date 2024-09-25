// console.log(window.navigator)
// console.log(navigator.userAgent)

window.addEventListener("copy",(e)=>{
    e.preventDefault();
    navigator.clipboard.writeText("Tu Samjha nahi tu nahi samjha..!!")
})