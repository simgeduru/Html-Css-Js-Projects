/* window.name = "arin";
const person = {
  name: "elis",

  tellName: () => {
    console.log(this);
    console.log(this.name);

    setTimeout(() => {
      console.log(this);
      console.log(this.name);
    }, 2000);
  },
};
 */

/* const myObj ={
    year: "2020",
    showYear: function (){

    }
}

function Fun (){

}

const dec = function (){

} */

/* const books = [
  {
    name: "isim1",
  },
  {
    name: "isim2",
  },
];

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNew = (isim, callback) => {
  books.push(isim);
  callback();
  books.push(isim);
};

addNew({ name: "isim3" }, listBooks);
 */

//PROMİSE ORNEKLERİ :

//PROMİSE İLE PASSWORD KULLANICI ADI YÖNETME VE ARROW FUNCTİON KULLANIMI
//önce genel yapıyı oluştur daha sonra resolve ve reject durumunda ne döneceğini işle

//tanımlamalar
/* const btn = document.querySelector("#check");

const kAdi = document.querySelector("#kullanici").value;
const pswrd = document.querySelector("#pswrd").value;
const myDiv = document.querySelector("#sonuc");

const BilgileriAL = () => {
  const kAdi = document.querySelector("#kullanici").value;
  const pswrd = document.querySelector("#pswrd").value;

  const myPromise = new Promise((resolve, reject) => {
    if (kAdi != "" && pswrd != "") {
      resolve(kAdi, pswrd);
      console.log(resolve(), "resolve");
    } else {
      reject("hata mesajı");
    }
  });

  return myPromise;
};

BilgileriAL.then((value1, value2) => {
  console.log(value1, value2);
  myDiv.innerText = value1 + " " + value2;
}).catch((reason) => {
  console.alert(reason);
});
 */

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index);
  });
};

const addNew = (isim, callback) => {
  const myP = new Promise((resolve, reject) => {});
};
