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
  }
  else {
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
    }
    else {
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
cpassword.addEventListener('keyup', (e) => {
  index = cpassword.value.length;
  let comparePass = password.value.slice(0, index);
  console.log(comparePass);
  if(cpassword.value != comparePass) {
    cpassword.classList.add('wrongField');
    cpassword.classList.remove('rightField');
    console.log(cpassword.value , comparePass);
  }
  else {
    cpassword.classList.add('rightField');
    cpassword.classList.remove('wrongField');
  }
});

function checkForm() {
  if(password.value !== cpassword.value) {
    cpassword.classList.add('wrongField');
    return false;
  }
}
