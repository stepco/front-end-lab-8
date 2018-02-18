let reverseNumber = function(num){
    let newNumber = parseInt(String(num).split('').reverse().join(''));
    newNumber = newNumber * Math.sign(num);
    return newNumber;
}
//console.log(reverseNumber(668689));