if (localStorage.getItem("SignUpData") == null) {
  document.body.innerHTML = `<h1 style="text-align:center;">502 Bad Getway</h1>`;
} else {
  let title = document.querySelector("title");
  let UserName = document.getElementById("UserName"),
    UserNameWel = document.getElementById("UserWelcome");
  let data = localStorage.getItem("SignUpData");
  let UserData = JSON.parse(data);

  title.innerText = `${UserData.userName}@CV - Dashboard`;
  UserName.innerText = UserData.userName;
  UserNameWel.innerText = `Welcome, ${UserData.userName}`;

  let AccountBtn = document.querySelector(".UserAccount");
  let AccountBox = document.getElementById("UserAccountBox");
  let msgContent = document.getElementById("massageInfo");
  AccountBtn.addEventListener("click", () => {
    AccountBox.classList.toggle("UserAccountActive");
    AccountBox.classList.toggle("UserAccounthidden");
    msgContent.classList.add("inactiveMsg");
  });
  let container = document
    .querySelector(".container")
    .addEventListener("click", () => {
      AccountBox.classList.add("UserAccounthidden");
      AccountBox.classList.remove("UserAccountActive");
    });
}
