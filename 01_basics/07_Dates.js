let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof Date);//object
let myCreatedDate = new Date(2023,0,23);//year month date
let myCreatedDate2 = new Date(2023,0,23,5,3);//year month date hour minutes
console.log(myCreatedDate.toString());
console.log(myCreatedDate2.toLocaleString());