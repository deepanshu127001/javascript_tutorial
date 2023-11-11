
//object literals
//by default keys like name age is string type
const mySymbol = Symbol("key1")//how to use this variable as key in object ans: using square bracket
let number=10
const JsUser ={
name: "Deepanshu",
"full Name" : "Deepanshu Singh",
age: 18,
location: "Jaipur",
email: "deepanshu@google.com",
isLoggedIn: false,
[mySymbol]:"value1",
[number]:45,
lastLoginDays: ["Monday", "Saturday"]
}
//accessing the value 
console.log(JsUser.isLoggedIn);
console.log(JsUser["isLoggedIn"]);
console.log(JsUser["full Name"]);
// console.log(typeof JsUser.number);
console.log(JsUser[number]);
console.log(JsUser[mySymbol]);
console.log(JsUser);
//what if we don't want to change the value of the object 
//use freeze method which will not throw error but value will not be shown
// Object.freeze(JsUser)
JsUser.name="Ani"//no error but value will be Deepanshu

JsUser.greet = function greeting1() {
    console.log("Hello");
}
console.log(JsUser.greet);
JsUser.greet()
JsUser.greet2=function greeting2() {
    console.log(`Hello , ${this.name}`);
}
JsUser.greet2()


