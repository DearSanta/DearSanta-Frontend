$('.pw').focusout(function(){
    let pass1 = $("#pwd").val();
    let pass2 = $("#check_pwd").val();
    
    if (pass1 != "" || pass2 != ""){
        if (pass1 == pass2){
            $("#checkPw").html('');    
        } else {
            $("#checkPw").html('비밀번호가 일치하지 않습니다.');
            $("#check_pwd").focus();
        }
    }

})