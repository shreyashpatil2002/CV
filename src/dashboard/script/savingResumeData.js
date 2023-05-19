left_sidebar_btns[0].addEventListener("click", () => {
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
        jobEmail: dataFields[2].value,
        phone: dataFields[3].value,
        telePhone: dataFields[4].value,
        aboutUser: dataFields[5].value,
      };
      console.log(personalInfo);
      const personalInfostring = JSON.stringify(personalInfo);
      localStorage.setItem("personalInfo", personalInfostring);
    }
  });
});

