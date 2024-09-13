// class based inheritance

class Animal
{
    constructor(name)
    {
        this.name=name;
    }
    sound(){
        console.log(`${this.name} can sound..!!`)
    }
}

class Dog extends Animal
{
    constructor(name,breed)
    {
        super(name)
        this.breed=breed
    }
    speak()
    {
        console.log("Bhaoooo Bhaooooo")
    }
}

const dog1=new Dog("Sheru","Rotwiller")

console.log(dog1.name)
console.log(dog1.breed)

dog1.speak()
dog1.sound()