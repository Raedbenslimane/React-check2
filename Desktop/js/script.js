function prixadd() {
  let prix = document.getElementsByClassName("Prix");
  let sum = 0;
  for (let i = 0; i < prix.length; i++) {
    sum += parseInt(prix[i].innerHTML);
  }
  return sum;
}
var plusbtn = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plusbtn.length; i++) {
  plusbtn[i].addEventListener("click", function (e) {
    let qte = e.target.nextElementSibling;
    qte.innerHTML = +qte.innerHTML + 1;
    let prixU = e.target.nextElementSibling.nextElementSibling;
    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
  });
}
var minusbtn = document.getElementsByClassName("sustraction-btn");
for (let i = 0; i < minusbtn.length; i++) {
  minusbtn[i].addEventListener("click", function (e) {
    let qte = e.target.previousElementSibling.previousElementSibling;
    if (+qte.innerHTML > 0) {
      qte.innerHTML = +qte.innerHTML - 1;
    }
    let prixU = e.target.previousElementSibling;
    let prixupdated = e.target.nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
  });
}

var deletbtn = document.getElementsByClassName("delete-btn");
for (let i = 0; i < deletbtn.length; i++) {
  deletbtn[i].addEventListener("click", function () {
    deletbtn[i].parentElement.remove();
  });
}
var minusbtn = document.getElementsByClassName("sustractionn-btn");
for (let i = 0; i < minusbtn.length; i++) {
  minusbtn[i].addEventListener("click", function (e) {
    let qte = e.target.nextElementSibling;
    if (+qte.innerHTML > 0) {
      qte.innerHTML = +qte.innerHTML - 1;
    }
    let prixU = e.target.nextElementSibling.nextElementSibling;
    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
  });
}
var plusbtn = document.getElementsByClassName("pluus-btn");
for (let i = 0; i < plusbtn.length; i++) {
  plusbtn[i].addEventListener("click", function (e) {
    let qte = e.target.nextElementSibling.nextElementSibling;
    qte.innerHTML = +qte.innerHTML + 1;
    let prixU =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
  });
}
var deletbtnn = document.getElementsByClassName("deletee-btn");
for (let i = 0; i < deletbtnn.length; i++) {
  deletbtnn[i].addEventListener("click", function () {
    deletbtnn[i].parentElement.remove();
  });
}
var minusbtn = document.getElementsByClassName("sustractionnn-btn");
for (let i = 0; i < minusbtn.length; i++) {
  minusbtn[i].addEventListener("click", function (e) {
    let qte = e.target.nextElementSibling;
    if (+qte.innerHTML > 0) {
      qte.innerHTML = +qte.innerHTML - 1;
    }
    let prixU = e.target.nextElementSibling.nextElementSibling;
    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
  });
}
var plusbtn = document.getElementsByClassName("pluuus-btn");
for (let i = 0; i < plusbtn.length; i++) {
  plusbtn[i].addEventListener("click", function (e) {
    let qte = e.target.nextElementSibling.nextElementSibling;
    qte.innerHTML = +qte.innerHTML + 1;
    let prixU =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
  });
}
var deletbtnnn = document.getElementsByClassName("deleteee-btn");
for (let i = 0; i < deletbtn.length; i++) {
  deletbtnnn[i].addEventListener("click", function () {
    deletbtnnn[i].parentElement.remove();
  });
}
