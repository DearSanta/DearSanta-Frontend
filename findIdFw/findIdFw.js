/**api token code */
const frontend_base_url = "http://127.0.0.1:5500";
/**backend url */
const backend_base_url = "http://15.164.132.25:8000";

$(document).ready(function () {
  // 대상 textarea  이벤트 keyup

  // $("#findIdBox")
  //   .children("input")
  //   .keyup(function () {
  //     var inputLength = $(this).val().length;

  //     if (inputLength > 0) {
  //       $("#buttonWrite").attr("disabled", false);
  //       $("#buttonWrite").css({ backgroundColor: "#4D2E27", color: "#FAFAFA" });
  //       $("#findFwBox").children("input").attr("disabled", true);
  //     } else {
  //       $("#buttonWrite").attr("disabled", true);
  //       $("#buttonWrite").css({ backgroundColor: "#FFD686", color: "#FFB526" });
  //       $("#findFwBox").children("input").attr("disabled", false);
  //     }
  //   });

  $("#findBox")
    .children("input")
    .keyup(function () {
      var inputLength = $(this).val().length;

      if (inputLength > 0) {
        $("#buttonWrite").attr("disabled", false);
        $("#buttonWrite").css({ backgroundColor: "#4D2E27", color: "#FAFAFA" });
        // $("#findIdBox").children("input").attr("disabled", true);
      } else {
        $("#buttonWrite").attr("disabled", true);
        $("#buttonWrite").css({ backgroundColor: "#FFD686", color: "#FFB526" });
        // $("#findIdBox").children("input").attr("disabled", false);
      }
    });
});

function sendIdOrFw() {
  const form = document.getElementById("sendIdOrFw");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);

    fetch(`${backend_base_url}/accounts/find/password?email=`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  });
}

const btn = document.getElementById("buttonWrite");
btn.addEventListener("button", function () {
  const emailAddress = document.getElementById("emailBox");
  localStorage.setItem("email", emailAddress);

  if (response.status == 200) {
    window.location.replace(`${frontend_base_url}/fwInform.html`);
  } else {
    alert(response.status);
  }
});

// const getIdFw = () => {
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
//원래 코드
// var inputLength = 글자 길이 val().length();

//   $("input").keyup(function () {
//     var inputLength = $(this).val().length;

//     if (inputLength > 0) {
//       $("#buttonWrite").attr("disabled", false);
//       $("#buttonWrite").css({ backgroundColor: "#4D2E27", color: "#FAFAFA" });
//     } else {
//       $("#buttonWrite").attr("disabled", true);
//       $("#buttonWrite").css({ backgroundColor: "#FFD686", color: "#FFB526" });
//     }
//   });
// });
