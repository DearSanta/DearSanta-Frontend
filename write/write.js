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

const fromWho = () => {
  const URL = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      var name = data;
      const fromWho = document.getElementById("fromWho");
      fromWho.innerText = name.id;
    });
};
fromWho();

// 편지보내기 fetch

function sendLetter() {
  const form = document.getElementById("writeLetterForm");

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
