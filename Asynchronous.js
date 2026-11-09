function f1(){
    console.log("first");
    
}
function f2(){
    console.log("second");
    
}
function f3(){
    console.log("third");
    
}
f1();
setTimeout(f2,2000)
f3()
//Event Loop -->    
//Micro task Queue -- First priority
    // promise


//Macro Task Queue -- second priority
    //setTimeout
    //setInterval

