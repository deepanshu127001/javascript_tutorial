//arrays
const array=[12,34,45,56]
const array2=array
console.log(Symbol(array));
console.log(Symbol(array2));

let arr=[1,2,3,4,5]
console.log(arr);
arr.unshift(0);//insert element at start 
console.log(arr);
arr.shift();//remove element from start
console.log(arr);
console.log(arr.includes(5));
console.log(arr.indexOf(5));
console.log(typeof arr);
const newArr = arr.join()//converts into string 
console.log(typeof newArr);


console.log("----------------------------");
console.log("----------------------------");

const arr1=[10,20,30,40,50,60,70]
console.log(arr1.slice(1,3));
console.log(arr1.splice(1,3));//it'll remove the specified elements from the array



