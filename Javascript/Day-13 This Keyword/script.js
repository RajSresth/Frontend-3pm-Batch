// const obj={
//     name:"Tinku",
//     getDetails:function () {
//         console.log(this)
//      }
// }

// obj.getDetails()


const obj={
    name:"Tinku",
    getDetails:()=>{
        console.log(obj)
        console.log(this)
     }
}

obj.getDetails()
