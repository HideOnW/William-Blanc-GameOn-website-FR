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
const closeBtn = document.querySelector(".close");
const validForm = document.getElementById('valid-form');

// Formulaire Const
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const emailForm = document.getElementById('email');
const userInputAge = document.getElementById('birthdate');
const nbrTr = document.getElementById('quantity');


// const inputLoc = document.getElementById('location1')
// let locForm = document.getElementById('locationForm');
// let checkBoxes = locForm.querySelectorAll('input[type="checkbox"]');



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


  // Vérif First and Last 
  const formDataFirst = firstName.closest(".formData");
  const errorFieldFirst = formDataFirst.querySelector (".submit-error");
  const formDataLast = lastName.closest(".formData");
  const errorFieldLast = formDataLast.querySelector(".submit-error");

  let checkFirst = false
  let checkLast = false


  if (firstName.value.length < 2 ) {
    errorFieldFirst.style.display = "block";
    firstName.style.border = "2px solid #FF4E60";
    checkFirst = false;
  } else { 
    errorFieldFirst.style.display = "none";
    firstName.style.border = "none";
    checkFirst = true;
  }

  if (lastName.value.length < 2 ) {
    errorFieldLast.style.display = "block";    
    lastName.style.border = "2px solid #FF4E60";
    checkLast = false;
  } else { 
    errorFieldLast.style.display = "none";
    lastName.style.border = "none";
    checkLast = true;
  }



  // Vérif Mail

  let checkMail = false

  const formDataEmail = emailForm.closest(".formData");
  const errorFielEmail = formDataEmail.querySelector(".submit-error");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailForm.value.match(mailformat)){
    errorFielEmail.style.display = "none";
    emailForm.style.border = "none";
    checkMail = true;
  } else {
    errorFielEmail.style.display = "block";
    emailForm.style.border = "2px solid #FF4E60";
    checkMail = false;
  }


   // Const Verif Age

   let checkAge = false

   var userinput = userInputAge.value;
   var annivDay = new Date(userinput);
   var monthDiff = Date.now() - annivDay.getTime();
   var ageUserSecond = new Date(monthDiff);
   var ageUserYear = ageUserSecond.getFullYear();
   var ageUser = Math.abs(ageUserYear - 1970);
   const formDataAge = userInputAge.closest(".formData");
   const errorFieldAge = formDataAge.querySelector(".submit-error");

  if (ageUser < 18 || isNaN(ageUser)){
    errorFieldAge.style.display = "block";
    userInputAge.style.border = "2px solid #FF4E60";
    checkAge = false;
  } else {
    errorFieldAge.style.display = "none";
    userInputAge.style.border = "none";
    checkAge = true;
  }

  
  // Vérif Number 

  let checkTr = false

  var nbr = nbrTr.value;
  var regexnbr =/[0-9]{1,2}/;
  const formDataNbr = nbrTr.closest(".formData");
  const errorFieldNbr = formDataNbr.querySelector(".submit-error");
  

  if(nbr.match(regexnbr)){
    errorFieldNbr.style.display = "none";
    nbrTr.style.border = "none";
    checkTr = true;
  } else {
    errorFieldNbr.style.display = "block";
    nbrTr.style.border = "2px solid #FF4E60";
    checkTr = false;
  };

  // Vérif Location
  


  const inputLoc = document.getElementsByName("location");
  let isChecked = true;
  let checkLoc = false
  inputLoc.forEach((location) => { if(location.checked) {isChecked = false}});

  const formDataLoc = document.getElementById('locForm');
  const formDataLocError = formDataLoc.querySelector(".submit-error");
  if (isChecked){
  formDataLocError.style.display= "block";
  checkLoc = false;
  } else {
  formDataLocError.style.display= "none"
  checkLoc = true;
  }


  // Vérif Condition

  let checkCond = false
  document.getElementById('checkbox1');


  // Confirm Form

  if (checkFirst && checkLast && checkMail && checkAge && checkTr && checkLoc ){
    document.querySelector(".insVal").style.visibility = "visible"   
    document.querySelector(".modal-body").style.visibility = "hidden" 
    document.querySelector(".modal-body").style.opacity = "0"
  }
  

}

  
