let contact = localStorage.getItem("contact");
let seen = localStorage.getItem("seen");
let msgNotification = document.getElementById("massageNum");
let msgContent = document.getElementById("massageInfo");
let AccountBox = document.getElementById("UserAccountBox");
let today = new Date(localStorage.getItem("today"));
msgContent.innerHTML += `<span style="float:right;margin-top: 15px;">${today.toDateString()}`;

if (contact == "true" && seen == "false") {
  msgNotification.classList.remove("inactiveMsg");

  let container = document
    .querySelector(".container")
    .addEventListener("click", () => {
      msgContent.classList.add("inactiveMsg");
      AccountBox.classList.add("UserAccounthidden");
      AccountBox.classList.remove("UserAccountActive");
    });
}

document.getElementById("massages").addEventListener("click", () => {
  if (localStorage.getItem("contact") == "true") {
    msgNotification.classList.add("inactiveMsg");
    msgContent.classList.toggle("inactiveMsg");
    localStorage.setItem("seen", "true");
  }
});
