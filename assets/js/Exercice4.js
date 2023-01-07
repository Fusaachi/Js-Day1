let prenom = document.querySelector("#firstName")
let nom = document.querySelector("#lastName")
let city = document.querySelector("#city")
let valider = document.querySelector("#valider")
let resultat = document.querySelector("#resultat")
let resultats = document.querySelector("#resultats")
let result = document.querySelector("#result")


//création d'un écouteur sur le bouton valider
valider.addEventListener("click", validerClickHandlea)
    
function validerClickHandlea(){

    let bonjour = prenom.value + "\n" + nom.value + "\n" + city.value
    alert(bonjour)
}

validerClickHandlea()