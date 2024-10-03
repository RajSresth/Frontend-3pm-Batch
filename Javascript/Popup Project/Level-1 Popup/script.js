let res;
function popUp()
{
    res=confirm("Accept all cookies..!")
    console.log(res)
}

window.addEventListener("load",()=>{
    popUp()
})

if(!res)
{
    setTimeout(popUp, 2000);
}