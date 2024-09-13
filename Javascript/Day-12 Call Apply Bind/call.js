const obj={
    name:"Tinku",
    age:21
}

function getDetails(city,pin){
    console.log(`User Name: ${this.name}`)
    console.log(`User age: ${this.age}`)
    console.log(`city: ${city}`)
    console.log(`Pin: ${pin}`)
}
getDetails.call(obj,"Noida",201301)