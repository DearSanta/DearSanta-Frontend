/**api token code */
const frondend_base_url = "http://127.0.0.1:5500";
/**backend url */
const backend_base_url = "http://15.164.132.25:8080";


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
// const userLetterBox = () => {
//   const URL = "http://15.164.132.25:8080/";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var num = data;
//       const inputBox = document.getElementById("userLetterBox");
//       inputBox.innerText = num.title;
//     });
// };
// userLetterBox();

// const dearWho_Santa = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var name = data;
//       const dearWhoSanta = document.getElementById("dearWhoSanta");
//       dearWhoSanta.innerText = name.id;
//     });
// };
// dearWho_Santa();

// const fromWho_Santa = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var name = data;
//       const fromWhoSanta = document.getElementById("fromWhoSanta");
//       fromWhoSanta.innerText = name.id;
//     });
// };
// fromWho_Santa();
// URL, element 뒤 인자(?)들 수정 필요


function sendLetter() {
  const form = document.getElementById("writeAsSantaLetterForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    const access_token = localStorage.getItem("access_token"); //토큰 가져오기

    fetch(`${backend_base_url}/letter/answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${access_token}`, //Authorization 따옴표 묶어야함.
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  if(response.status == 200){
    window.location.replace(`${frondend_base_url}/flow.html`);
  }else{
    alert(response.status)
  }
}
