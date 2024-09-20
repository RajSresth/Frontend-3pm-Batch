const box=document.getElementById("box")
let lSide=100;
let tSide=100;

window.addEventListener("keydown",(e)=>{
    let move=50;
    switch (e.key) {
        case "ArrowUp":
            tSide=tSide-move;
            break;
        case "ArrowDown":
            tSide=tSide+move;
            break;
        case "ArrowLeft":
            lSide=lSide-move;
            break;
        case "ArrowRight":
            lSide=lSide+move;
            break;
        default:
            break;
    }
    box.style.left=lSide + "px";
    box.style.top=tSide + "px"
})