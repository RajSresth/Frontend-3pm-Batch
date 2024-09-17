/*
let arr=[10,20,30,40,50,60,70,80,90,100]

function findTotal(...i)   //rest operator
{
    const total=i.reduce((acc,val)=>acc+val,0)
    console.log(`Total is: ${total}`)
}
findTotal(...arr)  //spread operator */

/* spread operator use case with array

const foods=["Maggie","Ice Cream"]
const clothes=["T-shirt","Jeans"]
const footwear=["Shocks","Crocs"]


const total=[...foods,...clothes,...footwear]
console.log(total) */

/* Spread Operator use case with object*/

const obj1={
    name:"Tinku",
    age:21
}

const address={
    city:"Noida",
    pin:201301
}

const student={...obj1,...address}
console.log(student)
