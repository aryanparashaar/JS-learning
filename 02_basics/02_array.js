const marval_heros = ["thor", "spidarman", "batman"]
const dc_heros = ["superman", "ironman", "flash"]

// marval_heros.push(dc_heros)

console.log(marval_heros);
// console.log(marval_heros[3][2]);                                        // [3][2] it shows 3 element and 2 sub-element


const new_heros = marval_heros.concat(dc_heros)                            // this operator have limitations of adding number of arrays
console.log(new_heros);

const allNewHeros = [...marval_heros, ...dc_heros]                         // this is spread operator which is used to make a new array or string 
console.log(allNewHeros);                                                  // it doesn't have the limitation of adding number of arrays


const array1 = [1,2,3,[4,5],6,[7,[8,9]]]
const another_array1 = array1.flat(Infinity)                               //flat operator will make the upper array in a single array by removing sub-array brackets
console.log(another_array1);                                               // infinity will tell the depth of the flat operator to apply


console.log(Array.from("Aryan"));                                          // asking it to covert it a array
console.log(Array.from({name : "Aryan"}));                                 // we have given and {object} and it can't convert it as a array so it will give [] empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
