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

document.addEventListener('DOMContentLoaded', () => {
    let localStoArr = ['personalInfo', 'educationInfo', 'workExpInfo0', 'skillAndLang', 'UserImage'];
    localStoArr.forEach((element)=> {
        localStorage.removeItem(element);
    })
})

function makeTempAvailable() {
    let tempLate = document.querySelectorAll('.cardContent .card a');
    tempLate[0].setAttribute('href', '../resumeLayouts/layout1/index.html');
    tempLate[1].setAttribute('href', '../resumeLayouts/layout2/index.html');
    tempLate[2].setAttribute('href', '../resumeLayouts/layout3/index.html');
    
}