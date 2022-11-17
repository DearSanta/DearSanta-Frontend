$(document).ready(function () {
  // 대상 textarea  이벤트 keyup

  $("#findIdBox")
    .children("input")
    .keyup(function () {
      var inputLength = $(this).val().length;

      if (inputLength > 0) {
        $("#buttonWrite").attr("disabled", false);
        $("#buttonWrite").css({ backgroundColor: "#4D2E27", color: "#FAFAFA" });
        $("#findFwBox").children("input").attr("disabled", true);
      } else {
        $("#buttonWrite").attr("disabled", true);
        $("#buttonWrite").css({ backgroundColor: "#FFD686", color: "#FFB526" });
        $("#findFwBox").children("input").attr("disabled", false);
      }
    });

  $("#findFwBox")
    .children("input")
    .keyup(function () {
      var inputLength = $(this).val().length;

      if (inputLength > 0) {
        $("#buttonWrite").attr("disabled", false);
        $("#buttonWrite").css({ backgroundColor: "#4D2E27", color: "#FAFAFA" });
        $("#findIdBox").children("input").attr("disabled", true);
      } else {
        $("#buttonWrite").attr("disabled", true);
        $("#buttonWrite").css({ backgroundColor: "#FFD686", color: "#FFB526" });
        $("#findIdBox").children("input").attr("disabled", false);
      }
    });
});

function sendIdOrFw() {
  const form = document.getElementById("sendIdOrFw");

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

  var link = "#"; // # 에 이동할 페이지 주소(?) 입력
  location.href = link;
}

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
