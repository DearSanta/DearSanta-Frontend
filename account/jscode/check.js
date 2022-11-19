// $('.pw').focusout(function(){
//     let pass1 = $("#pwd").val();
//     let pass2 = $("#check_pwd").val();
    
//     if (pass1 != "" || pass2 != ""){
//         if (pass1 == pass2){
//             $("#checkPw").html('');    
//         } else {
//             $("#checkPw").html('비밀번호가 일치하지 않습니다.');
//         }
//     }
// })

$(function(){
    $("#alert-success").hide();
    $("#alert-danger").hide();
    $("input").keyup(function(){
        var pwd1=$("#pwd").val();
        var pwd2=$("#check_pwd").val();
        if(pwd1 != "" || pwd2 != ""){
            if(pwd1 == pwd2){
                $("#alert-success").show();
                $("#alert-danger").hide();
            }else{
                $("#alert-success").hide();
                $("#alert-danger").show();
                $("input").removeAttr("focus");
                $("input").css("border","red");
                // $("#submit").attr("disabled", "disabled");
            }    
        }
    });
});