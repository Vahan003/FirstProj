const submit = document.getElementById("submit");
const nickName = document.getElementById("nickName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const passW = document.getElementById("passW");
const mess = document.getElementById("mess");
submit.addEventListener('click',() =>{
    if((nickName.value !== "")&&(lastName.value !== "")&&(email.value !== "")&&(passW.value !== "")){
        const user = {
            "lastname": `${lastName.value}`,
            "username": `${nickName.value}`,
            "password": `${passW.value}`,
            "email": `${email.value}`,
          }
    fetch('https://it-blog-posts.herokuapp.com/api/people',
    {   
        method:"POST",
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
          }
    } ). then(response => {
        redBorder(false);
        submit.innerHTML="Load";
        console.log(response);
        if(response.status === 200){
        submit.innerHTML="Submit";
        nickName.value = "";
        lastName.value = "";
        email.value="";
        passW.value="";
        mess.innerHTML="You are registered!"
        }
        else{
        mess.innerHTML="Check your inputs!"
        submit.innerHTML="Submit";
        redBorder(true);
        }

    })
}
    else{
        redBorder(true);
    }
})

function redBorder(expr){
    if(expr){
    nickName.style.border="1px solid red";
    lastName.style.border="1px solid red";
    email.style.border="1px solid red";
    passW.style.border="1px solid red";
    }
    else{
    nickName.style.border="0";
    lastName.style.border="0";
    email.style.border="0";
    passW.style.border="0";
    }
}