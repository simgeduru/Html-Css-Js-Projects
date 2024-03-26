/* Step 1: sehir bilgisini al
Url olustur
key olustur. */

const url = "https://api.openweathermap.org/data/2.5/";
const key = "ba58f01934224992f2c67e50bb6d0320";

const Query = (event) => {
  if (event.keyCode == "13") {
    SonucuGetir(input.value);
  }
};

const SonucuGetir = (sehirAdi) => {
  fetch(`${url}weather?q=${sehirAdi}&appid=${key}&units=metric&lang=tr`)
    .then((response) => response.json())
    .then((sonuclar) => displayResult(sonuclar));
};

const displayResult = (result) => {
  console.log(result);
  let sehir = document.querySelector("body > div > div.sehir");
  sehir.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector("body > div > div.sicaklik");
  temp.innerText = `${result.main.temp}°C`;

  let desc = document.querySelector("body > div > div.desc");
  desc.innerText = result.weather[0].description;
};

const input = document.querySelector("#input");
input.addEventListener("keypress", Query);
