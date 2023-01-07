let prenom = document.querySelector("#firstName")
let valider = document.querySelector("#valider")


//création d'un écouteur sur le bouton valider
valider.addEventListener("click", validerClickHandle)
    
function validerClickHandle(){
    let prenom_value = prenom.value
    alert("Bonjour, " + prenom_value)
    document.querySelector("#resultat".innerHTML = "Bonjour, " + prenom_value)
}
