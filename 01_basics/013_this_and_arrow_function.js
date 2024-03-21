// const user={
//     username:"deepanshu",
//     price:999,
//     welcomeFunction : function(){
//         console.log(`Hi ${this.username} !! Welcome to the website`);
//     }
// }
// user.welcomeFunction()
// console.log(
//     user.welcomeFunction
// );
function temp() {
    let username="deepanshu"
    console.log(this.username);//only works in objects
    
}
temp()//undefined
const temp2=()=>{
    console.log(this);
}
temp2()