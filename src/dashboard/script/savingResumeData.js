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
    }
  });
};

const resumeForm3Submitted = () => {
  AddedExp();
  let form1SubmitBtn = document.getElementById("Form3btn");
  form1SubmitBtn.addEventListener("click", () => {
    AddedExp();
    resumeForm4layout();
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
    dataFields.forEach((element) => {
      if (element.checked) {
        skillAndLang.push(1);
      } else {
        skillAndLang.push(0);
      }
    });
    localStorage.setItem("skillAndLang", skillAndLang);
    resumeForm5layout();
  });
};

const resumeForm5Submitted = () => {
  let form1SubmitBtn = document.getElementById("Form5btn");
  let userImage = document.getElementById('userImage');

  userImage.onchange = function () {
    let reader = new FileReader();

    reader.addEventListener("load", () => {
      if(userImage.files[0].size < 2000000) {
        let showImg = document.getElementById('imagePriview');
        localStorage.setItem('UserImage', reader.result);
        showImg.style = `background-image: url(${reader.result});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;`;
      }
      else{
        alert("image size should be less than 2MB");
      }
    })
    console.log(userImage.files[0].size);
    reader.readAsDataURL(userImage.files[0]);
  }
};
