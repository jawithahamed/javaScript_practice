let arr = [10,5,100,30,60,2]
let newarr=arr.sort((a,b)=>{
    return a-b

})
console.log(newarr)
let newArr2 = arr.sort((a,b)=>{
    return b-a
})
console.log(newArr2)

let newArr =[10,20,30,1,4,true,' jawith']

let decending=newArr.sort((a,b)=>{
    return a-b
})
console.log(decending)

//Some & Every

let arr4 = [1,2,3,4,5]

let value = arr4.some((ele,ind,arr)=>{
    return ele%2==0
})
console.log(value)

let value1 = arr4.every((ele,ind,arr)=>{
    return ele%2==0
})
console.log(value1)

