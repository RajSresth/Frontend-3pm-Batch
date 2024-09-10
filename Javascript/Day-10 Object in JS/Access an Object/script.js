/* const obj={
    name:"Dinga",
    "user age":24
}

// console.log(obj."user age")
// console.log(`User Name is ${obj.name}`)

console.log(obj["name"])
console.log(obj["user age"]) */

/* Topic: Object Methods

const actor={
    name:"Allu Arjun",
   "pushpa dialog":function(){
        console.log("Teri jhalak ka sharfi shrivalii...!")
        return `Zhukega nahi..`
    },
    "d j":function(){
        console.log(`Dj zara dum bharde`)
    }
}

console.log(actor["pushpa dialog"]())
actor["d j"]() */

/*Topic:- 1. Access object property inside function

const user={
    name:"Aditya",
    age:23,

    userInfo:function(){
        console.log(this)
        console.log(`User name is ${this.name}`);
        console.log(`Age ${this.age}`)
    }
}

user.userInfo() */

/*Topic:- 2. Access object property inside Arrow function */

const user={
    name:"Aditya",
    age:23,

    userInfo:()=>{
        console.log(user)
        console.log(`User name is ${user.name}`);
        console.log(`Age ${user.age}`)
    }
}

user.userInfo()