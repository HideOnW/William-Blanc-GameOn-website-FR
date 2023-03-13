function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const validForm = document.getElementById('valid-form');
const msgError = document.querySelectorAll(".submit-error")
const checkFirst = document.get

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", launchclose)
validForm.addEventListener("click", checkForm)


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.classList.add("color-blue");
}

function launchclose(){
  modalbg.style.display = "none";
}

function checkForm(e) {
  e.preventDefault();
  if (document.getElementById('first').value.length < 2 ) {
    msgError.style.display= "block";
    alert ("Formulaire refusé");
  } else {
    alert ("Formulaire accepté")
  }

}
  // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
// else if (document.getElementById('last').value.lenght <2){
  //   msgError.style.display= "block";
  //   alert ("Formulaire refusé");
  // }
  

  // if (document.getElementById('last').value.length < 2) {
  // console.log('Veuillez rentrer un nom avec au moins 2 caractère')
  // } else if (document.getElementById('email').value.match(mailformat)= false){
  //   console.log('Veuillez rentrer un email valide')
  // } else {}





