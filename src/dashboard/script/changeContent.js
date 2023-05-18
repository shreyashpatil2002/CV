let right_sidebar = document.querySelector('.container .right_sidebar');
let left_sidebar_btns = document.querySelectorAll('.ContentList li');

left_sidebar_btns[4].addEventListener('click', () => {
    left_sidebar_btns[4].style = `box-shadow: 0px 0px 7px #010c61ae;
    background: #010c61;
    color: #fff;`;
    right_sidebar.innerHTML = `<div class="container">
    <div class="image">
        <img src="../../Assets/svg/undraw_feedback_re_urmj.svg" alt="">
    </div>
    <div class="form">
        <form action="#">
            <input type="text" name="subject" id="subject" placeholder="Enter the Subject">
            <input type="text" name="userName" id="userName" placeholder="Enter Full Name">
            <input type="email" name="email" id="email" placeholder="Enter Email Id">
            <textarea name="query" id="query" cols="30" rows="5" placeholder="Tell us, how we can help you ?"></textarea>
            <input type="submit" id="contact_btn" value="Send">
        </form>
    </div>
</div>`;
})

