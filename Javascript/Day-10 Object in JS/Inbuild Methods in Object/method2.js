/*const obj={
    name:"Chombu",
    age:21
}

const arr=Object.entries(obj)
const newObj=Object.fromEntries(arr)
console.log(newObj) */


/* Object.freeze()
const obj={
    name:"pawan",
    age:26
}
Object.freeze(obj)
console.log(Object.isFrozen(obj))

//No insertion, No updation, No deletion
obj.age=21
console.log(obj) */

const user={
    name:"Tinku",
    age:22
}

//No insertion, updation and deletion possible

Object.preventExtensions(user)
console.log(Object.isExtensible(user))
delete user.age
console.log(user)


