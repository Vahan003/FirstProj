function createEmpl(name,surname,job){
    return {'name':name,'surname':surname,'job':job};
}
var person =createEmpl("John","Smith","actor");
console.log(person);
person.name = "Tom";
console.log(person);