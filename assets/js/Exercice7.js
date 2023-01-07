document.querySelector("#titre1").innerHTML=("Deviner le nombre")
document.querySelector("#titre2").innerHTML=("Jeu : Deviner un nombre entre 1 et 100")

let btnPlay = document.querySelector(".btnPlay")
let formNumber = document.querySelector(".form-number")
let inputNumber = document.querySelector(".input-number")
let btnValide = document.querySelector("#btnValider")
//block qui affichera le résultat
let blockResultat = document.querySelector('.bloc-resultat')

//je stock mon nbr aléatoire généré par ma fonction
let nbrRandom = randomRange(1, 100)
//Génère un nombre aléatoire entre 1 et 100
function randomRange(myMin, myMax){
    return Math.floor(Math.random() * (myMin, myMax + 1))+ myMin
}

// au click du bouton play
btnPlay.addEventListener("click", function(){
    //affiche un nbre aléatoire
    nbrRandom = randomRange(1, 100)
    //affiche le input
    formNumber.style.display = "block"
    //cache le btn play
    btnPlay.style.display = "none"

})
// au click

 btnValide.addEventListener("click", showResult);

 function showResult(e){

    e.preventDefault()
    let valeur= inputNumber.value
    if (valeur > nbrRandom){
        blockResultat.innerHTML = "Trop grand";
    }
    if (valeur < nbrRandom){
        blockResultat.textContent = "Trop petit";
    }
    if (valeur == nbrRandom){
        blockResultat.textContent = "Vous avez gagné";
        alert("Vous avez gagné");
        //rafraichi la page
        document.location.reload();
    }
 }