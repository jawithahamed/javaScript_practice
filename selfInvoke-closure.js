//normal function
// function normal(){
//     console.log("executed whenever i call")
// }
// normal();

// self invoke funtion or IIFE - Immediatetely Invoked Function Expression

(function (){
    console.log("self invoked funtion")
})

// (function (){
//     console.log("hi")
// })

//closure

function outerFuntion(){
    function innerFuntion(){
        console.log("hi from inner funtion")
    }

    return innerFuntion
} 
let innerFun=outerFuntion()
innerFun();