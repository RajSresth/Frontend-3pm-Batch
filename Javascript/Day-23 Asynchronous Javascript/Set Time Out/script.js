/*
function akshay()
{
    console.log("Chadda samjhao")
}
function ajay()
{
    console.log("Ata maji satakli")
}

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;

console.log(a)
console.log(b)
const id1=setTimeout(ajay, 5000);
console.log(c)
console.log(d)
const id2=setTimeout(akshay, 3000);
console.log(e)

console.log("Timeout Id")
console.log(id1)
console.log(id2)
*/

const id=setTimeout(() => {
    console.log("Ye dhai kilo hath jispe padta h..!!")
}, 1000);

clearTimeout(id)