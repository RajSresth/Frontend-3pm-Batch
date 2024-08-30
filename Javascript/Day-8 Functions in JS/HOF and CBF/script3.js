function parent()
{
    console.log("Parent Function")
    
    function child(){
        console.log("Child Function")
    }
    
    return child;
}

// let output=parent()
// output()

parent()()



