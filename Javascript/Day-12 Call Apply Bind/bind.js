const obj={
    name:"Chombu",
    age:21
}

function getDetails(city,isWorking)
{
    console.log(`User Name: ${this.name}`)
    console.log(`Age: ${this.age}`)
    console.log(`city: ${city}`)
    console.log(`Working Status: ${isWorking}`)
}

const result=getDetails.bind(obj,"Noida",true)
result()