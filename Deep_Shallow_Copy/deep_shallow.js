//Deep copy

let a=10;
let b=a;

a=20;

console.log(a,b);

let obj1 ={
    name1:"Murugesan",
    role: "Developer"
}

let obj2 = {...obj1}
obj2.name1 = "kesavan"
console.log(obj1,obj2);

//Shallow Copy

let person ={
    name1:"youtuber",
    role:"hey",
    hobbies:{
        cricket:"t20 player",
        football: "60 mins"
    }
}

let person2 ={...person}
person.role = "video creater"
person.hobbies.cricket = "Odi player"
console.log(person,person2);

