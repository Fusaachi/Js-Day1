prg_devinerLeNombre()

function prg_devinerLeNombre(){
    // déclaration des variables qui correspondent à nos balises avec leur
    // sélecteurs
    let boutonStart = document.querySelector("#start")
    let response =  document.querySelector("#response")
    let inputGuess = document.querySelector("#guess")
    let boutonSend =  document.querySelector("#send")

    // faire disparaire le champs et le bouton valider
    inputGuess.style.display = "none"
    boutonSend.style.display = "none"

    // déclarer un écouteur sur le bouton start et lancer une fonction
    boutonStart.onclick = function(e){
        // console.log(e)
        e.preventDefault()
        e.stopPropagation()
        // une fois le bouton start cliqué :
        //- faire disparaitre le bouton start
        boutonStart.style.display = "none"
        //- faire apparaitre le champ
        inputGuess.style.display = "block"
        //- faire apparaitre le bouton valider
        boutonSend.style.display = "block"
        // déclaration du nombre a trouver
        let trouveLeNombre
        // on utilise la class Math associée aux méthode floor() et random()
        // pour calculer un nombre au hasard entre 1 et 100
        // La fonction Math.floor(x) renvoie le plus grand entier qui est
        // inférieur ou égal à un nombre x.
        // La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire
        // compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris
        // dans l'intervalle mais que 1 en est exclu)
        trouveLeNombre = Math.floor(Math.random()*(99) + 1)
        console.log(trouveLeNombre)
        // déclaration d'un écouteur d'évènement sur le bouton valider
        // et de sa fonction qui va englober la gestion de l'information
        // c'est + ou c'est -
        boutonSend.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            // déclaration de la variable guess (deviner)
            let deviner
            // récupération de valeur inscrite dans le champs avec value
            deviner = inputGuess.value 
            // déclaration d'une condition if else if else
            // si c'est vrais que deviner est supérieur à trouverLeNombre
            if(deviner > trouveLeNombre){
                response.innerHTML = "Ah ah ! c'est moins !!"
            }
                // sinon si c'est vrais que deviner est inférieur à
                // trouverLeNombre
                else if(deviner < trouveLeNombre){
                    response.innerHTML = "Ah ah ! c'est plus !!"
                }
            // sinon le nombre a été trouvé deviner est égale 
            // à trouverLeNombre
            else{
                // on ouvre une fenètre d'alerte avec Vous avez gagné
                let gagner
                gagner = "Bravo !!\nVous avez gagné.\nLe nombre à trouver était bien " + trouveLeNombre + ".\nCliquer sur le bouton ok pour rejouer."
                alert(gagner)
                // rafraichissement de notre page pour relancer le script
                document.location.reload()
            }
        }
    }
}