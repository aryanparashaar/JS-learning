// Immediately Invoked Function Expressions (IIFE)


(function code(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                     //no need of writing code() to run code bcoz functn already wraped in ()

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )
('Aryan')  