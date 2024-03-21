function calculateCartPrice(...prices){//rest operator
    let sum = 0;
    prices.forEach(element => {
        sum+=element
    });
    return sum
}
console.log(calculateCartPrice(10,20,30));