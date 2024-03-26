let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

const Arttır = () => {
  let counter = localStorage.getItem("counter");
  let h2 = document.getElementsByTagName("h2").item(0);
  counter = parseInt(h2.textContent) + 1;
  localStorage.setItem("counter", counter);

  /* veriyi yazma */
  console.log(counter);
  h2.textContent = localStorage.getItem("counter");
};
let h2 = document.getElementsByTagName("h2").item(0);

h2.textContent = localStorage.getItem("counter");

const Azalt = () => {
  let counter = localStorage.getItem("counter");
  console.log(counter);

  let h2 = document.getElementsByTagName("h2").item(0);
  counter = parseInt(h2.textContent) - 1;
  localStorage.setItem("counter", counter);
  /* veriyi yazma */
  console.log(counter);
  h2.textContent = localStorage.getItem("counter");
  console.log(h2.textContent);
};

/* const clickEvent = () => {
  console.log(btn1);
  console.log(btn2);
  console.log(this.id);
  if (this.id == "btn1") {
    h2.item(0).textContent = parseInt(h2.item(0).textContent) + 1;
  } else if (this.id == "btn2") {
    h2.item(0).textContent = parseInt(h2.item(0).textContent) - 1;
  }
}; */

btn1.addEventListener("click", Arttır);
btn2.addEventListener("click", Azalt);
