/*let a="a+12";
let b=Symbol(a)  
console.log(b)
console.log(typeof(b))
*/

let name=prompt("Enter Your name");
let id=prompt("Enter user id");

if(name==="Ramesh" && id==="123"){
    console.log(`User ${name} Logged in`)
}
else if(id===null){
    console.log("Please enter a value")
}
else{
    console.log("Invalid Credentials..!!")
}


