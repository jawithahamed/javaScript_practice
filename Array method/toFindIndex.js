let arr = [10,20,10,30,40,50,10]
// indexof read left to right ,so it gives index 0,searching 10

let newIndex = arr.indexOf(10,1)
//let newIndex = arr.indexOf(10,-1)
console.log(newIndex)

//lastIndexOf ,it reads right to left
let findIndexFromLast = arr.lastIndexOf(10)
console.log(findIndexFromLast)

