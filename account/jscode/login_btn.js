const idForm = document.querySelector("#id");
const pwForm = document.querySelector("#pwd");
const loginButton = document.querySelector("#login_submitbtn");

idForm.addEventListener("keyup", LoginactiveEvent);
idForm.addEventListener("keyup", LoginactiveEvent);
pwForm.addEventListener("keyup", LoginactiveEvent);
loginButton.addEventListener("click",LoginactiveEvent);


function LoginactiveEvent() {
  switch (!(idForm.value && pwForm.value)) {
    case true:
      loginButton.disabled = true;
      break;
    case false:
      loginButton.disabled = false;
      break;
  }
}

