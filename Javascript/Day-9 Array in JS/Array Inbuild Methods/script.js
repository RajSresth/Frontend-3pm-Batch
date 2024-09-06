/* 1. push()

const arr=[10,20,30,40,50]
const res=arr.push(60)
console.log(arr)
console.log(res)
*/

/* pop() 
const arr=[1,2,3,4,5,6];
const res=arr.pop()
console.log(arr)
console.log(res) */


/* unshift() 
const movies=["PHP","Welcome"]
const res=movies.unshift("Dhamaal","Hungama")
console.log(movies)
console.log(res) // it return the new length of an array*/

/* shift() 

const movies=["Race-3","Dhamal","PHP"]
const res=movies.shift()
console.log(movies)
console.log(res)*/


/*6 slice(a,b)

const users=["Ravi","Jai","Komal","Aman","Tannu"];
const femaleUsers=users.slice(2)
femaleUsers.splice(1,1)
console.log(femaleUsers)
*/

/*7. indexOf(search element,starting index) method

const movies=["PHP","Dhamaal","Welcome","Golmal","PHP"]

console.log(movies.indexOf("PHP",1))
*/

/* 8. reverse() method
const arr=[1,2,3,4,5]
arr.reverse()
console.log(arr)
*/

/* 9. includes(search value,starting index) Method 


const movies=["PHP","Dhamaal","Welcome","Golmal"]

if(movies.includes("Dhamaal",1))
{
    console.log("Papa nahi papa ji bol..!!")
    console.log("Ji papa")
    console.log("Age nhi pichu")
}
*/

/* 10. sort(callback) 

const arr=[8,4,7,5,3,6,2,1]

arr.sort(function(a,b){
            return (a-b)
        })

// arr.sort((a,b)=>a-b) Ascending Order
// arr.sort((a,b)=>b-a) Descending Order
console.log(arr)
*/

/*
const arr=[1,2,3,4,5]   //[1,2,3,4,5]
const output=[]

arr.forEach((val,i,array)=>{
    output.push(val**2);
})

const res=[]
output.forEach(val=>res.push(Math.sqrt(val)))
console.log(res) */

/*
const arr=[1,2,3,4,5]  //[1,8,27,64,125]

arr.forEach((val,i,arrary)=>{
    arrary[i]=Math.floor(val/10)
})
console.log(arr) */


/* map(callback) method
const arr=[1,2,3,4,5];
const res=arr.map((val,i,array)=>{
                    array[i]=val*10                    
                })
console.log(arr)
console.log(res)
*/

/* filter(callback)
const price=[100,200,300,400,500,600,700,800,900,1000]

const res=price.filter((value,index,array)=>value>600)
console.log(res) */


const emp=[
    {name:"Chombu",sal:25000},
    {name:"Tinku",sal:21000},
    {name:"Dinga",sal:18000},
    {name:"Minku",sal:17000},
    {name:"Amit",sal:27000}
]
const res=[]
emp.filter(val=>{
    if(val.sal<=21000)
    {
        res.push(val.name);
    }
})
console.log(res)
