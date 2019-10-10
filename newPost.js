const onload= function () {
    console.log("LOADED!")
}

var modal = document.getElementById("myModal");
var inp = document.getElementById("str");
var counter = 0;
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

const Add = function (){
    const mainDiv = document.getElementById("container3_2");
    const post = document.createElement('div');
    const str = document.getElementById("str");
    const span = document.createElement('span');
    span.setAttribute('onclick', "Delete(this)")
    span.className = "close";
    span.innerHTML ="&minus;";
    span.style.float = "right";
    post.style.display = "flex";
    post.style.justifyContent = "space-between"
    post.className = 'item';
if(str.value!== ""){
    counter ++;
    inp.style.border = "1px solid #888";
    post.innerHTML = str.value;
    inp.value = "";
    post.appendChild(span);
    mainDiv.appendChild(post);
    PostArticle({str});
    }
else {
    inp.style.border = "1px solid red";
    }
  }
  const Delete= function(post){
      post.parentNode.parentNode.removeChild(post.parentNode);
      DeleteArticle(counter);
      counter--;
  }
   
  const PostArticle = function (value) {   // Post 
    return fetch (
      "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base1", 
      {
        method:"POST",
        body: JSON.stringify(value)
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