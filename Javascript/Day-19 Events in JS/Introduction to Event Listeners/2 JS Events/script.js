// Target your button tag
const button=document.querySelector("button")

// set event listener
button.onclick=changeText;

function changeText(event) {
    console.log(event)
    const h1=document.querySelector("h1")
    h1.textContent="Jai Shree Radhe..🙏"
};

