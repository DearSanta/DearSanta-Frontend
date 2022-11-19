/**api token code */
const frontend_base_url = "http://127.0.0.1:5500";
/**backend url */
const backend_base_url = "http://15.164.132.25:8000";

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

// 편지 가져오기. 안해도 되는건강??
// const fromWho = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var name = data;
//       const fromWho = document.getElementById("fromWho");
//       fromWho.innerText = name.id;
//     });
// };
// fromWho();

// 편지보내기 fetch

//편지 내용 로컬스토리지에 담았다가 편지확인페이지에 넣어주기 용도
const Text = document.getElementById("inputText");
const writeText = localStorage.setItem("writeText",Text);

async function sendLetter() {
  const access_token = localStorage.getItem("access_token");

  const data = {
    content: document.getElementById("inputText").value,
  };

  const response = await fetch(`${backend_base_url}/letter/write`, {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      "Authorization": `Bearer ${access_token}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  })

  if (response.status == 200) {
    window.location.replace(`${frontend_base_url}/check_letter/endpage.html`);
  } else {
    alert(response.status);
  }
}

const fromWho = () => {
  const URL = `${backend_base_url}/accounts/info`;
  const access_token = localStorage.getItem("access_token");

  fetch(URL, {
    headers: {
      "Authorization": `Bearer ${access_token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      const dearWhoSanta = document.getElementById("fromWho");
      dearWhoSanta.innerText = data.user_name;
    });
};
fromWho();
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // const formData = new FormData(form);
//   // const payload = new URLSearchParams(formData);
//   const access_token = localStorage.getItem("access_token"); //토큰 가져오기

//   fetch(`${backend_base_url}/letter/write`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "Authorization": `Bearer ${access_token}`, //Authorization 따옴표 묶어야함.
//     },
//     body: JSON.stringify({
//       content: "test"
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// });


async function writeLogout(){
    
  localStorage.removeItem("access_token")
  // localStorage.removeItem("refresh")
  localStorage.removeItem("payload")
  alert("로그아웃되었습니다.");
  window.location.replace(`${frontend_base_url}/account/login_main.html`);
}