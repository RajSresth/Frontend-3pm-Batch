const btn=document.getElementById("copy");
const block=document.querySelector(".block")

// create tooltip
const tooltip=document.createElement("div")
tooltip.classList.add("tooltip")
tooltip.textContent="Copy Code Snippet"
block.appendChild(tooltip)

btn.addEventListener("click",()=>{
    const code=document.getElementById("code")
    const content=code.textContent;
    navigator.clipboard.writeText(content).then(()=>{
        
        tooltip.textContent="Copied"

        //create overlay
        const overlay=document.createElement("div")
        overlay.classList.add("overlay");

        //create overlay message
        const overlayMsg=document.createElement("div");
        overlayMsg.classList.add("overlay-message");
        overlayMsg.textContent="Text Copied to Clipboard!"

        //insert overlay message inside overlay
        overlay.appendChild(overlayMsg);

        //insert overlay inside block
        block.appendChild(overlay)

        setTimeout(() => {
            overlay.remove();
            tooltip.textContent="Copy Code Snippet"
        }, 2000);
    })
    .catch(()=>{
        console.log("Error can't copied!")
    })
})

block.addEventListener("click",()=>{
    const code=document.getElementById("code")
    const content=code.textContent;
    navigator.clipboard.writeText(content).then(()=>{
        
        tooltip.textContent="Copied"

        //create overlay
        const overlay=document.createElement("div")
        overlay.classList.add("overlay");

        //create overlay message
        const overlayMsg=document.createElement("div");
        overlayMsg.classList.add("overlay-message");
        overlayMsg.textContent="Text Copied to Clipboard!"

        //insert overlay message inside overlay
        overlay.appendChild(overlayMsg);

        //insert overlay inside block
        block.appendChild(overlay)

        setTimeout(() => {
            overlay.remove()
            tooltip.textContent="Copy Code Snippet"
        }, 2000);
    })
    .catch(()=>{
        console.log("Error can't copied!")
    })
})