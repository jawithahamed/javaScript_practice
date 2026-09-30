

//normal function
function add(a,b,c){
    console.log(a+b+c)
}
add(10,20,30)

// currying

function add(a){
    return function (b){
        return function (c){
            console.log(a+b+c)
        }
    }
}
add(10)(20)(20)

let curry1=add(10)
let curry2=curry1(30)
curry2(40);

console.log(curry1)
console.log(curry2)

