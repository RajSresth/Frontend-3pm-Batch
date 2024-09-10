/* 1. By using curly braces { } and literals.

const obj={}   //Empty Object


//object having literals
const obj2={
            name:"Chombu",
            age:24
        } 
console.log(obj2)  */

/* 2. By using new keyword and Constructor.

const obj=new Object({name:"Tinku",age:24})
console.log(obj)

*/
 
/* 3. By using new keyword and Constructor function 

function CreateObject(name,age,isWorking) 
{
    this["user name"]=name;
    this["user age"]=age;
    this["is Working"]=isWorking;
}

const obj=new CreateObject("Dinga",21,false)
console.log(obj)*/


/* 4. By using class 
class Car
{
   constructor(name,price,color){
        this.name=name;
        this.price=price;
        this.color=color;
    }
} 

const toyota=new Car("Fortuner","55L","White")
console.log(toyota)
 */




