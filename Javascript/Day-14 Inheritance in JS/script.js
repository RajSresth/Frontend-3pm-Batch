const human={
    eat:function(){
        console.log(`${this.name} can east`)
    },
    sleep:function(){
        console.log(`${this.name} can sleep`)
    }
}

const user={
    name:"Chombu",
    age:"24",
    work:function(){
        console.log(`${this.name} can work..!!`)
    }
}

user.__proto__=human;
console.log(user.hasOwnProperty("sleep"))

