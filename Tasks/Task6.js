const customers = [
    {
      "_id": "5d892e944aafb6d09eb51d48",
      "name": "Katrina Hopkins",
      "isActive": false,
      "balance": 2798.94
    },
    {
      "_id": "5d892e9480c9eca427a52b61",
      "name": "Rivera Harvey",
      "isActive": true,
      "balance": 4068.5
    },
    {
      "_id": "5d892e94313f586e61efd4f3",
      "name": "Noelle Franklin",
      "isActive": false,
      "balance": 3279.38
    },
    {
      "_id": "5d892e94585c9fd21438bf2e",
      "name": "Abby Sosa",
      "isActive": true,
      "balance": 1363.24
    },
    {
      "_id": "5d892e94c59cc1bd866be696",
      "name": "Dunn Gray",
      "isActive": true,
      "balance": 2105.55
    },
    {
      "_id": "5d892e943856f2a8fb66a572",
      "name": "Young Bonner",
      "isActive": false,
      "balance": 4355.81
    }
  ]
  function active(cust){
     for(var i=0; i<cust.length; i++){
        if(cust[i].balance<3000 && cust[i].isActive===true){
            cust[i].isActive = false;
        }
        else if (cust[i].balance<3000 && cust[i].isActive===false){
            cust[i].isActive = true;
        }
     }
     return cust;
  }
  var u=active(customers);
  console.log(u);