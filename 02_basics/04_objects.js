const User = new Object()           // this is singleton object
const nUser = {}                    // this is non-singleton object
/* no difference in output */

User.id = "123abc"
User.name = "alpha"
User.isLoggedIn = false

console.log(User);


const regularUser = {
    email : "user@google.com",
    fullname : {
        userfullname : {
            firstname : "Aryan",
            lastname : "Parashar"
        }
    }
}
console.log(regularUser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const obj4 = {...obj1,...obj2,...obj3}


console.log(Object.keys(User));
console.log(Object.values(User));


const product = {
    productname : "javascript",
    price : "999",
    producer  :"Aryan"
}

const {producer : instructor} = product                      // in this we named producer as instructur 
console.log(producer);                                       // both the lines are same and will give same output
console.log(instructor);                                     // this method is called de-structure method

