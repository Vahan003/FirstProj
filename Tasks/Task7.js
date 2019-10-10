var Stack = {
    objSt: {},
    point: 0,
 StackS : function(value){
    this._id = Math.round( 100*Math.random(0.1)*1000000); // Random ID
    this._value = value;
 },
 Push : function(value){
     var point = Math.round(Math.random(0)*10000); // Random point
    Stack.objSt[`p${point}`] = new Stack.StackS(value); // Crate new element with uniqe point & ID
    Stack.point = point; // Save last point, it is used in Pop
 },
 Pop : function(){
     var val =  Stack.objSt[`p${Stack.point}`]._value;
     delete  Stack.objSt[`p${Stack.point}`]; // Delete last element
     return val;
 },
 Drop : function(){
    Stack.objSt = {};
 }
};


var a = 5;
Stack.Push(a);
Stack.Push(6);
Stack.Push(7);
Stack.Push(8);

var b = Stack.Pop();
console.log(Stack);
console.log(b);

//Stack.Drop();