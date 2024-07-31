/* 
var a=1;
let b=2;
const c=3;
{
    var a=10;
    let b=20;
    const c=30;
    console.log("Inside Block "+a)
    console.log("Inside Block "+b)
    console.log("Inside Block "+c)
}
console.log("Outside Block "+a)
console.log("Outside Block "+b)
console.log("Outside Block "+c) */


/*
let b=2;
    {
        b=20;
        console.log("Inside Block "+b)
    }
console.log("Outside Block "+b) */

/*var a=1;
let b=2;
const c=3;
{
    var a=10;
    b=20;
    const c=30;
    console.log("Inside Block "+a)   
    console.log("Inside Block "+b)   
    console.log("Inside Block "+c)   
}
console.log("Outside Block "+a)
console.log("Outside Block "+b)
console.log("Outside Block "+c) */


let a=1;
var b=2;
const c=3;
{   
    b=10;
    var b=20;
    const c=30;
    console.log("Inside Block "+a)
    console.log("Inside Block "+b)
    console.log("Inside Block "+c)
}
console.log("Outside Block "+a)
console.log("Outside Block "+b)
console.log("Outside Block "+c)

