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
  });

  FormStepsBtn[1].addEventListener("click", () => {
    resumeForm2layout();
  });

  FormStepsBtn[2].addEventListener("click", () => {
    resumeForm3layout();
  });
  FormStepsBtn[3].addEventListener("click", () => {
    resumeForm4layout();
  });
  FormStepsBtn[4].addEventListener("click", () => {
    resumeForm5layout();
  });
});
