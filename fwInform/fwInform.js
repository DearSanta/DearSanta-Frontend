/**api token code */
const frontend_base_url = "http://127.0.0.1:5500";
/**backend url */
const backend_base_url = "http://15.164.132.25:8000";

const fwInformName = () => {
  const emailAddress = localStorage.getItem("email");
  const URL = `${backend_base_url}/accounts/find/password?email=${emailAddress}`;
  const access_token = localStorage.getItem("access_token");

  fetch(URL, {
    headers:{
      "Authorization" : `Bearer ${access_token}`,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      var data = data;
      const informFw = document.getElementById("informFw");
      informFw.innerText = data;

      const btn = document.getElementById("buttonfwInform");
      btn.addEventListener("button", function () {
        if (response.status == 200) {
          window.location.replace(`${frontend_base_url}/accounts/login.html`);
        } else {
          alert(response.status);
        }
      });
    });
};
fwInformName();

const userName = () => {
  const URL = `${backend_base_url}/accounts/info`;
  const access_token = localStorage.getItem("access_token");

  fetch(URL, {
    headers:{
      "Authorization" : `Bearer ${access_token}`,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      const fwInformName = document.getElementById("fwInformName");
      fwInformName.innerText = `${data.user_name} 님의 유저네임,비밀번호는`;
    });
};
userName();
// const informFw = () => {
//   const URL = "https://jsonplaceholder.typicode.com/posts/1";

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       var data = data;
//       const informFw = document.getElementById("informFw");
//       informFw.innerText = data.body;
//     });
// };
// informFw();
