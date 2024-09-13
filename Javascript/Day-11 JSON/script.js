const obj={
    name:"Chombu",
    age:24
}


//convert data into JSON
const json_obj=JSON.stringify(obj)
console.log(json_obj)

// Convert JSON data into JS
const js_obj=JSON.parse(json_obj)
console.log(js_obj)
