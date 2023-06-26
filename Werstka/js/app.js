let serverURL = "http://65.109.13.139:9191";
let token = "";
token = localStorage.getItem("jwt");
 
fetch("http://65.109.13.139:9191/me", {
    headers:{
        "x-access-token": token 
    }
})
.then((res) => {
    return res.json()
})
.then(data => {
    console.log(data)
    const avatar=document.querySelector('profile-image');
    
    avatar.setAttribute('src',data.avatar || 'media/icons8-пользователь-80.png');

    document.querySelector('.profil-user-name').textContent=data.username;
    const statCount =document.querySelectorAll('.profile-stat-count');
    statCount[0].textContent=data.posts-count;
    statCount[1].textContent=data.followers;
    statCount[2].textContent=data.following;
    document.querySelector('profile-real-name').textContent=data.fullName('$$$$');
})
