/* const jack={
    cake:"chocolate",
    price:'$5'
}

const oggy=jack;
delete oggy.cake;

console.log(oggy)
console.log(jack) */

//Deep Copy
const jack={
    cake:"chocolate",
    price:"$5"
}

const oggy={}
for(element in jack)
{
    oggy[element]=jack[element]
}

oggy.channel="CN"
console.log(jack)
console.log(oggy)
