/*let image = document.querySelector("img") 

image.onmouseover = () =>{ image.style.border = "solid 3px green"}
image.onmouseout = () => { image.style.border = ""}*/

let myImg= document.querySelector(".border-success")



myImg.onmouseover = (e) => {
   // myImg.style.width="50%"
    myImg.style.border=" solid 3px red"
}

myImg.onmouseout = (e) => {
    //myImg.style.width= ""
    myImg.style.border= ""

}
