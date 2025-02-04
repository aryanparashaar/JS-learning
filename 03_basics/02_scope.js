let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER:",a);
    }

    console.log(a);
     



function one(){
    const username = "Aryan"

    function two(){
        const website = "github"
        console.log(username);
        
    }
    // console.log(website);                           this will not execute because function of website is not here
    
    two()
}
one()


if(true) {
    const username = "Aryan"
    if (username ==="Aryan"){
        const website =" github"
        console.log(username + website);
        }
    // console.log(website); 
    } 
    // console.log(username);


    /**************************/
function addone(num){
    return num + 1
}

    addone(5)


const addTwo = function(num){
    return num + 2
}
addtwo(5)
           