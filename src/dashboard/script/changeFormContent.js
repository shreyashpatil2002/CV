
function clearResumeForm1BtnStyle(arr) {
    arr.forEach(element => {
        element.style = `background: #eee;
        color: #000;
        box-shadow: none;`
    });
};
left_sidebar_btns[0].addEventListener("click", () => {
  let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
let resumeFormContentField = document.querySelector('.resumeForm');
  FormStepsBtn[0].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    
  FormStepsBtn[0].addEventListener("click", () => {
    clearResumeForm1BtnStyle(FormStepsBtn);
    FormStepsBtn[0].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `<form action="#" id="UserPersonalInfo">
    <fieldset>
      <legend>🙋🏻 Personal Information &nbsp;</legend>
      <div>
        <ul style="list-style: circle;color: red;" id="errorContent">
          
        </ul>
      </div>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Fisrt Name"
        autocomplete="off"
        />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        autocomplete="off"
        />
      <input
        type="email"
        id="userEmail"
        name="userEmail"
        placeholder="Job email"
        autocomplete="off"
        />
      <input
        type="number"
        id="userNumber"
        name="userNumber"
        placeholder="Phone number"
        autocomplete="off"
        />
      <input
        type="tel"
        id="telNumber"
        name="telNumber"
        placeholder="Telephone number"
      />
      <textarea name="aboutUser" id="aboutUser" cols="40" placeholder="About Yourself" rows="10" ></textarea>
      <input type="button" value="Next" id="Form1btn" />
    </fieldset>
  </form>`;
  });
  FormStepsBtn[1].addEventListener("click", () => {
    clearResumeForm1BtnStyle(FormStepsBtn)
    FormStepsBtn[1].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `Form Step 2`
  });
  FormStepsBtn[2].addEventListener("click", () => {
    clearResumeForm1BtnStyle(FormStepsBtn)
    FormStepsBtn[2].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `Form Step 3`
  });
  FormStepsBtn[3].addEventListener("click", () => {
    clearResumeForm1BtnStyle(FormStepsBtn)
    FormStepsBtn[3].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `Form Step 4`
  });
  FormStepsBtn[4].addEventListener("click", () => {
    clearResumeForm1BtnStyle(FormStepsBtn)
    FormStepsBtn[4].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `Form Step 5`
  });
});
