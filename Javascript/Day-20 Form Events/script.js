/*const fullname=document.getElementById("name");
fullname.addEventListener("change",()=>{
    console.log(fullname.value)
}) */

const myForm=document.getElementById("myForm")
myForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const fullname=document.getElementById("name")
    const email=document.getElementById("email")
    const password=document.getElementById("pass")
    const myArea=document.getElementById("textarea");
    myArea.value=`Name: ${fullname.value}
                   Email:  ${email.value}
                    Password: ${password.value}`
})