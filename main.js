let sideA ;
let sideB ;

// document.getElementById("btnside").onclick = function () {

//   sideA = document.getElementById("sideA").value ;
//   sideA = Number(sideA) ;

//   sideB = document.getElementById("sideB").value ;
//   sideB = Number(sideB) ;

// }


sideA = Math.ceil(Math.random() * 100) ;
document.getElementById("textA").innerHTML = sideA ;
document.getElementById("textA").value = sideA ;

sideB = Math.ceil(Math.random() * 100) ;
document.getElementById("textB").innerHTML = sideB

answer = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)) ;

document.getElementById("answer").innerHTML = answer ;