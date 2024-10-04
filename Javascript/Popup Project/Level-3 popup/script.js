let response;

function openPop()
{
    const overlay=document.querySelector(".overlay");
    overlay.style.display="block";

    const popup=document.querySelector(".myPopup");
    popup.classList.add("show")

    showLoginForm()
}

function closePop(){
    const overlay=document.querySelector(".overlay");
    overlay.style.display="none";

    const popup=document.querySelector(".myPopup");
    popup.classList.remove("show")

}

function showLoginForm()
{
    const loginForm=document.getElementById("login-form");
    loginForm.style.display="flex";

    const signupForm=document.getElementById("singup-form");
    signupForm.style.display="none";
}

function showSignupForm()
{
    const signupForm=document.getElementById("singup-form");
    signupForm.style.display="flex";

    const loginForm=document.getElementById("login-form");
    loginForm.style.display="none";

}

window.addEventListener("load",()=>{
    setTimeout(openPop, 2000);
})

const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")

btn1.addEventListener("click",()=>{
    showLoginForm()
})
btn2.addEventListener("click",()=>{
    showSignupForm()
})


const close=document.querySelector(".cross")

close.addEventListener("click",()=>{
    response=false;
    closePop()
    if(!response)
    {
        setTimeout(openPop, 2000);
    }
})


const loginForm=document.getElementById("login-form")
const singupForm=document.getElementById("signup-form")


loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    response=true;
    closePop()
    if(!response)
        {
            setTimeout(openPop, 2000);
        }
})
singupForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    response=true;
    closePop()
    if(!response)
        {
            setTimeout(openPop, 2000);
        }
})