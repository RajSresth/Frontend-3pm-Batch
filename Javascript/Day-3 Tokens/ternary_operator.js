/* question-1 wajsp to find biggest of two numbers?

let a=+prompt("Enter 1st Number");
let b=+prompt("Enter 2nd Number");

let res= (a>b)?a:b;

console.log("Biggest Number is: "+res); */

//question-2 wajsp to find biggest of three numbers?
//question-3 wajsp to find biggest of four numbers?
//question-4 wajsp to find the number is even or odd?
//question-5 wajsp to find leap year?

// Normal Leap year:- year%100!==0 && year%4===0
//Leap year in a centuary Year:- year%400===0


const year=+prompt("Enter a year");

const response=(year%100!==0 && year%4===0)|| year%400===0?" Leap Year":" Not a Leap Year";

console.log(year+response)