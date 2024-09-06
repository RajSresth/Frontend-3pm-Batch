// HOF:- The function which either accepts another function and return another function is known as higher order function.




/*callback function:-
The function which is given to another function as an argument or 
A function which is returned by another function is known as callback function*/

//HOF
// function generic(task,name){
//    task(name)
// }

// //CBF
// function printUserName(userName){
//     console.log(`User Name is: ${userName}`)
// }

// generic(printUserName,"Chombu")

//question-1 write a function that takes a number and check whether it is prime number or not?

//question-2 write a function that takes a number and count the number of digit?


/*
const checkPrime=a=>{
    let count=0;
    for(let i=2;i<=Math.sqrt(a/2);i++){
        if(a%i===0){
            count++;
        }
    }
    if(count===0){
        return `Prime Number: ${a}`
    }
    else{
        return `Not a Prime Number: ${a}`
    }
}

console.log(checkPrime(10))
*/

// function findCount(a){
//         let count=0;
//         while(a>0){
//                 count++;
//                 a=Math.floor(a/10)
//         }
//         return count;
// }
// console.log(`Count is: ${findCount(12345)}`)


//wajsp to take a function which accepts a number and return reverse of a number?

//wajsp to take a function which accept a number and calculate the sum of digit of a number?

//wajsp to take a function that takes two number and find sum of 100 natural numbers?

//write a function that takes a number and check whether it is palindrome or not?

//write a function that takes a number and check whether it is perfect or not?

//write a function that takes a number and check whether it is strong number or not?

//write a function that takes a number and check whether it is Armstrong number or not?

// write a function that takes a number and find factorial of (7!-5!)/2! ?



let start=+prompt("Enter starting Number");  //3
let end=start+100;  //103

function findSum(a,b){
        let sum=0
        for(let i=a;i<b;i++){
            sum=sum+i
        }
        return sum;
}

const res=findSum(start,end)
console.log(res)




