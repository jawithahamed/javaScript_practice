// charAt

let str = "hello"
console.log(str.charAt(str.length-1))

// charCodeAt 
let str1 = "javaaScript"

console.log(str1.charCodeAt(1));

// concat

let newStr = str.concat(" ",str1)
console.log(newStr);
//includes 
let str2 = "single Threaded"

console.log(str2.includes("i",3));

// indexOf 
let newStr1= "jawith"
console.log(newStr1.indexOf("a",2));

//LastindexOf

let newStr2 = "jawith"
console.log(newStr2.lastIndexOf("i",7));

//repeat 
let newStr3 = "java"
console.log(newStr3.repeat(3))

//replace / replaceAll 
let str4 ="js is a script lang - js"
console.log(str4.replace("js","jaavaScript"))

console.log(str4.replaceAll("js","javaScript"))

//slice
 let str5 = "single Threded"
 console.log(str5.slice(3,8));

 //subString  
 let str6 = "single thread"
 console.log(str6.substring(3));
 console.log(str6.substring(3,8));
 console.log(str6.substring(-3));
 console.log(str6.substring(8,0));
  // substring is similar to slice but it will not consider negative index ,if in case negative number is given ,it starts from zero 
 
 // split 
 let words = "My name is jawith"
 console.log(words.split(" ",3))
 console.log(words.split("is"))

 //startsWith 
 let words1 = " my name is jawith"
 console.log(words1.startsWith("j",11));
 console.log(words1.startsWith("n",3));

 //endsWith 
 console.log(words.endsWith("jawith"))
 console.log(words.endsWith("name",7))

 //toLowecase

 console.log(words.toLowerCase())

 //toUpperCase

 console.log(words.toUpperCase())
 
 //trim 
 //to remove the empty space

 console.log(words1.trim())
 
//trimStart /trimLeft
console.log(words.trimStart())

//trimEnd /trimright

console.log(words.trimEnd())
 









