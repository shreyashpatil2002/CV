let mail = document.getElementById("email"),
  password = document.getElementById("password"),
  Username = document.getElementById("name"),
  cpassword = document.getElementById("password2"),
  eyes = document.querySelectorAll(".form form img");

let eye1 = 1,
  eye2 = 1;
eyes[0].addEventListener("click", () => {
  if (eye1 == 1) {
    eyes[0].setAttribute("src", "../../../Assets/svg/eye-slash-solid.svg");
    password.setAttribute("type", "text");
    eye1 = 0;
  } else {
    eyes[0].setAttribute("src", "../../../Assets/svg/eye-solid.svg");
    password.setAttribute("type", "password");
    eye1 = 1;
  }
});
eyes[1].addEventListener("click", () => {
  if (eye2 == 1) {
    eyes[1].setAttribute("src", "../../../Assets/svg/eye-slash-solid.svg");
    cpassword.setAttribute("type", "text");
    eye2 = 0;
  } else {
    eyes[1].setAttribute("src", "../../../Assets/svg/eye-solid.svg");
    cpassword.setAttribute("type", "password");
    eye2 = 1;
  }
});

mail.addEventListener("focusin", () => {
  mail.removeAttribute("placeholder");
});
mail.addEventListener("focusout", () => {
  mail.setAttribute("placeholder", "Enter Email Id");
});

password.addEventListener("focusin", () => {
  password.removeAttribute("placeholder");
  eyes[0].style.display = "block";
});
password.addEventListener("focusout", () => {
  password.setAttribute("placeholder", "Enter Password");
  if (password.value == "") {
    eyes[0].style.display = "none";
  }
});

Username.addEventListener("focusin", () => {
  Username.removeAttribute("placeholder");
});
Username.addEventListener("focusout", () => {
  Username.setAttribute("placeholder", "Enter Name");
});

cpassword.addEventListener("focusin", () => {
  cpassword.removeAttribute("placeholder");
  eyes[1].style.display = "block";
});
cpassword.addEventListener("focusout", () => {
  cpassword.setAttribute("placeholder", "Confirm Password");
  if (cpassword.value == "") {
    eyes[1].style.display = "none";
  }
});

let index = 0;
cpassword.addEventListener("keyup", (e) => {
  index = cpassword.value.length;
  let comparePass = password.value.slice(0, index);
  if (cpassword.value != comparePass) {
    cpassword.classList.add("wrongField");
    cpassword.classList.remove("rightField");
  } else {
    cpassword.classList.add("rightField");
    cpassword.classList.remove("wrongField");
  signUpDataFields[3].style = `border: none;`;
  }
});

let form = document.querySelector("form");
let signUpDataFields = document.querySelectorAll('.form input');
form.addEventListener("submit", () => {
  let signUpData = {
    "userName": signUpDataFields[0].value,
    "userEmail": signUpDataFields[1].value,
    "userPassword": signUpDataFields[2].value,
  }
  signUpDataString = JSON.stringify(signUpData);
  localStorage.setItem('SignUpData', signUpDataString);
});

if(localStorage.getItem('wrongMail') == 'true') {
  let err = document.getElementById('emailError');
  err.classList.remove('mailInactive');
  let userData = localStorage.getItem('SignUpData');
  if(userData != null) {
    userData = JSON.parse(userData);
    signUpDataFields[0].value = userData.userName;
    signUpDataFields[1].value = userData.userEmail;
    signUpDataFields[2].value =  userData.userPassword;
    signUpDataFields[3].value = userData.userPassword;
  }
  signUpDataFields[1].style = `border: solid red;`;
  localStorage.setItem('wrongMail', 'false');
}

if(localStorage.getItem('passMatch') == 'false') {
  let err = document.getElementById('passError');
  err.classList.remove('passInactive');
  let userData = localStorage.getItem('SignUpData');
  if(userData != null) {
    userData = JSON.parse(userData);
    signUpDataFields[0].value = userData.userName;
    signUpDataFields[1].value = userData.userEmail;
    signUpDataFields[2].value =  userData.userPassword;
  }
  signUpDataFields[3].style = `border: solid red;`;
  localStorage.setItem('passMatch', 'true');
}