/*  Topic: Update a key value pair 

const obj={
    name:"Ajay Devgan",
    age:46,
    "vimal dialog":function(){
        console.log("Bolo jubaan kesari..!!")
    }
}

// Update
obj.age=26
obj["vimal dialog"]=()=>{
                        console.log("Dane Dane me kesar ka dum..!!")
                    }

obj["vimal dialog"]()  */


/* Topic-2: Insert a key value pair

const obj={
    name:"Chombu",
    age:21,
    
}


obj.meme=function (){
    console.log(`${this.name} Tu samjha, naaaaaaahi tu nahi samjha`)
}
console.log(obj) */


/* Topic:-3 Delete a key value pair */

const obj={
    name:"Chombu",
    age:24,
    "is loggin":true
}

// delete obj.isloggin
delete obj["is loggin"]
console.log(obj)