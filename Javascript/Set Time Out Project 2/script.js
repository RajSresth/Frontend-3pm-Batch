// create a tool tip
const code=document.getElementById("code")
const tooltip=document.createElement("div");
tooltip.classList.add("tooltip");
tooltip.textContent="Copy Code Snippet";
code.appendChild(tooltip);

const java=document.getElementById("java");
const js=document.getElementById("js");
const python=document.getElementById("python");

java.addEventListener("click",function (){
    code.textContent=`System.out.println("Hello World!);`
    this.style.backgroundColor=" #1e3a8a"
    js.style.backgroundColor="#1d4ed8"
    python.style.backgroundColor="#1d4ed8"
    code.appendChild(tooltip);
})

js.addEventListener("click",function(){
    code.textContent=`console.log("Hello World!);`
    this.style.backgroundColor=" #1e3a8a"
    java.style.backgroundColor="#1d4ed8"
    python.style.backgroundColor="#1d4ed8"
    code.appendChild(tooltip);
})


python.addEventListener("click",function(){
    code.textContent=`print("Hello World!)`
    this.style.backgroundColor=" #1e3a8a"
    java.style.backgroundColor="#1d4ed8"
    js.style.backgroundColor="#1d4ed8"
    code.appendChild(tooltip);
})


code.addEventListener("click",function(){
    const content=this.textContent
    navigator.clipboard.writeText(content).then(()=>{
        tooltip.textContent="Copied";

        // create Overlay
        const overlay=document.createElement("div");
        overlay.classList.add("overlay");

        //create overlay message
        const overlayMsg=document.createElement("div");
        overlayMsg.classList.add("overlay-message")
        overlayMsg.textContent="Text Copied to Clipboard!"

        // Insert overlay Message inside overlay
        overlay.appendChild(overlayMsg)

        //Insert Overlay inside code tag
        code.appendChild(overlay);

        setTimeout(() => {
            tooltip.textContent="Copy Code Snippet";
            overlay.remove()
        }, 1000);
    }).catch(()=>{
        console.log("Error")
    })
})


