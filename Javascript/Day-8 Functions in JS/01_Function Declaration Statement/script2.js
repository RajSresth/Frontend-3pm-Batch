let sum;

function call(m,n)
{
    sum=m+n
    console.log(this)
}

call(10,10)
console.log(sum)