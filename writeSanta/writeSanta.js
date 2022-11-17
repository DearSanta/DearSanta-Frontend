$(document).ready(function () {
  // 대상 textarea  이벤트 keyup

  // var inputLength = 글자 길이 val().length();

  $("textarea").keyup(function () {
    var inputLength = $(this).val().length;

    if (inputLength > 0) {
      $("#buttonWrite").attr("disabled", false);
      $("#buttonWrite").css({ backgroundColor: "#4D2E27", color: "#FAFAFA" });
    } else {
      $("#buttonWrite").attr("disabled", true);
      $("#buttonWrite").css({ backgroundColor: "#FFD686", color: "#FFB526" });
    }
  });
});

//fecth 연습
const userLetterBox = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var num = data;
      const inputBox = document.getElementById("userLetterBox");
      inputBox.innerText = num.title;
    });
};
userLetterBox();

const dearWho_Santa = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const dearWhoSanta = document.getElementById("dearWhoSanta");
      dearWhoSanta.innerText = name.id;
    });
};
dearWho_Santa();

const fromWho_Santa = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const fromWhoSanta = document.getElementById("fromWhoSanta");
      fromWhoSanta.innerText = name.id;
    });
};
fromWho_Santa();
// URL, element 뒤 인자(?)들 수정 필요

function sendLetter() {
  const form = document.getElementById("writeAsSantaLetterForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  const link = "#";
  location.href = link;
}
