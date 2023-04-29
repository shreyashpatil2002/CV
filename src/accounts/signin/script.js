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