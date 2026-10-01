let userProfile ={
    userName : "jawith",
    age : 30,
    hairColor :"black",
    eyeColor : "brown",
    eat : function(){
        console.log("i am gonna eat ice creame")
    }

}
console.log(userProfile.eat());


let vehicle = {
    vehicleType : "fourWheeler",
    "price" :200000,
    fuelType : "petrol"
}
console.log(vehicle["fuelType"]);

//sort and assigned property
//Dynamic property

let uName ="jawith"
let age = 30

let person1 ={
    uName : uName,
    age
}

console.log(person1.uName,person1.age)


let dynamicProp = "emplyeeId"

let person2 = {
    uName,
    age,
    [dynamicProp]:"fe42dr2"
}
console.log(person2)
console.log(person2.uName,person2.age,person2[dynamicProp])
