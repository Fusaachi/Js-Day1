let keyClear = document.getElementById("keyClear")
let keyPlusMinus = document.getElementById("keyPlusMinus")
let keyModulo = document.getElementById("keyModulo")
let keyDivide = document.getElementById("keyDivide")
let keySeven = document.getElementById("keySeven")
let keyEight = document.getElementById("keyEight")
let keyNine = document.getElementById("keyNine")
let keyMult = document.getElementById("keyMult")
let keyFour = document.getElementById("keyFour")
let keyFive = document.getElementById("keyFive")
let keySix = document.getElementById("keySix")
let keyMinus = document.getElementById("keyMinus")
let keyOne = document.getElementById("keyOne")
let keyTwo = document.getElementById("keyTwo")
let keyThree = document.getElementById("keyThree")
let keyPlus = document.getElementById("keyPlus")
let keyZero = document.getElementById("keyZero")
let keyComa = document.getElementById("keyComa")
let keyResult = document.getElementById("keyResult")
let display = document.getElementById("display")
let counter = 0
let numbers = []


keyClear.addEventListener("click", () => {
 numbers = []
 counter = 0
 refreshDisplay(counter)
})

keyPlusMinus.addEventListener("click", () => {
 counter = -counter
 refreshDisplay(counter)
})

keyModulo.addEventListener("click", () => {
  counter /= 100
  refreshDisplay(counter)
})

keyDivide.addEventListener("click", () => {
  pushNumber(counter)
  counter += "/"
  numbers.push("/")
  refreshDisplay(counter)
  counter = 0
  console.log(numbers)
})

keyMult.addEventListener("click", () => {
 pushNumber(counter)
 counter += "*"
 numbers.push("*")
 refreshDisplay(counter)
 counter = 0
 console.log(numbers)
})

keyMinus.addEventListener("click", () => {
 pushNumber(counter)
 counter += "-"
 numbers.push("-")
 refreshDisplay(counter)
 counter = 0
 console.log(numbers)
})

keyPlus.addEventListener("click", () => {
 pushNumber(counter)
 counter += "+"
 numbers.push("+")
 refreshDisplay(counter)
 counter = 0
 console.log(numbers)
})

keyOne.addEventListener("click", () => {
 counter === 0 ? counter = 1 : counter += "1"
 refreshDisplay(counter)
})

keyTwo.addEventListener("click", () => {
 counter === 0 ? counter = 2 : counter += "2"
 refreshDisplay(counter)
})

keyThree.addEventListener("click", () => {
 counter === 0 ? counter = 3 : counter += "3"
 refreshDisplay(counter)
})

keyFour.addEventListener("click", () => {
 counter === 0 ? counter = 4 : counter += "4"
 refreshDisplay(counter)
})

keyFive.addEventListener("click", () => {
 counter === 0 ? counter = 5 : counter += "5"
 refreshDisplay(counter)
})

keySix.addEventListener("click", () => {
 counter === 0 ? counter = 6 : counter += "6"
 refreshDisplay(counter)
})

keySeven.addEventListener("click", () => {
  counter === 0 ? counter = 7 : counter += "7"
  refreshDisplay(counter)
 })

 keyEight.addEventListener("click", () => {
  counter === 0 ? counter = 8 : counter += "8"
  refreshDisplay(counter)
 })

 keyNine.addEventListener("click", () => {
  counter === 0 ? counter = 9 : counter += "9"
  refreshDisplay(counter)
 })

 keyZero.addEventListener("click", () => {
  counter += "0"
  refreshDisplay(counter)
 })

 keyComa.addEventListener("click", () => {
  counter += ","
  refreshDisplay(counter)
 })

 keyResult.addEventListener("click", () => {
  pushNumber(counter)
  counter = eval(numbers.join(""))
  refreshDisplay(counter)
  numbers = []
 })

function pushNumber(n) {
 numbers.push(parseInt(n))
}

function refreshDisplay(a) {
  a >= 9999999 ? display.style.fontSize = "75px" : display.style.fontSize = "100px"
  display.innerHTML = a
}
