const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));//100.00
const otherNumber = 1233.345;
console.log(otherNumber.toPrecision(4));
const number = 1000000;
console.log(number.toLocaleString("en-IN"));//format the number according to indian standards
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

//++++++++++++++++++++++++++   Maths    ++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-45));//convert -ve value to positive 