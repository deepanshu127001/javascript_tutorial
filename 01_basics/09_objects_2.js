const tinderUser = {}
tinderUser.id = "123abc";
tinderUser.name = "john";
tinderUser.isLoggedIn = false;

const regularUser = {
    emailId : "regUser@gmail.com",
    fullName : {
        firstName : "john",
        lastName :  "doe"
    }
}

//combining two objects and making it into one const obj1 = {1: "a", 2: "b"}
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b" }
//merge two objects and make it one 
// const obj3 = { obj1, obj2}//❌
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);
const finalObject  = {...obj1,...obj2}
console.log(finalObject);


const users = [
    {
        id:1,
        emailId:"fake@mail"
    },
    {
        id:1,
        emailId:"fake1@mail"
    },
    {
        id:1,
        emailId:"fake2@mail"
    },
    {
        id:1,
        emailId:"fake3@mail"
    }
]




console.log(users[2].emailId);
//get all keys of an object
console.log(Object.keys(tinderUser));//will return an array of keys
console.log(Object.values(tinderUser));//will return an array of values
console.log(Object.entries(tinderUser));//each key value will be an array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true

const course={
    coursename:"cybersec",
    price:999,
    instructor:"meh"
}
//object destructuring 
const {instructor}=course
// renaming the keys
const {instructor:teacher }=course
console.log(teacher);