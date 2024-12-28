



const mySym = Symbol("key1")

const JsUser = {                          /*********these are the keys of a object (upto 15)******/
    name : "Aryan",
    "full name" : "Aryan Parashar",                               //this value can't accessed as.... console.log(JsUser.full name)
    [mySym] : "mykey1",
    age: 18,
    location : "Sonipat",
    email : "aryan@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["monday","saturday"]
    }

    console.log(JsUser.email);                                      //not good method
    console.log(JsUser["email"]);                                   // good method
    console.log(JsUser["full name"]); 
    console.log(typeof JsUser[mySym]);
                                  
JsUser.email = "aryan@chatgpt.com"                                  // change the values of keys of objects
//Object.freeze(JsUser)                                               // freeze the keys
    
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js User");
}
JsUser.greeting2 = function(){
    console.log(`hello Js User, ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


