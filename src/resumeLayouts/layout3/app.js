let imgbox = document.querySelector(".userImage");
let userImage = localStorage.getItem("UserImage");
imgbox.style = `background-image: url(${userImage});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;`;

let personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
let UserBox = document.querySelector(".nameBox .userName");
UserBox.innerHTML += `<h1>${personalInfo.firstName} <span>${personalInfo.lastName}</span></h1>
                    <h2>${personalInfo.jobRole}</h2>`;

let contactBox = document.querySelector(".contact");
contactBox.innerHTML += `<div>
                    <p class="contactLabel">Phone</p>
                    <p>${personalInfo.phone}</p>
                </div>
                <div>
                    <p class="contactLabel">Email</p>
                    <p>${personalInfo.jobEmail}</p>
                </div>
                <div>
                    <p class="contactLabel">Address</p>
                    <p>${personalInfo.userAddress}</p>
                </div>`;

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

let language = document.querySelector(".languages");
let skillLangInfo = JSON.parse(localStorage.getItem("skillAndLang"));
let index = 0;
skillLangInfo.forEach((element) => {
  if (element == 1 && index > 10) {
    language.innerHTML += `<p>${skillLangArr[index]}</p>`;
  }
  index++;
});

let idx = 0;
let skills = document.getElementById("softSkills");
skillLangInfo.forEach((element) => {
  if (element == 1 && idx <= 10) {
    skills.innerHTML += `<div>
                        <p>${skillLangArr[idx]}</p>
                        <span></span>
                        <input type="range" min="0" max="100" value="10">
                    </div>`;
  }
  idx++;
});

let education = document.querySelector(".education");
let educationInfo = JSON.parse(localStorage.getItem("educationInfo"));
let startEdu = new Date(educationInfo.startYear);
let endEdu = new Date(educationInfo.endYear);
education.innerHTML += `
 <h2>${educationInfo.degreeName}</h2>
                <h3>${educationInfo.collageName}</h3>
                <p>${startEdu.toLocaleString("default", {
                  month: "long",
                })} ${startEdu.getFullYear()} - ${endEdu.toLocaleString(
  "default",
  { month: "long" }
)} ${endEdu.getFullYear()}</p>`;

let experience = document.querySelector(".experience");
let expcount = localStorage.getItem("expcount");
for (let i = 0; i < expcount; i++) {
  let exp = JSON.parse(localStorage.getItem(`workExpInfo${i}`));
  experience.innerHTML += `
          <div class="box">
                    <h3>${exp.companyName}</h3>
                    <div>
                        <h2>${exp.companyJobRole}</h2>
                        <p>${exp.companyExp}</p>
                    </div>
                </div>
            `;
}
