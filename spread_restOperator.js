let hobbies = ["cricket","Football","basketBall"]
let hobbies1 = ["reader","writer"]
 let nerArray = [...hobbies,...hobbies1]

 hobbies[0]="handBall"

 console.log(hobbies,hobbies1,nerArray)


 let empDetail ={
    empId: "Jd2341",
    empName:"jawith" ,
    empRole:"react developer",

 }
 let team2 ={
    ...empDetail,
    empId:"FG6574",
    empSalary :"100000",
    team2Desig:"full stack developer",
 }
 console.log(team2)
 console.log(empDetail)

 //Rest parameter or Rest Operator
 
 function restParams(...arr){
   console.log(arr)
 }
 restParams(1,2,3,4,5,6)
 
