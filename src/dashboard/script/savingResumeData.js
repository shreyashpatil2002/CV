let form1SubmitBtn = document.getElementById("Form1btn");
let dataFields = document.querySelectorAll("input");
console.log(dataFields);

form1SubmitBtn.addEventListener("click", () => {
  const personalInfo = {
    firstName: dataFields[0].value,
    lastName: dataFields[1].value,
    jobRole: dataFields[2].value,
    jobEmail: dataFields[3].value,
    phone: dataFields[4].value,
    telePhone: dataFields[5].value,
  };
  const personalInfostring = JSON.stringify(personalInfo);
  localStorage.setItem("personalInfo", personalInfostring);
});

