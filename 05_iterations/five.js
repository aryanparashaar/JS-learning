const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);                                                   // use of `for each` with function method
// } )

// coding.forEach( (item) => {
//     console.log(item);                                                  // use of `for each` with arrow function
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);                                      // main purpose and explanation of `for each` 
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageFileName);
} )