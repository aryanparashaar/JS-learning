const myArr = [1,2,3,4,5]
console.log(myArr);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[1]);

/******** array Methods **********/

myArr.push(4)                                   // insert 6 in backward of array
myArr.pop()                                     // remove last ward of array

myArr.unshift(9)                               // insert 9 in starting of array
myArr.shift()                                  // remove first word of array

const newArr = myArr.join()                    //join will make the array into a string
console.log(myArr);
console.log(newArr);

// slice splice
console.log("A", myArr);                       //simple array without any change

const myn1 = myArr.slice(1,3)
console.log(myn1);                             //Slice applied result (slice will not show element of second comm. {e.g:in this 3rd element will not shown})

console.log("B", myArr);                       // array not changed

const myn2 = myArr.splice(1,3)

console.log("C", myArr);                      // splice applied array (the array will change bcs splice pick the elements asked in command(including 1st and last both) and delete them from parent array )
console.log(myn2);

