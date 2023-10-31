let score = "33a"
// console.log(Number(score));
//33 Number
//33a NaN
let num=1

// console.log(Boolean(num));
// console.log(Boolean(""));
// console.log(Boolean("str"));
// console.log(String(num));

//********************* Operations ********************** */
console.log("2">0);//2 will be converted to number 


console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
/**
 * The reason is that an equality check == and comparisons > < >= <= work differently
 * Comparisons convert null to a number treating it as 0
 * that's why (null>=0) is true and (null >0) is false
 */