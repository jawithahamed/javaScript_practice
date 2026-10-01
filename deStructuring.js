let arr=[10,20,30,40,1,2,3,4,5,6]

// let fval =arr[0]

// console.log(val)

// let [a,,,d]= arr
// console.log(a,d)

// let [a1,a2,a3,...a4] = arr
// console.log(a1,a2,a3,a4)

let nestArr = [1,2,3,4,[10,20,[30,40]]]

let [a,b,c,d,[a1,b1,[a2,b2]]] = nestArr
console.log(a,b,c,d,a1,b1,a2,b2)