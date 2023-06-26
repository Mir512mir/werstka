function signUp(e) {
    e.preventDefault();
    let data = {
        "username": document.getElementById("name").value,
        "password": document.getElementById("psw").value,
        "confirm_password": document.getElementById("psw-repeat").value
    };
  
    if (data.password !== data.confirm_password) {
        alert("Passwords do not match");
        return;
    }
  
    fetch(serverURL + "/signup", {
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify(data),
        "method": "POST",
    
    })
  
    .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful");
        } else if (response.status === 400) {
          console.log("This user is already registered");
        }
        return response.json();
    })
  
    .then((data) => {
        localStorage.setItem("id", data.id);
        localStorage.setItem("jwt", data.token);
    })
  }
  