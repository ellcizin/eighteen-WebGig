$(document).ready(function(){

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Freelancer","Web Designer", "Font End Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

});
// Form Data Validation


function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }


}
function seterror(id, error){
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
  var returnval = true;
  clearErrors();

  // Enter your full Name!

  var name = document.forms['myform']["name"].value;
  if (name.length == 0){
    seterror("namei", "*Enter your Name!");
    returnval = false;
  }

  else if (name.length<3){
      seterror("namei", "*Your Name is too short!");
      returnval = false;
  }


  // Enter your Email!

  var email = document.forms['myform']["email"].value;
  if (email.length == 0){
    seterror("emaili", "*Enter your Email!");
    returnval = false;
  }
  else if (email.length<13){
    seterror("emaili", "*Your Email is too short!");
    returnval = false;
  }
  else if (email.length>25){
    seterror("emaili", "*Your Email is too long!");
    returnval = false;
  }
  else if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
    seterror("emaili", "*Invalid (.) position!");
    returnval = false;
  }
  

  // Enter your Phone number!

  var phone = document.forms['myform']["phone"].value;

  if (phone.length == 0){
    seterror("phonei", "*Enter your Phone number!");
    returnval = false;
  }
  else if (isNaN(phone)){
      seterror("phonei", "*Phone number must be digits!");
      returnval = false;
  }
  else if (phone.length != 10){
      seterror("phonei", "*Enter your 10 digits Phone number!");
      returnval = false;
  }
//  else if ((phone.charAt(0)!=3) && (phone.charAt(0)!=4) && (phone.charAt(0)!=5)){
//     seterror("phonei", "*Phone number must be start 3 or 4 or 5!");
//     returnval = false;
//   }
 else if ((phone.charAt(0)==0) || (phone.charAt(0)==1)){
    seterror("phonei", "*Phone number can't start 0 & 1!");
    returnval = false;
  }

  // Enter your Message here!

  var message = document.forms['myform']["msg"].value;
  if (message.length == 0){
    seterror("msgi", "*Enter your Message here!");
    returnval = false;
  }
  else if (message.length<15){
      seterror("msgi", "*Your Message is too short!");
      returnval = false;
  }

  return returnval;
}
