/* Example:-1
function modi(parameters)
{
    console.log("Vah kya scene hai..!!")

    return `Me apse kuch maang sakta hu kya..!!`
} 
modi()
let result=modi()
console.log(result)
console.log(modi()) */

/*Example:-2 Function by default return undefined when we are not using return keyword

function raju(){
    console.log("Ladki ka chakkar babu bhaiya...!")
}

let result=raju();
console.log(result) */


/* Example:-3 Default Parameter

function task(name="chombu"){
    Default parameter in ES-5 (Older Version)
    (name===undefined?name="chombu":name) 


   name!=="chombu"?alert(`User ${name} Logged in..!`):alert("Please enter login credentials..!");
}

// task("Janesh")
// task("Pawan")
// task()------> name=undefined

// task()
task("Janesh")*/


/* Example:-4 arguments variable

function task(){
   for(let i=0;i<3;i++){
        let name=arguments[i]
            if(name==="satyam")
            {
                 console.log(`${name} Bhai bulati h magar jane ka nahi..!!`)
            }
            else if(name==="Ramesh")
            {
                console.log(`${name} Jaldi waha se hato`)
            }
            else{
                console.log(`${name}, gajab topibaaz h`)
            }
   }
}

task("satyam","Ramesh","Pawan")*/



// let result= 13^2 - 5^2

function power(a,b){
    return (a**b);
}

let result= Math.sqrt(power(13,2) - power(5,2))
console.log(result)
