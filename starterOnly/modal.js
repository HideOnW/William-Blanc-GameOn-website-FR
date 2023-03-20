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
// const formData = document.querySelectorAll(".formData");
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


  if (firstName.value.length < 2 ) {
    errorFieldFirst.style.display = "block";
  } else { 
    errorFieldFirst.style.display = "none";
  }

  if (lastName.value.length < 2 ) {
    errorFieldLast.style.display = "block";
  } else { 
    errorFieldLast.style.display = "none";
  }



  // Vérif Mail

  const formDataEmail = emailForm.closest(".formData");
  const errorFielEmail = formDataEmail.querySelector(".submit-error");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailForm.value.match(mailformat)){
    errorFielEmail.style.display = "none";
  } else {
    errorFielEmail.style.display = "block";
  }


   // Const Verif Age

   var userinput = userInputAge.value;
   var annivDay = new Date(userinput);
   var monthDiff = Date.now() - annivDay.getTime();
   var ageUserSecond = new Date(monthDiff);
   var ageUserYear = ageUserSecond.getFullYear();
   var ageUser = Math.abs(ageUserYear - 1970);
   const formDataAge = userInputAge.closest(".formData");
   const errorFieldAge = formDataAge.querySelector(".submit-error");

  if (ageUser < 18){
    errorFieldAge.style.display = "block";
  } else {
    errorFieldAge.style.display = "none";
  }

  
  // Vérif Number 

  var nbr = nbrTr.value;
  var regexnbr =/[0-9]{1,2}/;
  const formDataNbr = nbrTr.closest(".formData");
  const errorFieldNbr = formDataNbr.querySelector(".submit-error");
  

  if(nbr.match(regexnbr)){
    errorFieldNbr.style.display = "none";
  } else {
    errorFieldNbr.style.display = "block"
  };

  // Vérif Location
  
  var formDataLoc = new FormData(document.getElementById('locationForm'));
  const inputLoc = document.getElementById('location1')
  const formDataLocError = inputLoc.closest(".formData")
  const errorFieldLoc = formDataLocError.querySelector(".submit-error")

  if(!formDataLoc.has("location[]")){
    errorFieldLoc.style.display = "none"
  } else {
    errorFieldLoc.style.display ="block"
  }


}


  


  // var checkBoxes = document.getElementsByName("location[]");
  // var checkLoc = 0;

  // for (var i = 0; i < checkBoxes.length; i++) {
  //   if (checkBoxes[i].checked) {
  //     console.log(checkBoxes)
  //     checkLoc++;
  //   }
  // }

  // if (checkBoxes == 1) {
  //   errorFieldLoc.style.display = "none"
  // } else {
  //   errorFieldLoc.style.display = "block"
  // }



//   let error = true;


//   checkBoxes.forEach((check_box) => {
//     if (check_box.checked){
//       error = true;
//     } else {
//       error = false;
//       console.log(error)
//     }
//     });
//     if(error){
//       errorFieldLoc.style.display = "none";
//     } else {
//       errorFieldLoc.style.display = "block";
//     }

// }





  // var form_data = new CheckFormData(document.querySelector("form"));
  // if(!form_data.has("location")){
  //   errorFieldLoc1.style.display = "none"
  // } else {errorFieldLoc1.style.display = "block"}




  
  
// else if (document.getElementById('last').value.lenght <2){
  //   msgError.style.display= "block";
  //   alert ("Formulaire refusé");
  // }
  

  // if (document.getElementById('last').value.length < 2) {
  // console.log('Veuillez rentrer un nom avec au moins 2 caractère')
  // } else if (document.getElementById('email').value.match(mailformat)= false){
  //   console.log('Veuillez rentrer un email valide')
  // } else {}
