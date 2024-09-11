/*const obj={
    name:"Alex",
    age:21,
    city:"Noida"
}
const res1=Object.keys(obj)
const res2=Object.values(obj)
const res3=Object.entries(obj)
console.log(res3) */

// Object.assign(target,source1,source2,source3)

//target object
const user={
    name:"Dinga"
}

//source-1 object
const info={
    age:27
}
//source-2 object
const address={
    city:"Noida",
    state:"UP",
    age:21
}

Object.assign(user,address,info)
console.log(user)
