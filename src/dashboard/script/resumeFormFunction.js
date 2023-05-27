function resumeForm1layout() {
    let resumeFormContentField = document.querySelector(".resumeForm");
    let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
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
        type="text"
        id="userJob"
        name="userJob"
        placeholder="Job Role"
        autocomplete="off"
        />
        <input
        type="email"
        id="userMail"
        name="userMail"
        placeholder="Email Id"
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
        type="address"
        id="userAddress"
        name="userAddress"
        placeholder="Your Address"
        autocomplete="off"
        />
      <textarea name="aboutUser" id="aboutUser" cols="40" placeholder="About Yourself" rows="6" ></textarea>
      <input type="button" value="Next" id="Form1btn" />
    </fieldset>
  </form>`;

    resumeForm1Submitted();
}
function resumeForm2layout() {
    let resumeFormContentField = document.querySelector(".resumeForm");
    let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
    clearResumeForm1BtnStyle(FormStepsBtn);
    FormStepsBtn[1].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `<form action="#" id="UserPersonalInfo">
    <fieldset>
      <legend>👨🏻‍🎓 Eduacational Details &nbsp;</legend>
      <div>
        <ul style="list-style: circle;color: red;" id="errorContent">
          
        </ul>
      </div>
      <input
        type="text"
        id="universityName"
        name="universityName"
        placeholder="University Name"
        autocomplete="off"
        />
      <input
        type="text"
        id="degreeName"
        name="degreeName"
        placeholder="Degree Name"
        autocomplete="off"
        />
        <label for="startYear">Start Year :</label>
      <input
        type="month"
        id="startYear"
        name="startYear"
        placeholder="Start Month"
        autocomplete="off"
        />
        <br>
        <label for="startYear">&nbsp; End Year :</label>
      <input
        type="month"
        id="endYear"
        name="endYear"
        placeholder="End Month"
        autocomplete="off"
        />
        <input type="button" value="Next" id="Form2btn" />
    </fieldset>
  </form>`;
    resumeForm2Submitted();
}
function resumeForm3layout() {
    let resumeFormContentField = document.querySelector(".resumeForm");
    let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
    clearResumeForm1BtnStyle(FormStepsBtn);
    FormStepsBtn[2].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `<form action="#" id="UserPersonalInfo">
    <fieldset>
      <legend>🤵🏻 Job and Work Experience &nbsp;</legend>
      <div>
        <ul style="list-style: circle;color: red;" id="errorContent">
          
        </ul>
      </div>
      <input
      type="text"
      id="companyName"
      name="companyName"
      placeholder="Company Name"
      autocomplete="off"
      />
    <input
      type="text"
      id="companyJobRole"
      name="companyJobRole"
      placeholder="Job Role"
      autocomplete="off"
      />
      <textarea name="aboutExperience" id="aboutExperience" cols="40" placeholder="About Your Experience" rows="6" ></textarea>
      <input type="button" value="ADD" id="addExp" onclick="AddedExp()"/>
      <input type="button" value="Next" id="Form3btn" />
    </fieldset>
  </form>`;
  resumeForm3Submitted();
}
function resumeForm4layout() {
    let resumeFormContentField = document.querySelector(".resumeForm");
    let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
    clearResumeForm1BtnStyle(FormStepsBtn);
    FormStepsBtn[3].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `<form action="#" id="UserPersonalInfo">
    <fieldset>
      <legend>👨🏻‍💻 Skills and Languages &nbsp;</legend>
      <div>
        <ul style="list-style: circle;color: red;" id="errorContent">
          
        </ul>
      </div>
      <h2>Skills :</h2>
      <div class="checkbox-group">
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">HTML</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">CSS</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">JavaScript</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">SQL</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">PHP</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">C</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">C++</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Java</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Python</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">React</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Angular</span>
            </span>
          </label>
        </div>
      </div>
      <br>
      <h2>Languages :</h2>
      <div class="checkbox-group">
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">English</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Spanish</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Hindi</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Arabic</span>
            </span>
          </label>
        </div>
        <div class="checkbox">
          <label class="checkbox-wrapper">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-tile">
              <span class="checkbox-icon"> </span>
              <span class="checkbox-label">Russian</span>
            </span>
          </label>
        </div>
      </div>
        <input type="button" value="Next" id="Form4btn" />
        </fieldset>
  </form>`;
  resumeForm4Submitted();
}
function resumeForm5layout() {
    let resumeFormContentField = document.querySelector(".resumeForm");
    let FormStepsBtn = document.querySelectorAll(".FormSteps li button");
    clearResumeForm1BtnStyle(FormStepsBtn);
    FormStepsBtn[4].style = `background: #010c61;
    color: #fff;
    box-shadow: 0px 1px 5px #010c61bb;`;
    resumeFormContentField.innerHTML = `<form action="#" id="UserPersonalInfo">
    <fieldset>
      <legend>🤳🏻 Upload Image &nbsp;</legend>
      <input type="file" id="userImage" name="userImage" placeholder="Insert Image">
      <input type="button" value="Create" id="Form5btn" />
    </fieldset>
  </form>`;
}