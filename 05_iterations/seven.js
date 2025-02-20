const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Simple map to add 10 to each number
const newNums = myNumbers.map((num) => num + 10);
console.log(newNums);                                                     // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chained map and filter operations
const modifiedNums = myNumbers
  .map((num) => num * 10)                                                 // Multiply each by 10
  .map((num) => num + 1)                                                  // Add 1 to each result
  .filter((num) => num >= 40);                                            // Keep numbers >= 40

console.log(modifiedNums);                                                // [41, 51, 61, 71, 81, 91, 101]
