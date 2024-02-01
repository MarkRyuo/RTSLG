let sideA ;
let sideB ;


sideA = Math.round(Math.random() * 100) ;
document.getElementById("textA").innerHTML = sideA ;
document.getElementById("sideA").value = sideA ;

sideB = Math.round(Math.random() * 100 ) ;
document.getElementById("textB").innerHTML = sideB ;
document.getElementById("sideB").value = sideB ;


answer = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)) ;

document.getElementById("answer").innerHTML = answer ;

console.log("The given side a is " + sideA) ;
console.log("The given side b is " + sideB) ;
console.log("The c is " + answer) ;

// console.log(window.innerHeight) ;
// console.log(window.innerWidth) ;


// Todo create a converter round up and round down;

document.getElementById("roundUp").onclick = function () {

  answer = Math.ceil(answer) ;
  document.getElementById("answerUp").innerHTML = "Round Up side c: " + answer ;
}

document.getElementById("rounddown").onclick = function () {

  answer = Math.floor(answer) ;
  document.getElementById("answerdown").innerHTML = "Round Down side c: " +answer ;
}

