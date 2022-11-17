/**api token code */
const frondend_base_url = "http://127.0.0.1:5500"
/**backend url */
const backend_base_url = "http://15.164.132.25:8080"

async function handleSignin(){

    const signupData = {
        username : document.getElementById("name").value,
        userid : document.getElementById("id").value,
        password : document.getElementById("pwd").value,
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

    response_json = await response.json()

    if(response.status == 200){
        window.location.replace(`${frondend_base_url}/login.html`);
    }else{
        alert(response.status)
    }
}

async function handleLogin(){

    const loginData = {
        username : document.getElementById("id").value,
        password : document.getElementById("pwd").value
    }

    const response = await fetch(`${backend_base_url}/account/login`,{
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
        localStorage.setItem("access_token", response_json.access)
        localStorage.setItem("refresh_token", response_json.access)

        /**데이터 파싱 */
        const base64Url = response_json.access.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c){
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        localStorage.setItem("payload", jsonPayload);
        widow.location.replace(`${frontend_base_url}/`);
    }else{
        alert(response.status)
    }
}

