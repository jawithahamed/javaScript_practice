let person ={
    name : "jawith",
    age: 22,
}
console.log(person.name)

//object.create
let newObj = Object.create(person)
newObj.location = "chennai"
// console.log(newObj.__proto__); 
// console.log(newObj.age);
console.log(newObj)

//object.assign 
//used to merge the two array or merge two object
let person1 ={
    id : "fg123",
    name :"jawith"
}
let newObj1=Object.assign(person1,{role:"developer",salary : 1000})
console.log(person1,newObj1)
 

//Object.entries

let employee ={
    eName: "ahamed",
    eRole:"front end dev"

}
let multiArr = Object.entries(employee)
multiArr.push(["name","ASKAR"])
console.log(multiArr);


//Object.fromEntries

//change back to normal object from multidimensional array

let normalObj = Object.fromEntries(multiArr)
console.log(normalObj)

//object.keys
//used to store keys in array from object
let onlyKeys =Object.keys(normalObj)
console.log(onlyKeys)

//object.values 
let onlyVal = Object.values(normalObj)
console.log(onlyVal)

//object.freeze
//used to freeze the new value

let newObj2 = {
  id:1
}
Object.freeze(newObj2)
newObj2.name1 = "javascript"

console.log(newObj2)

//object.isFrozen
//used to check whether the object is freeze or not

console.log(Object.isFrozen(newObj2))

