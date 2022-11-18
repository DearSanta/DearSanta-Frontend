/**api token code */
const frontend_base_url = "http://127.0.0.1:5500";
/**backend url */
const backend_base_url = "http://15.164.132.25:8000";

const LetterBox = () => {
  const URL = `${backend_base_url}/letter/`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      const inputBox = document.getElementById("myLetterBox");
      const dearWhoCheck = document.getElementById("dearWhoCheck");
      dearWhoCheck.innerText = data.answer.dear;
      inputBox.innerText = data.letter.content;

      const fromWhoCheck = document.getElementById("fromWhoCheck");
      const answerBox = document.getElementById("answeredLetterBox");
      fromWhoCheck.innerText = data.letter.from;
      answerBox.innerText = data.answer.content;
    });
  const btn = document.getElementById("buttonCheckpage");
  btn.addEventListener("button", function () {
    if (response.status == 200) {
      window.location.replace(`${frontend_base_url}/`);
    } else {
      alert(response.status);
    }
  });
};
LetterBox();

// const answeredLetterBox = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var data = data;
//       const inputBox = document.getElementById("answeredLetterBox");
//       inputBox.innerText = data.body;
//     });
// };
// answeredLetterBox();

// const dearWho_Check = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var name = data;
//       const dearWhoCheck = document.getElementById("dearWhoCheck");
//       dearWhoCheck.innerText = name.id;
//     });
// };
// dearWho_Check();

// const fromWho_Check = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var name = data;
//       const fromWhoCheck = document.getElementById("fromWhoCheck");
//       fromWhoCheck.innerText = name.id;
//     });
// };
// fromWho_Check();
