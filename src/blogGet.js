const sectionWrapper = document.getElementById("post");
const asideWrapper = document.getElementById("bloger");



const fetchArticles = function (callback) { // fetch all articles
  return fetch(
    "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3",
    {
      method: "GET"
    }
  )
    .then(function (response) {
      return response.json().then(function (data) {
        return callback(data);
      });
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}

const fetchBloggers = function (callback) {
  return fetch(
    "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base2",
    {
      method: "GET"
    }
  )
    .then(function (response) {
      return response.json().then(function (data) {
        return callback(data);
      });
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}
// ------------------------------------------------------------------------
const Edit = function (element){  // Edit article 
  const name = element.firstChild.firstChild.innerHTML; // Author name
  const article =  element.childNodes[1].value;  // Article string
  console.log(name, article);
  const getUrl = fetch("https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3");
  getUrl
  .then(response => response.json())
  .then(data =>{
   for(let i=0;i<data.length;i++){
     if(data[i].author === name){   // Find author in data
      DeleteArticle(data[i].id);  // delete finded object
       delete data[i].id; // delete ID
       data[i].description = article;   // Change article with new one
       PostArticle(data[i]);  // Post new article 
     }
   }
  })
}
const PostArticle = function (value) {   // Post 
  return fetch (
    "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3", 
    {
      method:"POST",
      body: JSON.stringify(value)
    })
    .then(response => console.log("CREATED!",response, value))

}
const DeleteArticle = function (id) {  // Delete
  return fetch (
    `https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3/${id}`,  //   base3/:id
    {
      method:"DELETE"
    })
    .then(response => console.log("DELETED!",response, id))

}
//------------------------------------------------------------------------------
const showArticles = function (data) { // show Articles
  for (let i = 0; i < data.length; i++) {
    const article = document.createElement('article');
    const author = document.createElement('div');
    const title = document.createElement('div');
    const header = document.createElement('div');
    const articalBody = document.createElement('input', 'value');

    author.innerText = data[i].author;
    title.innerText = data[i].title;
    articalBody.value = data[i].description;

    header.className = 'article-header';
    author.className = "article-author";
    title.className = "article-title";

    header.appendChild(author);
    header.appendChild(title);
    

    articalBody.className = 'article-body';
    article.className = "outline artical-wrapp";
    article.setAttribute('onchange', "Edit(this)")  
    article.appendChild(header);
    article.appendChild(articalBody);
    sectionWrapper.appendChild(article);
  }
}

const showBloggers = function (data) { // show Articles
  for (let i = 0; i < data.length; i++) {
    const blogger = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('div');

    avatar.src = data[i].avatar;
    name.innerText = data[i].name;

    blogger.className = 'aside-blogger';
    avatar.className = "aside-avatar";
    name.className = "article-title";

    blogger.appendChild(avatar);
    blogger.appendChild(name);


    asideWrapper.appendChild(blogger);
  }
}

const onload = function () {
  console.log('Run');
  fetchArticles(function (data) {
    console.log(data);
    showArticles(data);
  })
  fetchBloggers(function (data) {
    console.log(data);
    showBloggers(data);
  })
 
}
