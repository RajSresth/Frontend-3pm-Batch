// var a=1;
// let b=2;
// const c=3;
//     {
//        var a=10;
//        let b=20;
//        const c=30; 
//        console.log(`Inside Block ${a}`)
//        console.log(`Inside Block ${b}`)
//        console.log(`Inside Block ${c}`)
//     }
// console.log(`Outside Block ${a}`)
// console.log(`Outside Block ${b}`)
// console.log(`Outside Block ${c}`)



// let a=10;

//     {
//         let pass="112233"
//     }
// console.log(`Password: ${pass}`)


// var a=1;
// let b=2;
// const c=3;
//     function greet() 
//     {
//         var a=1023;
//         let b=20;
//         const c=30;
//         console.log(a) //10
//         console.log(b) // 20
//         console.log(c) //30
//     }
//     greet()
// console.log(a)//1 
// console.log(b)//2
// console.log(c)//3


var a=1;
let b=2;
const c=3;
    {
        var a=10;
            b=20;
        const c=30;
        console.log(`Inside Block ${a}`) //10
        console.log(`Inside Block ${b}`) //
        console.log(`Inside Block ${c}`)        
    }
    function greet(){
        var a=100;
            b=30;
        const c=3
        console.log(`Inside Function ${a}`) //
        console.log(`Inside Function ${b}`) //
        console.log(`Inside Function ${c}`) //
    }
    greet()
    console.log(`Outside ${a}`)
    console.log(`Outside ${b}`)
    console.log(`Outside ${c}`)
    