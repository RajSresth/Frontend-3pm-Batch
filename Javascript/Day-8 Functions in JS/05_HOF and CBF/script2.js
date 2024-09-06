// HOF
function generic(task1,name,city){
    task1(name,city)
}

// call back function
function setUsername(name,city){
    console.log(`User Name is: ${name}`)
    console.log(`City: ${city}`)
}
generic(setUsername,"Aditya","UP")