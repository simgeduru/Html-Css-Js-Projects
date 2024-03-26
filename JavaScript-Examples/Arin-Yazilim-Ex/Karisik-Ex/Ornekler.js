/* Ornek 1 

let number1 = document.getElementById("numberOne");
let number2 = document.getElementById("numberTwo");
let buton = document.querySelector("button");
let paragraf = document.getElementById("sum");

buton.addEventListener("click", Topla);

function Topla() {
  let sum = parseInt(number1.value) + parseInt(number2.value);
  paragraf.textContent = sum;
}
 */

/* Ornek 2
Normmalde pargraflar gözükmeyecek başlıklara tıkladığımızda gözükecek

*/

let sectionP1 = document.getElementById("section1");
let sectionP2 = document.getElementById("section2");
let sectionP3 = document.getElementById("section3");
let h2Arrys = document.getElementsByTagName("h2");
console.log(h2Arrys);
console.log(sectionP1);
h2Arrys[0].addEventListener("click", function0);
h2Arrys[1].addEventListener("click", function1);
h2Arrys[2].addEventListener("click", function2);

function function0() {
  sectionP1.classList.toggle("goster");
}

function function1() {
  sectionP2.classList.toggle("goster");
}

function function2() {
  sectionP3.classList.toggle("goster");
}
