/*
try{
    const m=1;
    const n=2;
    console.log(m)
    console.log(n)
    console.log(a)
}catch(error)
{
    console.log("Error Name: "+error.name)
    console.log("Error Message:"+error.message)
}
finally{
    console.log("Task Completed!")
}
*/

let obj={};
try {
    const name=prompt("Enter user name")
    const age=+prompt("Enter your age")
    if(name==="")
    {
        throw new Error("Name is not passed by the user!");        
    }
    else if(age===0)
    {
        throw new Error("Age is not passed by the user!");        
    }
    else{
        console.log("User Name: "+name)
        console.log("User age: "+age)
        obj={
            name,
            age
        }
    }
} catch (error) {
    console.log("Error: "+error.message)
}
finally{
    console.log(obj)
    console.log("Task Completed!")
}
