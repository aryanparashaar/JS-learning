const score = 300

console.log(score);

const balance = new Number (200)                       // this will make the object purly number and tell that it is number in output
console.log(balance);

console.log(balance.toString().length);                // toString is for converting number to string and Length is to get lenght of object
console.log(balance.toFixed(2));                       // to fixed is ti get typed number in decimal form and 2 shows the limit 

const otherNumber = 123.7458
console.log(otherNumber.toPrecision(3));               /* getting the number in prescribed way , 3 will give the 124 (it round off the number and give the output acc. to precision limit */

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));         // insert commas in the digits , en-IN (in indian system)

/***************************************************maths********************************* */


console.log(Math.floor(4.9));                                      //gives value 4 which is min of round off
console.log(Math.min(3,5,1,6));
console.log(Math.max(2,54,56,5));

console.log(Math.random());                                        //gives any random value b/w 0 and 1
console.log((Math.random()*10)+1);                                 //random value will get multiplied with 10 and added 1 as declared


const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);









                                                       




