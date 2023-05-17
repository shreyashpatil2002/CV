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