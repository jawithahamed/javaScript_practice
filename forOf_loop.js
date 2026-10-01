let arr=[10,20,30,40]

for(let hey of arr )
{
    console.log(hey)
}

// string 
let str = "jawith"
for( let char of str)
    {
    console.log(char)
}
// genFunction
function* genFuntion(){
    yield 10
    yield 10
    yield 10
}
let gen = genFuntion()

for(let val of gen){
    console.log(val)
}

