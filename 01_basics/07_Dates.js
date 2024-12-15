let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myNewDate = new Date(2024 ,0 ,15)
let myNewDate1 = new Date(2024 ,0 ,15 ,5 ,3)
let myNewDate2 = new Date("2024-0-15")
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()                                  // this will give date in milliSec.
console.log(myTimeStamp);
console.log(myNewDate.getTime());                             // get time for this date

console.log(Math.floor(Date.now()/1000));                     // converting milliSec. in sec. and floor is for removing decimal

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

`${newDate.getDay()} and the Time is`




