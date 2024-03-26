/* Declerations */
// let input = document.querySelector("#task").value;
/* leti scope dısında tanımladığın zaman global olarak kullanıldığında
sorun çıkarıyor */
let ekle = document.querySelector("#liveToastBtn");
let isInputNull;
let succes = document.querySelector("#liveToastS");
let succesBtn = document.querySelector(
  "#liveToastS > div:nth-child(1) > button"
);
let error = document.querySelector("#liveToastE");
let errorBtn = document.querySelector(
  "#liveToastE > div:nth-child(1) > button"
);

let ul = document.querySelector("#list");
/* Boş eleman alıp almadığının, space girdisi olup olmadığının kontrolü */

const InputControl = () => {
  let input = document.querySelector("#task").value;

  let space = input.trim();

  if (space.length === 0 || input == null) {
    isInputNull = true;
  } else {
    isInputNull = false;
  }
  Ekle(isInputNull);
};

const Ekle = (isInputNull) => {
  let input = document.querySelector("#task").value;

  if (isInputNull == true) {
    Visibility(error);
    errorBtn.addEventListener("click", CloseE);
  } else {
    let space = input.trim();
    /* AddNewLiTag(space); */

    AddNewLiTag(space);
    Visibility(succes);
    succesBtn.addEventListener("click", CloseS);
  }
  isInputNull = false;
};

const Visibility = (item) => {
  item.classList.remove("hide");
};
const CloseE = () => {
  error.classList.add("hide");
};
const CloseS = () => {
  succes.classList.add("hide");
};

ekle.addEventListener("click", InputControl);

const AddNewLiTag = (space) => {
  let element = document.createElement("li");
  let butn = document.createElement("button");
  butn.setAttribute("class", "liB");
  butn.textContent = "x";
  ul.appendChild(element);
  element.setAttribute("class", "hover");
  element.textContent = space;
  element.appendChild(butn);

  /* tik the items */
  const clickBtn = () => {
    element.setAttribute("class", "checked");
  };
  element.addEventListener("click", clickBtn);

  /* remove the items */
  const removeLi = () => {
    butn.parentElement.remove();
  };
  butn.addEventListener("click", removeLi);
};

let elements = document.getElementsByTagName("li");
const arr = Array.from(elements);

arr.forEach((item) => {
  const clickBtn = () => {
    item.setAttribute("class", "checked");
  };
  item.addEventListener("click", clickBtn);
});

/* remove the items */
let buttons = document.getElementsByClassName("liB");
const arrBtns = Array.from(buttons);

arrBtns.forEach((item) => {
  const removeLi = () => {
    item.parentElement.remove();
  };
  item.addEventListener("click", removeLi);
});
