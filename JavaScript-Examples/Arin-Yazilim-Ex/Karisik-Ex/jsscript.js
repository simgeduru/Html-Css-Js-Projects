/* let element = document.getElementById("myId");

 textContent ile gerçekten içindeki text değişiyor. 
element.textContent = "deneme 1";

console.log(element); 

 innerHtml ile atama yaptığımızda tag'in içerisine yazdığımız tag de ekleniyor. 

element.innerHTML = "<p>paragraf etiketi koyuldu</p>";

 console.log(element); 
let elementQuery = document.querySelector(".jumbotron>h1");

console.log(elementQuery);
 */

let button = document.getElementById("beforeButton");

button.addEventListener("click", pEkleme);

function pEkleme() {
  button.innerHTML = " <p>paragraf eklendi<p/>";
}

console.log(button);
