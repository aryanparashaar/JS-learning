const accountId = 16043
let accountEmail = "aryan.16043@google.com"
var accountPassword = 12345
accountCity = "jaipur"

// accountId = 2   //not allowed
// preffer not to use var bacause of issue in block scope and functional scope 

accountEmail = "aryan.123@g.com"
accountPassword = 212121
accountCity = "banglore"
let accountState;

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])