const name = "deepanshu"
const repoCount = 10 
console.log(`my name is ${name} and repo count is ${repoCount}`);
const str1 = "deepanshu"
const str2 = "deepanshu"
console.log(str1 === str2);
const game = new String("deepanshu")
console.log(str1 === game);
console.log(game[0]);//d
console.log(game.__proto__);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.charAt(0));
console.log(str1.indexOf('d'));
console.log(str1.substring(0,4));//0-3
const slicedString = str1.slice(-3,1);
console.log(`${slicedString}---`);
const sampleString ="    deepanshu    ";
console.log(sampleString.trim());
const url ="https://deepanshu  singh/home   ";
console.log(url.trim().replace(' ','%20'));
 console.log( url.includes('deep'));
const gameName = "deepanshu-pro-grammer";
console.log(gameName.split('-'));