function capMe(arr){

    arr[0] =arr[0].charAt(0).toUpperCase()+arr[0].slice(1);
    arr[1] =arr[1].charAt(0).toUpperCase()+arr[1].slice(1);
  return  arr;
}
var arr = new Array("dssd","sddsa");
console.log (capMe(arr));