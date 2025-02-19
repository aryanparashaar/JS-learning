// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}                                                         //for of will display each element of a content seperated.

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);          //in this method the entries are object                // this is map function.

for (const [key, value] of map) {
    console.log(key, ':-', value);                          //  in this method entries are string
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key of Object.keys(myObject)) {
    console.log(key, ':-', myObject[key]);
}