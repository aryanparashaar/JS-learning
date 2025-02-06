const user = {
    username : "Aryan",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Github`);

        console.log(this);                                //local this :-shows context available in it 
        
    }
}
user.welcomeMessage()
user.username = "sonu"
user.welcomeMessage()

console.log(this);                          //global this :- shows context available globally but here is nothing globally so it will show empty   


function room(){
    let username = "Aryan"
    console.log(this.username);
    }
    room()

    // const chai = function () {
//     let username = "Aryan"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "Aryan"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Aryan"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()