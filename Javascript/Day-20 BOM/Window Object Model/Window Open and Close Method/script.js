// console.log(window.innerHeight)
// console.log(window.innerWidth)

const btn1=document.getElementById("btn1")
// const btn2=document.getElementById("btn2")
// const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
let windowName;

btn1.addEventListener("click",()=>{
    const url="https://open.spotify.com";

    // Dimension of new Tab
    // const width=800;
    // const height=400;
    const width=Math.floor(window.innerWidth/2)
    const height=Math.floor(window.innerHeight/2)

    // position of new tab
    const top=Math.floor((window.innerHeight-height)/2)
    const left=Math.floor((window.innerWidth-width)/2);

    windowName=window.open(url,"chombu",`width=${width},height=${height},top=${top},left=${left},fullscreen=no`)
})
/*
btn2.addEventListener("click",()=>{
    const url="https://wynk.in/music";

    // Dimension of new Tab
    // const width=800;
    // const height=400;
    const width=Math.floor(window.innerWidth/2)
    const height=Math.floor(window.innerHeight/2)

    // position of new tab
    const top=Math.floor((window.innerHeight-height)/2)
    const left=Math.floor((window.innerWidth-width)/2);

    window.open(url,windowName,`width=${width},height=${height},top=${top},left=${left},fullscreen=no`)
})
btn3.addEventListener("click",()=>{
    const url="https://gaana.com/";

    // Dimension of new Tab
    // const width=800;
    // const height=400;
    const width=Math.floor(window.innerWidth/2)
    const height=Math.floor(window.innerHeight/2)

    // position of new tab
    const top=Math.floor((window.innerHeight-height)/2)
    const left=Math.floor((window.innerWidth-width)/2);

    window.open(url,windowName,`width=${width},height=${height},top=${top},left=${left},fullscreen=no, resizable=no`)
}) */

// close window
btn4.addEventListener("click",()=>{
    windowName.close()
})