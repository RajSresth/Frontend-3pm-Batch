const link="https://api.github.com/users";
let cards="";

async function getData(url)
{
    const response=await fetch(url)
    const data=await response.json()
    return data;
}

getData(link)
.then(result=>{
    result.map(value=>{
        cards=cards+`<div class="card">
                        <div class="profile">
                            <img src="${value.avatar_url}" alt="">
                        </div>
                        <h3>User Id: ${value.id}</h3>
                        <h4>User Name: ${value.login}</h4>
                </div>`
        })
})

const btn=document.getElementById("btn")

btn.addEventListener("click",()=>{
    const container=document.querySelector(".card-container")
    container.innerHTML=cards;

    setTimeout(() => {
        openPop()
    }, 1000);
})

function openPop()
{
    const overlay=document.querySelector(".overlay");
    overlay.style.display="block";

    const pop=document.querySelector(".popup");
    pop.classList.add("show")
}

function closePop()
{
    const overlay=document.querySelector(".overlay");
    overlay.style.display="none";

    const pop=document.querySelector(".popup");
    pop.classList.remove("show")
}

const close=document.getElementById("close")

close.addEventListener("click",()=>{
    closePop()
})