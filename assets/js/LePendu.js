// Déclaration des différents sélecteurs pour les mettre dans des variables
let pendu_lettres = document.querySelector(".pendu-lettres")
let bouton  = document.querySelector("#bt")
let lettre = document.querySelector("#lettre")

//déclaration du tableau de mot

let tabMots = [ "chocolat","pyramide", "automobile", "synonyme", "lion","perpendiculaire"]
// le mot trouvé
let leMot
// erreurs Maximum
const erreurMax = 14
// nbre d'erreurs
let erreur = 0 

// Cette fonction va piocher un mot au hasard dans notre tableau de mot 
function motAuHasard()
{   // Déclaration d'une variable pour le hasard
    let aleatoire
    // Déclaration d'une variable pour la position du mot dans le tableau
    let index
    // Calcul du hasard entre 0 et 1 
    aleatoire = Math.random()
    // console.log(aleatoire)
    // tirage aléatoire de l'index du tableau, round arrondie à l'entier
    // le plus proche / lenght veut dire longueur, ici longueur du tableau et -1 à cause de l'index 0 
    index = Math.round(aleatoire * (tabMots.length))
    console.log(index)
    // On place le mot correspondant à l'index dans la variable leMot
    leMot = tabMots[index]
    console.log(leMot)
}

// La mise en place : suite au tirage du mot, on place autant de span que de lettres du mot avec un ? à la place des lettres dans l'html (dans la
//class html : pendu-lettres)
function interface() 
{   // à l'aide de la longueur du mot : on fait une boucle for
    for(let i = 0 ; i< leMot.length; i++){
        // On fabrique des spans que l'on injecte dans la page
        pendu_lettres.innerHTML += '<span class="case-lettre me-3">?</span>'
    }   
}
//Création d'un écouteur d'évènement "click" sur bt

bouton.onclick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // Condition si le champs input est vide
    if(lettre.value == ""){
        //message d'alerte
        alert("Veuillez entrez une lettre SVP!")
    }
    else {verification()}

}
// Fonction qui analyse la lettre entrée
function verification()
{   // récupération de la lettre saisie 
    let lettreSaisie = lettre.value
    console.log(lettreSaisie)
    console.log(leMot.indexOf(lettreSaisie))
    //On va utiliser indexOf() pour savoir si la lettre saisie est présente dans le mot à trouver
    if(leMot.indexOf(lettreSaisie) == -1 ){
        // on ajoute une erreur +1
        erreur++
        if(erreur = erreurMax ){
            alert("Désolé, vous avez perdu ! \n Cliquez sur ok pour relancé le jeu")
            // Rafraichissement de la page pour recommencer le jeu
            document.location.reload()
        }
    
    //sinon, on a encore le droit à des erreurs
         else {
            alert("Dommage!! \nCette lettre n'est pas dans le mot,\n Vous avez encore droit à " + (erreurMax-erreur)+" erreurs.")
         }
        } 
    else{
        //----------La lettre existe dans le mot---------------
        // Déclaration de tous les sélecteurs class="case-lettre" en fonction du nombre de lettres, cela fabrique un tableau
        let case_lettre = document.querySelectorAll(".case-lettre")
        //dans une boucle for, on passe en revue chaque lettre du mot à trouvé
        for(let i=0; i < leMot.length; i++){
            //Si la lettre passée en revue est égale à la lettre recherchée
            if(leMot[i] == lettreSaisie){
                // On affiche la lettre dans les bonnes cases
                // Tous les selecteurs case-lettre se trouvent dans un tableau dont on va chercher l'index i pour y mettre lettreSaisie
                case_lettre[i].innerHTML = lettreSaisie
                // On verifie si on a gagné
                // déclaration d'une variable pour sauvegarder le nombre de ?
                let numInterrogation = 0 
                // On passe en revue le tableau des case_lettre avec la méthode foreach((element) => {...})
                case_lettre.forEach((element) => {
                    // Si la valeur de l'élement est égale à un ?
                    if(element.textContent == "?"){
                        // On incrémente notre variable de +1
                        numInterrogation++
                    }
                })
                // si numInterrogation est égale à 0, c'est qu'il n'y a pas de ? donc on a trouvé le mot
                if(numInterrogation == 0 ){
                    // Fenètre d'alerte
                    alert("Bravo!!! :) \n Vous avez gagnez !! \n Le mot est bien " + leMot +"\n Cliquez sur OK pour rejouer.")
                    // On refresh la page pour rejouer
                    document.location.reload()
                }
                // On place rien dans le champs input
                lettre.value =""
            }
        }
    }

}

// Execution de la fonction motAuHasard()
motAuHasard()
// Execution de la fonction interface()
interface()