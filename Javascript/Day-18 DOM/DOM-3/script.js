/*const p=document.querySelector("p")
p.textContent=p.textContent+" I am a Web Developer"; */

/*
const p=document.querySelector("p")
p.innerHTML="Hello I am <a href='' target='_blank'>Web Developers</a>" */

/* outerHTMl
const div=document.getElementById("example")
console.log(div.outerHTML)

div.outerHTML=`<section>
                    <p>Ram Ram Bhai Sareyane..!!</p>
                </section>` */

/*
const div=document.getElementById("example")
if(div.getAttribute("class")==="div1")
{
    console.log("Matched..!!")
}
else{
    console.log("Not Match")
}
 */

/* set an Attribute
const div=document.getElementById("example")

// console.log(div.getAttribute("class"))
// console.log(div.getAttribute("id"))

div.setAttribute("class","div1 chombu")
div.setAttribute("class",`${div.getAttribute("class")} chombu`)

div.setAttribute("style",`background-color:black;color:white;`)
*/


/* remove an attribute
const div=document.getElementById("example");
div.removeAttribute("title")
*/

/* create Attribute
const attribute=document.createAttribute("id")
attribute.value="para"
const p=document.querySelector('p')

// set Attribute
// p.setAttributeNode(attribute)
*/


const h1=document.querySelector("h1")
h1.setAttribute("id","root")

