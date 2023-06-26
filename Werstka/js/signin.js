
function signIn(e) {
    e.preventDefault();
    let data = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
    };

    fetch(serverURL + "/signIn", {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(data),
        "method": "POST",
    })
    .then((response) => {
        if (response.status === 200) {
            alert("Sign in successful");
            return response.json();
        } else if (response.status === 401) {
            alert("Invalid username or password");
        } else {
            alert("Sign in failed");
        }
    })
    .then((result) => {
        console.log(result);
        localStorage.setItem("jwt", result.token);
        window.location.href = "file:///C:/Users/Miroslaw/FE.MAIN/Homeworks/Werstka/page.html";
    })
}