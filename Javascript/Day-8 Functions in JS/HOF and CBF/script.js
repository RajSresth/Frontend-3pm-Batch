// HOF:- The function which either accepts another function and return another function is known as higher order function.




/*callback function:-
The function which is given to another function as an argument or 
A function which is returned by another function is known as callback function*/

//HOF
function generic(task,name){
   task(name)
}

//CBF
function printUserName(userName){
    console.log(`User Name is: ${userName}`)
}

generic(printUserName,"Chombu")
