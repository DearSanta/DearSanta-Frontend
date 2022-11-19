/**api token code */
const frontend_base_url = "http://127.0.0.1:5500";
/**backend url */

const backend_base_url = "http://15.164.132.25:8000";

const LetterBox = () => {
  const URL = `${backend_base_url}/letter/`;
  const access_token = localStorage.getItem("access_token");

  fetch(URL, {
    headers:{
      "Authorization" : `Bearer ${access_token}`,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      var data = data[0];  
      console.log(data);
      const inputBox = document.getElementById("myLetterBox");
      const fromWhoCheck = document.getElementById("fromWhoCheck");
      fromWhoCheck.innerText = data.letter.from;
      inputBox.innerText = data.letter.content;
  
      const answerBox = document.getElementById("answeredLetterBox");
      const dearWhoCheck = document.getElementById("dearWhoCheck");
      dearWhoCheck.innerText = data.answer.dear;
      answerBox.innerText = data.answer.content;
    });
    // const fromWho = () => {
    //   const URL = `${backend_base_url}/accounts/info`;
    //   const access_token = localStorage.getItem("access_token");
    
    //   fetch(URL, {
    //     headers: {
    //       "Authorization": `Bearer ${access_token}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       var data = data;
    //       const dearWhoSanta = document.getElementById("fromWhoCheck");
    //       dearWhoSanta.innerText = data.user_name;
    //     });
    // };
    // fromWho();


  // const btn = document.getElementById("buttonCheckpage");
  // btn.addEventListener("button", function () {
  //   if (response.status == 200) {
  //     window.location.replace(`${frontend_base_url}/account/login_main.html`); //경로?
  //   } else {
  //     alert(response.status);
  //   }
  // });
};
LetterBox();

function goLoginMain(){
  window.location.replace(`${frontend_base_url}/check_letter/endpage.html`); //경로?
}
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
