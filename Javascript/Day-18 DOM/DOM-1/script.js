/* 
const body=document.body;
body.style.cssText="background-color:#000;color:#fff;font-size:45px;"


const heading=document.getElementById("root")
heading.style.fontSize="75px"


const divItems=document.getElementsByClassName("item");
console.log(divItems)
divItems[2].style.color="cyan" */

/*
const divs=document.getElementsByTagName("div")
divs["parent"].style.cssText="background-color:black;color:cyan;font-size:55px;padding:50px"; */

/*
const div=document.querySelector("#parent>.item:last-of-type")
console.log(div) */


const divs=document.querySelectorAll(".item")
divs[2].textContent="Abra Ka Dabra"
divs[2].style.color="red"
