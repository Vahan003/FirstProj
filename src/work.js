const user = document.getElementById("user");
const userId= localStorage.getItem("userId");
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