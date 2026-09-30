function* generatorFuntion(){
    yield "first value"
    yield "second value"
    yield "third value"
    return  "finished"

}
let gen=generatorFuntion()

console.log(gen.next().value)
console.log("executing after the firts yield")
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

function* url(){
    yield "https:/"
    yield "www.ahamed.com/"
    yield "content"
}
let origin1=url()
console.log(origin1.next().value); 
console.log(origin1.next().value); 
console.log(origin1.next().value); 
console.log(origin1.next().value); 

