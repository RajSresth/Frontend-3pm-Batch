

window.addEventListener("keydown",(e)=>{
    if(e.ctrlKey && (e.key==="D"||e.key==="d"))
    {
        e.preventDefault()
        document.body.style.cssText="background-color:black;color:white;"
    }
    else if(e.ctrlKey && (e.key==="L"||e.key==="l"))
    {
        e.preventDefault();
        document.body.style.cssText="background-color:white;color:black;"
    }    
})