const user = document.getElementById("user");
const userId= localStorage.getItem("userId");
const logout = document.getElementById("logout");
logout.addEventListener('click', ()=> {
   window.location.replace("page_2_login.html");
})
Get(`https://it-blog-posts.herokuapp.com/api/people/${userId}`)
.then(data => { 
    console.log(data);
    user.innerHTML= `<h3>${data.username}<h3>`;
 })
 function Get(url){
    return fetch(url)
     .then(response => response.json())
     .then(data => data);
}