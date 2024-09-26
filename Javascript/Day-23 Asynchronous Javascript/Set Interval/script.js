/*
let count=1;
function dialog()
{
    console.log(`Yeaaaaaah! ${count++}`)
}

setInterval(dialog, 2000); */

let count=1
const id=setInterval(()=>{
    console.log(`Task-${count++}`)
},1000)

console.log(id)

clearInterval(id)