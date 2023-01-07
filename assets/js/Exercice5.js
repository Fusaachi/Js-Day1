let lastname = document.querySelector("#lastname")
let firstname = document.querySelector("#firstname")
let city = document.querySelector("#city")


let bt1 = document.querySelector("#bt1")

bt1.addEventListener("click",afficherMessage)

function afficherMessage()
{

   let variables = lastname.value +"\n" + firstname.value +"\n" +city.value
   document.querySelector("#afficher").innerHTML=variables


}