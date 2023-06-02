let actionList = document.querySelectorAll('#UserAccountBox .links li');

actionList[0].addEventListener('click', () => {
    window.location.href = './account.html';
})
actionList[2].addEventListener('click', () => {
    if(confirm("You want to logout ?")) {
        localStorage.removeItem('SignUpData');
        window.location.href = '../welcomePage/index.html';
    }
})