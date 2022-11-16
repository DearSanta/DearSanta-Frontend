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

//write, writeSanta 에 둘 다 끌어갑니당

// function getLetter() {
//   const config = {
//     method: "get",
//   };

//   fetch("http://127.0.0.1:5500/write.html", config)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

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
