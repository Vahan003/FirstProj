const submit = document.getElementById("submit");
const email = document.getElementById("email");
const passW = document.getElementById("passW");
const mess = document.getElementById("mess");
localStorage.clear("useId");

submit.addEventListener('click',() =>{
    if((email.value !== "")&&(passW.value !== "")){
        const user = {
            "password": `${passW.value}`,
            "email": `${email.value}`,
          }
    fetch('https://it-blog-posts.herokuapp.com/api/people/login',
    {   
        method:"POST",
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
          }
    } ).then(response => {
        redBorder(false);
        if(response.status === 200){
            return response.json();
           
        }
        else{
        redBorder(true);
        mess.innerHTML="Incorrect email or password!"
        }

    }).then(data => {
        console.log(data.userId);
        localStorage.setItem("userId", data.userId)
        window.open("page_4_work.html");
    })
}
    else{
        redBorder(true);
    }
})
function Get(url){
    return fetch(url)
     .then(response => response.json())
     .then(data => data);
}
function redBorder(expr){
    if(expr){
    email.style.border="1px solid rgb(138, 7, 7)";
    passW.style.border="1px solid rgb(138, 7, 7)";
    }
    else{
    email.style.border="0";
    passW.style.border="0";
    }
}