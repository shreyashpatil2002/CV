function clearResumeForm1BtnStyle(arr) {
  arr.forEach((element) => {
    element.style = `background: #eee;
      color: #000;
      box-shadow: none;`;
  });
}
left_sidebar_btns[0].addEventListener("click", () => {
  let resumeFormContentField = document.querySelector(".resumeForm");
  let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
  FormStepsBtn[0].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;

  FormStepsBtn[0].addEventListener("click", () => {
    resumeForm1layout();
    if (localStorage.getItem("personalInfo") != undefined) {
      let data = localStorage.getItem("personalInfo");
      data = JSON.parse(data);
      let dataFields = document.querySelectorAll("input");
      let textarea = document.querySelector("textarea");
      dataFields = Array.from(dataFields);
      dataFields.pop();
      dataFields.push(textarea);
      if (data.firstName != undefined) {
        dataFields[0].value = data.firstName;
        dataFields[1].value = data.lastName;
        dataFields[2].value = data.jobRole;
        dataFields[3].value = data.jobEmail;
        dataFields[4].value = parseInt(data.phone);
        dataFields[5].value = data.userAddress;
        dataFields[6].value = data.aboutUser;
      }
    }
  });

  FormStepsBtn[1].addEventListener("click", () => {
    resumeForm2layout();
    if (localStorage.getItem("educationInfo") != undefined) {
      let data = localStorage.getItem("educationInfo");
      data = JSON.parse(data);
      let dataFields = document.querySelectorAll("input");
      dataFields = Array.from(dataFields);
      dataFields.pop();
      if (data.collageName != undefined) {
        dataFields[0].value = data.collageName;
        dataFields[1].value = data.degreeName;
        dataFields[2].value = data.startYear;
        dataFields[3].value = data.endYear;
      }
    }
  });

  FormStepsBtn[2].addEventListener("click", () => {
    resumeForm3layout();
    if (localStorage.getItem("expcount") != undefined) {
      let num = localStorage.getItem("expcount");
      let Explist = document.querySelector("#JobExp ul");
      for (let i = 0; i < num; i++) {
        let data = localStorage.getItem(`workExpInfo${i}`);
        data = JSON.parse(data);
        Explist.innerHTML += `<li>${data.companyName}</li>`;
      }
    }
  });

  FormStepsBtn[3].addEventListener("click", () => {
    resumeForm4layout();
    if (localStorage.getItem("skillAndLang") != undefined) {
      let data = localStorage.getItem("skillAndLang");
      data = JSON.parse(data);
      let dataFields = document.querySelectorAll("input");
      dataFields = Array.from(dataFields);
      dataFields.pop();
      let i = 0;
      data.forEach((element) => {
        if (element == 1) {
          dataFields[i].setAttribute("checked", "");
        }
        i++;
      });
    }
  });

  FormStepsBtn[4].addEventListener("click", () => {
    resumeForm5layout();
    if (localStorage.getItem("UserImage") != undefined) {
      let showImg = document.getElementById("imagePriview");
      let userImg = localStorage.getItem("UserImage");
      showImg.style = `background-image: url(${userImg});
          background-position:center;
          background-size:cover;
          background-repeat:no-repeat;`;
    }
  });
});
