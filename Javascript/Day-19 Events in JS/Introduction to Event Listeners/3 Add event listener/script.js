const button=document.querySelector("button");

button.addEventListener("click",(e)=>{
    console.log(e)
    const body=document.body;
    body.style.cssText="background-color:black;color:white;"

    const h1=document.querySelector("h1");
    h1.textContent="Learning Events in Js"
})