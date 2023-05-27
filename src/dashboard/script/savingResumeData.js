left_sidebar_btns[0].addEventListener("click", () => {
  resumeForm1Submitted();
});

const resumeForm1Submitted = () => {
  let form1SubmitBtn = document.getElementById("Form1btn");
  let dataFields = document.querySelectorAll("input");
  let errorField = document.getElementById("errorContent");
  let textarea = document.querySelector("textarea");
  dataFields = Array.from(dataFields);
  dataFields.pop();
  dataFields.push(textarea);

  form1SubmitBtn.addEventListener("click", () => {
    errorField.innerHTML = "";
    let errorCount = 0;
    dataFields.forEach((element) => {
      if (element.value == "") {
        errorField.innerHTML += `<li>* ${element.attributes[3].nodeValue} is Required </li>`;
        element.style.border = "1px solid red";
        errorCount++;
        return false;
      } else {
        element.style.border = "1px solid #767676";
      }
    });
    if (errorCount == 0) {
      const personalInfo = {
        firstName: dataFields[0].value,
        lastName: dataFields[1].value,
        jobRole: dataFields[2].value,
        jobEmail: dataFields[3].value,
        phone: dataFields[4].value,
        userAddress: dataFields[5].value,
        aboutUser: dataFields[6].value,
      };
      console.log(personalInfo);
      const personalInfostring = JSON.stringify(personalInfo);
      localStorage.setItem("personalInfo", personalInfostring);
      resumeForm2layout();
      let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
      FormStepsBtn[0].innerHTML = '<ion-icon name="checkmark"></ion-icon>';
    }
  });
};

const resumeForm2Submitted = () => {
  let form1SubmitBtn = document.getElementById("Form2btn");
  let dataFields = document.querySelectorAll("input");
  let errorField = document.getElementById("errorContent");
  dataFields = Array.from(dataFields);
  dataFields.pop();

  form1SubmitBtn.addEventListener("click", () => {
    errorField.innerHTML = "";
    let errorCount = 0;
    dataFields.forEach((element) => {
      if (element.value == "") {
        errorField.innerHTML += `<li>* ${element.attributes[3].nodeValue} is Required </li>`;
        element.style.border = "1px solid red";
        errorCount++;
        return false;
      } else {
        element.style.border = "1px solid #767676";
      }
    });
    if (errorCount == 0) {
      const educationInfo = {
        collageName: dataFields[0].value,
        degreeName: dataFields[1].value,
        startYear: dataFields[2].value,
        endYear: dataFields[3].value,
      };
      console.log(educationInfo);
      const educationInfostring = JSON.stringify(educationInfo);
      localStorage.setItem("educationInfo", educationInfostring);
      resumeForm3layout();
      let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
      FormStepsBtn[1].innerHTML = '<ion-icon name="checkmark"></ion-icon>';
    }
  });
};

const resumeForm3Submitted = () => {
  AddedExp();
  let form1SubmitBtn = document.getElementById("Form3btn");
  form1SubmitBtn.addEventListener("click", () => {
    AddedExp();
    resumeForm4layout();
    let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
      FormStepsBtn[2].innerHTML = '<ion-icon name="checkmark"></ion-icon>';
  });
};

let expCount = 0;
function AddedExp() {
  let dataFields = document.querySelectorAll("input");
  let textarea = document.querySelector("textarea");
  dataFields = Array.from(dataFields);
  dataFields.pop();
  dataFields.pop();
  dataFields.push(textarea);
  if (dataFields[0].value != "") {
    const workExpInfo = {
      companyName: dataFields[0].value,
      companyJobRole: dataFields[1].value,
      companyExp: dataFields[2].value,
    };
    console.log(workExpInfo);
    const workExpInfostring = JSON.stringify(workExpInfo);
    localStorage.setItem(`workExpInfo${expCount++}`, workExpInfostring);
  }
}

const resumeForm4Submitted = () => {
  let form1SubmitBtn = document.getElementById("Form4btn");
  let dataFields = document.querySelectorAll("input");
  dataFields = Array.from(dataFields);
  dataFields.pop();
  form1SubmitBtn.addEventListener("click", () => {
    let skillAndLang = new Array();
    dataFields.forEach(element => {
      if(element.checked){
        skillAndLang.push(1);
      }
      else {
        skillAndLang.push(0);
      }
    });
    localStorage.setItem('skillAndLang', skillAndLang)
    resumeForm5layout();
  });
}