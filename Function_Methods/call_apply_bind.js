// let employee = {
//     eName : "jawith",
//     eSalary : 1000,
//     introYourself : function(a,b){
//         console.log(a + b);
//         console.log(this.eName);
//     }
// }

// var eName = "ahamed"
// let employee1 = {
//     eName : "jawith",
//     eSalary : 1000,
//     introYourself : (a,b)=>{
//         console.log(a + b);
//         console.log(this.eName);
//     }
// }
// employee1.introYourself(10,20)
//console.log(employee.eName);
//employee.introYourself(5,6)
let person ={
    pFName : "inamul",
    pLName : "hussain"
}

let person1 = {
    id : "jdb123",
  //  pFName : "jawith",
    //pLName : "ahamed",
    introYourself : function(a,b){
        console.log(this.pFName +" "+ this.pLName+ (a+b))
        return (a+b)
    }
}
person1.introYourself.call(person,10,20)
person1.introYourself.apply(person,[100,200])

let newFun =person1.introYourself.bind(person,900,200)
console.log(newFun());
