//Primitive (primitive data types are call by value )
//7
//String , Number , Boolean, null , undefined , Symbol , BigInt

//Reference Type (Non Primitive Type)
//Array , Objects , Fuctions
console.log(typeof null);

//Stack (primitive), heap (non primitive)
const id  = Symbol(123)
const anotherId = Symbol(123)
console.log(id);
console.log(id === anotherId);
const temp = 2343252563463453452345n//for bigint append n
console.log(temp);

let arr=[10,20,30]
for(const idx in arr){
    console.log(idx);
}
for(const val of arr){console.log(val);}