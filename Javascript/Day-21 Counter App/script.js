const display=document.getElementById("display");

let count=0;
display.textContent=count;

function increment()
{
    count++;
    display.textContent=count;
}

function decrement()
{
    count--;
   if(count>=0)
   {
    display.textContent=count;
   }
}

function reset()
{
    count=0;
    display.textContent=count;
}