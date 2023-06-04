let imgbox = document.querySelector(".imgbox");
let userImage = localStorage.getItem("UserImage");
imgbox.style = `background-image: url(${userImage});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;`;

let personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
let UserBox = document.querySelector(".portfoliotext");
UserBox.innerHTML += `<h2>${personalInfo.firstName} ${personalInfo.lastName}<br><span>${personalInfo.jobRole}</span></h2>`;

let contactBox = document.querySelector(".contactinfo ul");
contactBox.innerHTML += `<li>
<span class="icon"><ion-icon name="mail"></ion-icon></span>
<span class="text">${personalInfo.jobEmail}</span>
</li>
<li>
<span class="icon"><ion-icon name="phone-portrait-outline"></ion-icon></span>
<span class="text">${personalInfo.phone}</span>
</li>
<li>
<span class="icon"><ion-icon name="location"></ion-icon></span>
<span class="text">${personalInfo.userAddress}</span>
</li>`;

let aboutBox = document.querySelector(".about");
aboutBox.innerHTML += `<p>${personalInfo.aboutUser}</p>`;

let skillLangArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "PHP",
  "C",
  "C++",
  "Java",
  "Python",
  "React",
  "Angular",
  "English",
  "Spanish",
  "Hindi",
  "Arabic",
  "Russian",
];
let language = document.querySelector(".Languages ul");
let skillLangInfo = JSON.parse(localStorage.getItem("skillAndLang"));
let index = 0;
skillLangInfo.forEach((element) => {
  if (element == 1 && index > 10) {
    language.innerHTML += `<li>
    <span class="text">${skillLangArr[index]}</span>
    <span class="percent"></span>
  </li>`;
  }
  index++;
});

let idx = 0;
let skills = document.getElementById("skillList");
skillLangInfo.forEach((element) => {
  if (element == 1 && idx <= 10) {
    skills.innerHTML += `<div class="box">
    <h4>${skillLangArr[idx]}</h4>
    <div class="percent"></div>
  </div>`;
  }
  idx++;
});

let education = document.querySelector(".education");
let educationInfo = JSON.parse(localStorage.getItem("educationInfo"));
let startEdu = new Date(educationInfo.startYear);
let endEdu = new Date(educationInfo.endYear);
education.innerHTML += `
            <li>
              <h5>${startEdu.toLocaleString("default", {
                month: "long",
              })} ${startEdu.getFullYear()} - ${endEdu.toLocaleString(
  "default",
  { month: "long" }
)} ${endEdu.getFullYear()}</h5>
              <h4>${educationInfo.degreeName}</h4>
              <h4>${educationInfo.collageName}</h4>
            </li>`;

let experience = document.querySelector(".experience");
let expcount = localStorage.getItem("expcount");
for (let i = 0; i < expcount; i++) {
  let exp = JSON.parse(localStorage.getItem(`workExpInfo${i}`));
  experience.innerHTML += `
            <div class="box">
            <div class="year_company">
              <h5>${exp.companyName}</h5>
            </div>
            <div class="text">
              <h4>${exp.companyJobRole}</h4>
              <p>
              ${exp.companyExp}
              </p>
            </div>
          </div>
            `;
}
