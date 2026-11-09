//Deep copy

// let a=10;
// let b=a;

// a=20;

// console.log(a,b);

// let obj1 ={
//     name1:"Murugesan",
//     role: "Developer"
// }

// let obj2 = {...obj1}
// obj2.name1 = "kesavan"
// console.log(obj1,obj2);

//object - //Shallow Copy

// let person ={
//     name1:"youtuber",
//     role:"hey",
//     hobbies:{
//         cricket:"t20 player",
//         football: "60 mins"
//     }
// }
  // deep copy
// let person2 ={...person,hobbies:{...person.hobbies}}
// person.role = "video creater"
// person.hobbies.cricket = "Odi player"
// console.log(person,person2);

// let person3 =JSON.stringify(person)

// let newObj = JSON.parse(person3);

// console.log(newObj);
 
//Array - Shallow copy
let arr = [1,2,3,[4,5,6]]

let arr1 = [...arr]
// Deep Copy
let newArray =JSON.parse( JSON.stringify( arr))
arr[0] = "one"
arr[3][0] = "four"

newArray[3][1] = "five"
console.log(arr,arr1);
console.log(newArray);




