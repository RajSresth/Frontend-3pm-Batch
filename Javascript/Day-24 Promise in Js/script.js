/*
let count=false;
const p1=new Promise(function(resolve,reject){
    if(count)
    {
        resolve("Async Task is Completed")
    }
    else{
        reject("Error")
    }
})

console.log(p1) */



const sapna="no";
const p2=new Promise((resolve,reject)=>{
    if(sapna==="yes")
    {
        console.log("She Replied")
        resolve("Sapna likes you..!")
    }
    else{
        console.log("She Rejected");
        reject("Sapna deserve better..!")
    }
})

p2
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(()=>{
    console.log("Vo stree h kuch bhi kar sakti h..!")
})
