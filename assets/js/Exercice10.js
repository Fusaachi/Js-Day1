let display = document.getElementById("display")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let divi = document.getElementById("divi")
let multi = document.getElementById("multi")
let moins = document.getElementById("moins")
let plus = document.getElementById("plus")
let coma = document.getElementById("coma")
let result = document.getElementById("result")
let del =document.getElementById("del")
let counter = 0
let numbers = []
  
  divi.addEventListener("click", () => {
    pushNumber(counter)
    counter += "/"
    numbers.push("/")
    refreshDisplay(counter)
    counter = 0
    console.log(numbers)
  })
  
  del.addEventListener("click",()=>{
  numbers = []
  counter = 0
  refreshDisplay(counter)
})

  multi.addEventListener("click", () => {
   pushNumber(counter)
   counter += "*"
   numbers.push("*")
   refreshDisplay(counter)
   counter = 0
   console.log(numbers)
  })
  
  moins.addEventListener("click", () => {
   pushNumber(counter)
   counter += "-"
   numbers.push("-")
   refreshDisplay(counter)
   counter = 0
   console.log(numbers)
  })
  
  plus.addEventListener("click", () => {
   pushNumber(counter)
   counter += "+"
   numbers.push("+")
   refreshDisplay(counter)
   counter = 0
   console.log(numbers)
  })
  
  one.addEventListener("click", () => {
   counter === 0 ? counter = 1 : counter += "1"
   refreshDisplay(counter)
  })
  
  two.addEventListener("click", () => {
   counter === 0 ? counter = 2 : counter += "2"
   refreshDisplay(counter)
  })
  
  three.addEventListener("click", () => {
   counter === 0 ? counter = 3 : counter += "3"
   refreshDisplay(counter)
  })
  
  four.addEventListener("click", () => {
   counter === 0 ? counter = 4 : counter += "4"
   refreshDisplay(counter)
  })
  
  five.addEventListener("click", () => {
   counter === 0 ? counter = 5 : counter += "5"
   refreshDisplay(counter)
  })
  
  six.addEventListener("click", () => {
   counter === 0 ? counter = 6 : counter += "6"
   refreshDisplay(counter)
  })
  
  seven.addEventListener("click", () => {
    counter === 0 ? counter = 7 : counter += "7"
    refreshDisplay(counter)
   })
  
   eight.addEventListener("click", () => {
    counter === 0 ? counter = 8 : counter += "8"
    refreshDisplay(counter)
   })
  
   nine.addEventListener("click", () => {
    counter === 0 ? counter = 9 : counter += "9"
    refreshDisplay(counter)
   })
  
   zero.addEventListener("click", () => {
    counter += "0"
    refreshDisplay(counter)
   })
  
   coma.addEventListener("click", () => {
    counter += "."
    refreshDisplay(counter)
   })
  
   result.addEventListener("click", () => {
    pushNumber(counter)
    counter = eval(numbers.join(""))
    refreshDisplay(counter)
    numbers = []
   })
  
  function pushNumber(n) {
   numbers.push(n)
  }
  
  function refreshDisplay(a) {
    a >= 9999999 ? display.style.fontSize = "20px" : display.style.fontSize = "25px"
    display.innerHTML = a
  }