console.log("start");
let a = 10;
var b = 20;
const c = 30;
{
  let a = 10;
  console.log(a);
  const c = 300;
  console.log(b);
  b = 200;
  c = 30;
  console.log(b);
}
console.log(a);
console.log(b);
console.log("end");