let employees =[
    {empName : "jawith",salary:150000},
    {empName : "ahamed",salary:100000},
    {empName : "faaiz",salary:120000}
]

  let filterData = employees.filter((val,index,array) => {
    console.log(index)
    return val.salary>110000}) // 150000>110000
// let filterData = employees.filter(val => val.salary>110000).fill({id:1 ,name1:"xyz"}) // 150000>110000
// employees.filter(val => console.log(val))

// console.log(filterData);

// find return the value which is satisfied first condition
let filterDataByFind = employees.find((val,index,array)=>{
    console.log(val,index)
    return val.salary>100000
})
console.log(filterDataByFind)