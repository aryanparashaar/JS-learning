console.log("A");
console.log("R");
console.log("Y");
console.log("A");
console.log("N");

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}
sayMyName()


function plusTwoNumbers(num1 , num2){
    console.log(num1 + num2);
    }
const result = plusTwoNumbers(3,4)
console.log("Result:", result); 


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
   }

   console.log(loginUserMessage("Aryan"));
   