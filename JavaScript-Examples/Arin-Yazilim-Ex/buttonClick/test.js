let btn = document.getElementById("btn");
let value;

const IncreaseF = () => {
  value = parseInt(btn.textContent);
  value++;
  btn.textContent = value;
};
btn.addEventListener("click", IncreaseF);
