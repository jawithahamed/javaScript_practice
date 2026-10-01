let person1={
    uName :"jawith ahmed",
    hobbies: ["football","driving","bike ride"],
    familyDetails : {
        totalMembers:5,
        siblings :["a","b","c"]
    },
    walk(){
        console.log("i going to walk")
    }
}
for(let key in person1){
    console.log(person1[key]);
    
}

// array
let arr =[120,130,140]

for(let key in arr){
console.log(arr[key]);

}

//String

let str="script"

for(let key in str){
    console.log(str[key]);
    
}
