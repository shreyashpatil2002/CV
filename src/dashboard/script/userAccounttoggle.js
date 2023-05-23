if(localStorage.getItem('SignUpData') == undefined)
        body.innerHTML = '502 Bad Getway';

let UserName = document.getElementById('UserName'),
UserNameWel = document.getElementById('UserWelcome');
let data = localStorage.getItem('SignUpData');
let UserData = JSON.parse(data);

UserName.innerText = UserData.userName;
UserNameWel.innerText = `Welcome, ${UserData.userName}`;

let AccountBtn = document.querySelector('.UserAccount');
let AccountBox = document.getElementById('UserAccountBox')
AccountBtn.addEventListener('click', () => {
    AccountBox.classList.toggle('UserAccountActive');
    AccountBox.classList.toggle('UserAccounthidden');
})
let container = document.querySelector('.container').addEventListener('click', () => {
    AccountBox.classList.add('UserAccounthidden');
    AccountBox.classList.remove('UserAccountActive');
})
