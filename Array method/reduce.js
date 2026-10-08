let arr = [10,2,3,4,5]

let totalVal = 0

for (let i = 0; i < arr.length; i++) {
    totalVal = totalVal + arr[i]
    
}
console.log(totalVal);

let total = arr.reduce((acc,cElement,index,array)=>{
    return acc + cElement
},0)

// 1st => acc + cElement => 0+10 => 10
// 2nd => 10 + 2 => 12
// 3rd => 12 + 3 =>15
// 5th => 19 +5 => 24
console.log(total)


let employees = [
    {eName : "zyd", salary : 10000},
    {eName : "dbf", salary : 187000},
    {eName : "jfb", salary : 90000},
    {eName : "lmd", salary : 2300},
]
let calculateSalary = employees.reduce((acc,cElement)=>{
    return acc + cElement.salary
},0)
console.log(calculateSalary)
