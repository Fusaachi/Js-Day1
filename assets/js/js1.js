// Les commentaires sous JavaScript

        //commentaire sur une ligne

        /* commentaires
                 sur
                    plusieurs 
                            lignes */

// 1- Langage Javascript
/*Javascript(js) : est un langage de programmation qui ajoute de l'intéractivité à votre site web 
(par exemple : jeux, réponses quand on clique sur un bouton ou des données entrés dans des formulaires,
composition dynamique, animations).
Quand il est appliqué à un document HTML, peut fournir une intéractivité dynamique.
Il a été inventé en mai 1996 par Brendan Eich, co-fondateur du projet Mozilla, de la Mozilla Fundation
et la Mozilla Corporation. */

/* C'est un langage algorythmique de type script qui dépend de la norme ECMAScript.
ECMAScript (European Computer Manufacturers Association Script): est un ensemble de normes concernant 
les langage de programmation de type script(langage non-compilé ou langage pointé) et standardisé par 
ECMA Internationnal.
Les spécifications JS sont rédigées dans le document standart ECMA-262.
ECMAScript Edition 6(ES6) Normé ES2015 et publié en juin 2015.
Elle prend en charge toutes les versions récentes de navigateur.
ES7
ES8...
Version actuelle ES12 */

//2- Comment utilisé JS ?
https://developer.mozilla.org/fr/docs/Web/JavaScript
/* JS étant un langage de script, il peut fonctionner directement sur la page html entre des balises <script>
mais ce n'est pas une bonne pratique. 
Le mieux c'est de créer un fichier avec l'extension .js dans le dossier et faire pointer avec une balise script 
comme ceci : <script src="assets/js/...js"></script> votre propre script.
Ce script doit être placé juste au dessus de la balise fermante </body> et en dessous des scripts
des divers API (Application Programming Interface).*/

// 2-1 Visualiser dans la console du navigateur : commande console.log()
/* la commande console .log(...) permet de visualiser les informations de ce qu'il y a entre les (...)
dans l'inspecteur -> onglet console du navigateur.
Cette commande est très pratique pour debugger son code ou pour voir ce qu'il se passe avec une partie de notre
script (une variable, une propriété, un objet)*/

//2-2 La propriété location : est une propriété native js avec divers informations sur l'url 
console.log(location) // voir le resultat dans la console
/* Pour3. information on peut ou pas utiliser un ; à la fin de la ligne. */

//2-3 La propriété document : le DOM (Document Objet Model)
/* est votre page HTML*/
console.log(document) // voir le resultat dans la console

/* par exemple quand on veut faire un refresh de notre page en cours*/
//document.location.reload() // voir le resultat dans la console

//3- Sélectionner des objets dans document 
//3-1 Méthode native js getElementById("...") : par le sélecteur id="..." dans l'HTML
document.getElementById("id1")
/* créer une balise <div id="id1"></div> dans l'HTML*/

//3-2 Méthode native getElementbyClassname("...") : par le sélecteur class="..." dans l'HTML
document.getElementsByClassName("class1")
/* créer une balise <div class="class1"></div>*/

//3-3 Méthode active js querySelector("...") : par une balise sélecteur personnelle
document.querySelector("maBalise")
/* créer une balise <maBalise></maBalise>*/

//3-4 Méthode native js querySelector("#...") : par le sélecteur id="...", attention au #
document.querySelector("#id2")
/* créer une balise <div id="id2"></div>*/

//3-5 Méthode native js querySelector(".exemple") : par le sélecteur class=".exemple", attention au .
document.querySelector(".class2")
/* créer une balise <div class="class2"></div>*/

//4- Récupérer des objets dans document
//4-1 La propriété textContent : récupérer une chaîne de caractères
/*Rajouter du texte sur la div id="id2" -> Attention au #*/
document.querySelector("#id2").textContent
console.log(document.querySelector("#id2").textContent)
//Rajouter du texte sur la div <div class="class2"></div>
document.querySelector(".class2").textContent
console.log(document.querySelector(".class2").textContent)

//4-2 La propriété value : récupérer une valeur dans une balise <input>
document.querySelector("input").value
console.log(document.querySelector("input").value)

//5 Ecrire dans document
//5-1 Propriété innerHTML : écrire "BONJOUR JS" sur id="id3"
document.querySelector("#id3").innerHTML = "BONJOUR JS"

//5-2 Propriété style : permet d'utiliser du css
document.querySelector("#id3").style.backgroundColor ="red"

//6- Les variables : var let const
/* Les différentes déclarations de variables sont des réservations d'un espace mémoire RAM
Mémoire vive (Random Access Memory)
La déclaration d'une variable en dehors des fonctions à une portée globale
La déclaration d'une variable dans une fonction à une portée limitée entre {...}.
Avant l'ES6 il n'existait que l'intruction var pour déclarer une variable mais cela peut poser un problème de 
portabilité. Depuis il ont crées let et const.*/

//6-1 Déclaration d'une chaîne de caractère (type String) entre " " ou ' ' 
let cdc = "Je suis en formation"
console.log(cdc)
let cdc1 = 'Nous sommes le 28 Novembre 2022'
console.log(cdc1)
// 6-2 Déclaration d'un nombre entier (type Integer)
let nombre1 = 25
console.log(nombre1)

// 6-3 Déclaration d'un nombre décimal ou un réel (type Float)
let nombflo = 50.2 // attention c'est un point pas une virgule
console.log(nombflo)

// 6-4 Déclaration d'un nombre binaire 0 ou 1, où 0 vaut false et 1 vaut true (type Boolean)
let bool1 = false
let bool2 = true
console.log(bool1)
console.log(bool2)

// 6-5 Rédéclaration d'une variable existante let

cdc = 16
console.log(cdc)

// 6-6 Déclaration d'une constante avec const.
// Particularité d'une constante c'est qu'elle ne peut pas être redéclarée 
const maConstante = "Ceci est ma constante."
console.log(maConstante)
// Redéclaration d'une constante impossible
// maConstante = 15 Aïe !! Message d'erreur, le script s'arrête.

// 6-7 Déclaration d'un tableau (type Array)
// Un tableau vide
let tabVide=[]
console.log(tabVide)
// Un tableau rempli
let tabCom =["Pauline", "Giroux", true, 26]
console.log(tabCom)
//Pour aller chercher un élément, on le fait par son Index :
console.log(tabCom[1])

// 6-8 Déclaration d'un tableau d'objet
// En JS le tableau d'objet se nomme JSON pour JavaScript Object Notation 

let objets1 = { "prenom":"Pauline", 
                "nom" : "Giroux",
                 }
console.log(objets1["nom"])

// 7- Les opérateur + - / * = != < > <= >= ++ --

let a = 2
let b = 5
let c = a + b 
let d = a * b

console.log(d)

c++ // Correspond à c = c + 1
console.log(c)

c-- // Correspond à c = c -1
console.log(c)

// 8-Les boucles
// Les boucles sont utilisées pour répéter des opérations de manière automatique

// 8-1 La boucle For 
// for(let i avec la valeur de départ; la limite; incrément) {l'opération a effectuer }
let i 
for(i = 0; i < 10; i++){console.log(i)}

// 8-2 La boucle do... While...
// C'est une boucle assez dangereuse car on peut faire une boucle infinie 

let j = 0;

do {
  j = j + 1;
console.log(j)
} 
while (j < 5);

// 9- La concaténation
let z = 6
console.log("J'ai " + z +" pièces")

// 10- Les conditions if, if else, if elseif else, switch case break.
// 10-1 if 
if(z<10){console.log("La variable z est bien inférieur à 10")}

// 10-2 if else
z=15
if (z<10){console.log("La variable z est bien inférieur à 10")}
else {console.log("La variable z est supérieure à 10")}

// 10-3 if else if else
z = 3
if(z>12){console.log("vous avez gagné le maximum de point!!!")}
else if(z==6){console.log("Vous avez la moyenne")}
else if(z>6){console.log("Vous avez plus que la moyenne")}
else {console.log("Vous n'avez pas assez de point")}

// 10-4 La condition Switch case break
const expr = "Papayas"
switch (expr) {
        case 'Oranges':
                console.log('Oranges are $0.59 a pound.');
                break;
        case 'Mangoes':
        case 'Papayas':
                console.log('Mangoes and papayas are $2.79 a pound.');
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
        case 'Banana':
                // La méthode alert (...) affiche une fenêtre d'alerte 
                alert('Banana are $2.50 a pound')
                break

        default:
          console.log(`Sorry, we are out of ${expr}.`);}

// 11- Les fonctions
// Les fonctions servent à déclarer du code qui se répète dans notre programme.
// Une fonction se déclare avec l'instruction function suivie du nom de la fonction (Toujours trouver un nom cohérent par rapport à la fonction)

// 11-1 Déclaration d'une fonction sans paramètres (ou sans argument)
function disAuRevoir(){alert("Au Revoir!!!")}

disAuRevoir()

// 11-2 Déclaration d'une fonction avec paramètre
function disBonjourAvecLeNom(nom){console.log("Bonjour " + nom )}

disBonjourAvecLeNom("Pauline")

function AvecPlusieursParamètres(a,b){
        let selection = document.querySelector("#resultat")
        selection.innerHTML = "Le resultat est de "+ (a + b)
//console.log(a+b)
}

 AvecPlusieursParamètres(50,60)
 // 12 - Ecouteurs d'événement
 // On utilise la méthode addEventListener(...) native JS pour ajouter un écouteur d'évènement
 let selectButton = document.querySelector("#bt")
 // Déclaration d'un écouteur d'évènement associé au sélecteur qui va écouter le click du bouton et déclancher la fonction clickButtonHandler()
 selectButton.addEventListener("click",clickButtonHandler)
 function clickButtonHandler(){alert("Bravo!! Vous avez validé")}

 /* aide mémoire :
 || veut dire : ou
 && veut dire : et 
 ! veut dire : pas ou not
 == permet de vérifier une condition
 ===  : c'est égal en type et en valeur
 != : différent

*/
