const nameForm = document.querySelector("#name");
const idForm = document.querySelector("#id");
const pwForm = document.querySelector("#pwd");
const check_pwdForm = document.querySelector("#check_pwd");
const joinButton = document.querySelector("#join_submitbtn");

nameForm.addEventListener("keyup", JoinactiveEvent);
idForm.addEventListener('keyup', JoinactiveEvent);
pwForm.addEventListener('keyup', JoinactiveEvent);
check_pwdForm.addEventListener('keyup', JoinactiveEvent);
joinButton.addEventListener('click',JoinactiveEvent);

function JoinactiveEvent() {
    switch (!(nameForm.value && idForm.value && pwForm.value && check_pwdForm.value)) {
        case true: joinButton.disabled = true; break;
        case false: joinButton.disabled = false; break;
    }
}