const name = "Aryan"
const repoCount = 10

console.log("hello my name is "+ name + " my repoCount is "+ repoCount);               // This is old method

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);              // New and modern method

const gameName = new String ('piggy-panda')                   //new method of declaration of new string , this method is more informative
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,6)                      // last value will not be included i.e. 6th value is not included in this
                                                               //  and counting will start from 0

console.log(newString);

const anotherString = gameName.slice(-4,5)                    //negative value will start counting as reverse
console.log(anotherString);

const newNextString = "      Aryan        "
console.log(newNextString);
console.log(newNextString.trim());                            // trim will remove extra spaces 

const url = "https://aryan.com/aryan%10parashar"
console.log(url.replace("%10","_"));

console.log(gameName.split(_));




