const onload= function () {
    console.log("LOADED!");
    GetArticle();
}

var modal = document.getElementById("myModal");
var inp = document.getElementById("str");
function Create(){
    console.log("Ready to create");
    modal.style.display = "block";
    
  }


function Close() {

    modal.style.display = "none";
    
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
const Delete= function(span){
     let ind = span.childNodes;
     console.log(ind[1].innerHTML);
     span.parentNode.parentNode.removeChild(span.parentNode);
     DeleteArticle(ind[1].innerHTML);
}

const Add = function (){
    const mainDiv = document.getElementById("container3_2");
    const post = document.createElement('div');
    const str = document.getElementById("str");
    
    post.style.display = "flex";
    post.className = 'item';
if(str.value!== ""){
    console.log(str.value);
    PostArticle({"str": `${str.value}`});

    post.innerHTML = str.value;
    mainDiv.appendChild(post);
    
    inp.style.border = "1px solid #888";
    inp.value = "";
    inp.setAttribute('placeholder', "Reload then you can delete post!");
    }
else {
    inp.style.border = "1px solid red";
    }
  }
  function GetArticle(){
    return fetch ("https://5d9b4390686ed000144d1ed9.mockapi.io/js/base1")
    .then(response => response.json())
    .then(data => {
    const mainDiv = document.getElementById("container3_2");
    
    for(let i=0;i< data.length;i++){
      const post = document.createElement('div');
      const span = document.createElement('span');
      const ind = document.createElement('p'); // For save ID in HTML  
      
      span.setAttribute('onclick', "Delete(this)")
      span.className = "close";
      span.innerHTML ="&minus;";
      span.style.float = "right";
      
      post.style.display = "flex";
      post.style.justifyContent = "space-between"
      post.className = 'item';
      post.innerHTML = data[i].str;
     
      ind.style.display = "none";
      ind.innerHTML = data[i].id;
     
      span.appendChild(ind);
      post.appendChild(span);
      mainDiv.appendChild(post);
      console.log(data[i], i )
    
    }
    
    })

    
  }
   
  const PostArticle = function (value) {   // Post 
    return fetch (
      "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base1", 
      {
        method:"POST",
        body: JSON.stringify(value),
        headers: {
          'content-type': 'application/json'
      }
      })
      .then(response => console.log("CREATED!",response, value))
  
  }
  const DeleteArticle = function (id) {  // Delete
    return fetch (
      `https://5d9b4390686ed000144d1ed9.mockapi.io/js/base1/${id}`,  //   base3/:id
      {
        method:"DELETE"
      })
      .then(response => console.log("DELETED!",response, id))
  
  }