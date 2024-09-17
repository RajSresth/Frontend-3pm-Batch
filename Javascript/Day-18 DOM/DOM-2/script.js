/* const h1=document.createElement("h1")
h1.textContent="Jai Shree Ram 🙏"

const body=document.body
body.appendChild(h1) */

/*
const list1=document.createElement("li")
const list2=document.createElement("li")
const list3=document.createElement("li")

list1.textContent="HTML"
list2.textContent="CSS"
list3.textContent="JavaScript"

const ul=document.querySelector("ul")
ul.appendChild(list1)
ul.appendChild(list2)
ul.appendChild(list3) */

/* First Sibling
const p1=document.createElement("p");
p1.textContent="Starting Tag"
const div=document.getElementById("box")
div.insertAdjacentElement("beforebegin",p1)


// Last Sibling
const p2=document.createElement("p");
p2.textContent="Ending tag"
div.insertAdjacentElement("afterend",p2)

*/

const first=document.createElement("p")
const last=document.createElement("p")

first.textContent="Paragraph Tag-1"
last.textContent="Paragraph Tag-3"

const div=document.getElementById("box")

div.insertAdjacentElement("afterbegin",first)
div.insertAdjacentElement("beforeend",last)