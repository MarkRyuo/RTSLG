let sideA ;
let sideB ;


sideA = Math.ceil(Math.random() * 100) ;
document.getElementById("textA").innerHTML = sideA ;
document.getElementById("sideA").value = sideA ;

sideB = Math.ceil(Math.random() * 100) ;
document.getElementById("textB").innerHTML = sideB ;
document.getElementById("sideB").value = sideB ;


answer = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)) ;

document.getElementById("answer").innerHTML = answer ;

console.log(sideA) ;
console.log(sideB) ;
console.log("The c is " + answer) ;

// console.log(window.innerHeight) ;
// console.log(window.innerWidth) ;