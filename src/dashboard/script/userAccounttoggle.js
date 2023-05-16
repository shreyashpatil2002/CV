let AccountBtn = document.querySelector('.UserAccount');
let AccountBox = document.getElementById('UserAccountBox')
AccountBtn.addEventListener('click', () => {
    AccountBox.classList.toggle('UserAccountActive');
    AccountBox.classList.toggle('UserAccounthidden');
})