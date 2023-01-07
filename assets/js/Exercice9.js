let button =document.getElementById("button")

button.onclick =(e) =>{
e.preventDefault()
e.stopPropagation()
let tab =["CHOCOLAT", "PYRAMIDE", "AUTOMOBILE", "SYNONYME", "LION", "PERPENDUCULAIRE"]
let al = Math.floor(Math.random()*tab.length)
let rvalue = tab[al]
console.log(rvalue)
reponse.innerHTML = rvalue
}

