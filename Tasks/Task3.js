function addPrefix(str,prefix){
    if(str!== undefined && prefix !== undefined)
    return prefix+str;
    else
    return "--";
}
function addSuffix(str,suffix){
    if(str!== undefined && suffix !== undefined)
    return str+suffix;
    else
    return "--";
}
console.log(addPrefix("23",'$'));
console.log(addSuffix("23","$"));