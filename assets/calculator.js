const price = document.querySelector("#price");
const tipAmount = document.querySelector("#tipAmount");
const peopleNumber = document.querySelector("#peopleNumber");
const resetBtn = document.querySelector("#resetBtn");
const hesaplaBtn = document.querySelector("#hesaplaBtn");
hesaplaBtn.addEventListener("click", calculate);
resetBtn.addEventListener("click", handleReset);
const inputContainer = document.querySelectorAll(".input-container");

function calculate() {
  let toplamHesap = Number(price.value);
  console.log(toplamHesap);
  let bahsisYuzdesi = tipAmount.value * 0.01;
  console.log(bahsisYuzdesi);
  let kisiSayisi = Number(peopleNumber.value);
  console.log(kisiSayisi);
  let bahsisTutari = toplamHesap * bahsisYuzdesi;
  console.log(bahsisTutari);
  let kisiBasiBahsis = bahsisTutari / kisiSayisi;
  console.log(kisiBasiBahsis);
  let kisiBasiToplam = (toplamHesap + bahsisTutari) / kisiSayisi;
  console.log(kisiBasiToplam);
  tipPerson.innerText = "$" + parseFloat(kisiBasiBahsis);
  totalPerson.innerText = "$" + parseFloat(kisiBasiToplam);
  if (price.value == "" || peopleNumber.value == "") {
    console.log("boştur loo");
    tipPerson.innerText = "$0.00";
    totalPerson.innerText = "$0.00";
    inputContainer.forEach((container) => {
      container.style.border = "2px solid rgba(225, 112, 82, 1)";
    });
  }
}

function handleReset() {
  price.value = "";
  tipAmount.value = "";
  peopleNumber.value = "";
  tipPerson.innerText = "$0.00";
  totalPerson.innerText = "$0.00";
  inputContainer.forEach((container) => {
    container.style.border = "none";
  });
}
