/*function outer()
{
    console.log("Inside Outer Function")

    function inner() {
        console.log("Inner Function")
    }
    inner()
}
outer() */

/*
function parent()
{
    console.log("Parent Function..!!")

    function child()
    {
        console.log("Child Function")
    }
    return child;
}
const result=parent()
result() */

/* Lexical Scoping

let atmPin=5531

function task(name,city)
{
    console.log("Username:",name)
    console.log("city:",city)
    console.log("Atm Pin:",atmPin)
}

task("Tinku","Noida") */

// Closure

function outer()
{
    console.log("Inside Outer Function")
    let a=10;
    function inner()
    {
        console.log("Inside Inner Function")
        console.log(a)
    }
    return inner;
}

let res=outer()
res()
