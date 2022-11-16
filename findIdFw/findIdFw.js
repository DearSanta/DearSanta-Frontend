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
