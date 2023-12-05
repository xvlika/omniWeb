let password = document.querySelector('input[name="password"]');
let passwordIcon = document.getElementById('passwordIcon');
function changeType() {
    if (password.value.trim() === '') {
        return;
    }
    password.type = (password.type === 'password') ? 'text' : 'password';
    let newIcon = document.createElement('img');
    newIcon.src = (password.type === 'password') ? './assets/passwordSee.svg' : './assets/noarrowPassword.svg';
    newIcon.alt = 'show password icon';
    newIcon.onclick = changeType;
    passwordIcon.parentNode.replaceChild(newIcon, passwordIcon);
    passwordIcon = newIcon;
}
