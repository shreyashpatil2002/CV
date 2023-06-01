let right_sidebar = document.querySelector('.container .right_sidebar');
let left_sidebar_btns = document.querySelectorAll('.ContentList li');

function clearRightSidebarBtnstyle(arr) {
  arr.forEach(element => {
      element.style = `background: transparent;
      color: #000;
      box-shadow: none;`
  });
};

left_sidebar_btns[0].addEventListener('click', () => {
  clearRightSidebarBtnstyle(left_sidebar_btns);
    left_sidebar_btns[0].style = `box-shadow: 0px 0px 7px #010c61ae;
    background: #010c61;
    color: #fff;`;

    right_sidebar.innerHTML = ` <div class="ResumeContainer">
    <div class="FormSteps">
      <li><button>1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button>4</button></li>
      <li><button>5</button></li>
    </div>
    <div class="resumeForm">
    <form action="#" id="UserPersonalInfo">
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
      <input type="button" value="Save & Next" id="Form1btn" />
    </fieldset>
  </form>
    </div>
  </div>`;
});
left_sidebar_btns[1].addEventListener('click', () => {
  clearRightSidebarBtnstyle(left_sidebar_btns);
    left_sidebar_btns[1].style = `box-shadow: 0px 0px 7px #010c61ae;
    background: #010c61;
    color: #fff;`;
});
left_sidebar_btns[2].addEventListener('click', () => {
  clearRightSidebarBtnstyle(left_sidebar_btns);
    left_sidebar_btns[2].style = `box-shadow: 0px 0px 7px #010c61ae;
    background: #010c61;
    color: #fff;`;
});
left_sidebar_btns[3].addEventListener('click', () => {
  clearRightSidebarBtnstyle(left_sidebar_btns);
    left_sidebar_btns[3].style = `box-shadow: 0px 0px 7px #010c61ae;
    background: #010c61;
    color: #fff;`;
});
left_sidebar_btns[4].addEventListener('click', () => {
  clearRightSidebarBtnstyle(left_sidebar_btns);
    left_sidebar_btns[4].style = `box-shadow: 0px 0px 7px #010c61ae;
    background: #010c61;
    color: #fff;`;
    right_sidebar.innerHTML = `<div class="ContactContainer">
    <div class="image">
        <img src="../../Assets/svg/undraw_feedback_re_urmj.svg" alt="">
    </div>
    <div class="form">
        <form action="../../Backend/contact.php" method="post">
            <input type="text" name="subject" id="subject" placeholder="Enter the Subject" required>
            <input type="text" name="name" id="name" placeholder="Enter Full Name" required>
            <input type="email" name="email" id="email" placeholder="Enter Email Id" required>
            <textarea name="description" id="description" cols="30" rows="5" placeholder="Tell us, how we can help you ?" required></textarea>
            <input type="submit" id="contact_btn" value="Send">
        </form>
    </div>
</div>`;
});

