/**api token code */
const frontend_base_url = "http://127.0.0.1:5500"
/**backend url */
const backend_base_url = "http://15.164.132.25:8000"

async function handleLogout(){
    
    localStorage.removeItem("access_token")
    // localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    alert("로그아웃되었습니다.");
    window.location.replace(`${frontend_base_url}/account/login_main.html`);
}

async function handleSignin(){

    const signupData = {
        name : document.getElementById("name").value,
        email : document.getElementById("id").value,
        password1 : document.getElementById("pwd").value,
        password2 : document.getElementById("check_pwd").value,
    }

    const response = await fetch(`${backend_base_url}/accounts/signup`,{
        headers:{
            Accept:"application/json",
            'Content-type' : 'application/json' 
        },
        method: "POST",
        body: JSON.stringify(signupData)
    }
    )

    // response_json = await response.json()

    if(response.status == 200){
        window.location.replace(`${frontend_base_url}/account/login.html`);
    }else{
        alert(response.status)
    }
}

async function handleLogin(){

    const loginData = {
        email : document.getElementById("id").value,
        password : document.getElementById("pwd").value
    }

    const response = await fetch(`${backend_base_url}/accounts/login`,{
        headers:{
            Accept:"application/json",
                'Content-type' : 'application/json' 
        },
        method: 'POST',
        body : JSON.stringify(loginData)
    }
    )

    response_json = await response.json()


    if(response.status == 200){
        localStorage.setItem("access_token", response_json.access_token)
        // localStorage.setItem("refresh_token", response_json.access)

        /**데이터 파싱 */
        const base64Url = response_json.access_token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c){
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        localStorage.setItem("payload", jsonPayload);
        window.location.replace(`${frontend_base_url}/flow/flow.html`); //로그인 후 사이트 연결 확인 필요
    }else{ //로그인 실패 구현 필요
        alert(response.status)
    }
}

function go24home(){
    window.location.replace(`${frontend_base_url}/flow/24home.html`);
}