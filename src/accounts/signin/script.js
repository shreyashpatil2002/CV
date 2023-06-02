let mail = document.getElementById('email'),
password = document.getElementById('password'),
eyes = document.querySelector(".form form img");

let eye1 = 1;
eyes.addEventListener("click", () => {
  if (eye1 == 1) {
    eyes.setAttribute("src", "../../../Assets/svg/eye-slash-solid.svg");
    password.setAttribute("type", "text");
    eye1 = 0;
  }
  else {
    eyes.setAttribute("src", "../../../Assets/svg/eye-solid.svg");
    password.setAttribute("type", "password");
    eye1 = 1;
  }
});
mail.addEventListener('focusin', () => {
    mail.removeAttribute('placeholder');
});
mail.addEventListener('focusout', () => {
    mail.setAttribute('placeholder', 'Enter Email Id');
})

password.addEventListener('focusin', () => {
    password.removeAttribute('placeholder');
    eyes.style.display = 'block';
});
password.addEventListener('focusout', () => {
    password.setAttribute('placeholder', 'Enter Password');
    if (password.value == "") {
        eyes.style.display = "none";
      }
})

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  let signInData = {
    "accountMail": mail.value,
    "accountPass": password.value,
  }
  signInDataString = JSON.stringify(signInData);
  localStorage.setItem('signInData', signInDataString);
});

if(localStorage.getItem('passMatch') == 'false') {
  let err = document.getElementById('passError');
  err.classList.remove('passInactive');
  let userData = localStorage.getItem('signInData');
  if(userData != null) {
    userData = JSON.parse(userData);
    mail.value = userData.accountMail;
    password.value = userData.accountPass;
  }
  password.style = `border: solid red;`;
  localStorage.setItem('passMatch', 'true');
}

if(localStorage.getItem('accountExist') == 'false') {
  let err = document.getElementById('accountError');
  err.classList.remove('accountInactive');
  let userData = localStorage.getItem('signInData');
  if(userData != null) {
    userData = JSON.parse(userData);
    mail.value = userData.accountMail;
    password.value = userData.accountPass;
  }
  localStorage.setItem('accountExist', 'true');
}