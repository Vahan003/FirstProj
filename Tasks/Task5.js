const users_group_one = [
    {
      "_id": "5d892f408bc8f51a1dd5fd8a",
      "name": "Crystal Cash"
    },
    {
      "_id": "5d892f40efc23a317901a700",
      "name": "Valenzuela Lowe"
    },
    {
      "_id": "5d892f406835c0ddc26ce5c0",
      "name": "Lloyd Cochran"
    },
    {
      "_id": "5d892f40b9a60fa2e589ce51",
      "name": "Crane Campbell"
    },
    {
      "_id": "5d892f402670c1dd6cbe4c4e",
      "name": "Eddie Ruiz"
    },
    {
      "_id": "5d892f4069da1a43f5d78625",
      "name": "Mcmahon Weeks"
    }
  ]
  
  const users_group_two = [
    {
      "_id": "5d892f408bc8f51a1dd5fd8a",
      "name": "Crystal Cash"
    },
    {
      "_id": "5d892f708c77eec8d72d5cfe",
      "name": "Higgins Stewart"
    },
    {
      "_id": "5d892f7089672eb04afd3799",
      "name": "Shauna Roman"
    },
    {
      "_id": "5d892f700caff5c0d1835e4c",
      "name": "Oconnor Conrad"
    },
    {
      "_id": "5d892f402670c1dd6cbe4c4e",
      "name": "Eddie Ruiz"
    },
    {
      "_id": "5d892f70dcde6472f1238c35",
      "name": "Snow Thomas"
    },
    {
      "_id": "5d892f70e102a0d8e7bdfcf3",
      "name": "Liza Conley"
    }
  ]

  function filter(group1, group2){
      var fil = new Array();
      for(let i=0;i<group1.length;i++){
          for(let j=0;j<group2.length;j++){
              if(group1[i]._id===group2[j]._id){
                fil.push(group1[i],group2[j]); // Add same elemets to new array.
              }
          }
      }
      return fil;
  }
  var u= filter(users_group_one,users_group_two);
  console.log(u);
