const obj={
    name:"Dinga",
    age:21
}

function getDetails(city,pin)
{
    console.log(`User Name: ${this.name}`)
    console.log(`Age: ${this.age}`)
    console.log(`city: ${city}`)
    console.log(`pin: ${pin}`)
}
getDetails.apply(obj,["Noida",201301])