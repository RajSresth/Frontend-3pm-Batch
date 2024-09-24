/*Location Object Model  */
console.log(window.location)

console.log(location.href)
console.log(location.protocol)
console.log(location.port)
console.log(location.host)
console.log(location.hostname)


const btn1=document.getElementById("btn1")

btn1.addEventListener("click",()=>{
    // location.href="https://www.google.com"
    location.assign("https://www.google.com")
})


/* Reload Method*/
const btn2=document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    location.reload()
})


/* Replace Method*/
const btn3=document.getElementById("btn3")
btn3.addEventListener("click",()=>{
    location.replace("https://www.facebook.com")
})
