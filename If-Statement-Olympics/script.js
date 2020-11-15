// Preliminaries
if (5 > 3){
  console.log("is greater than")
}
var cat = "cat"
var dog = "dog"
if (cat.length == 3){
  console.log("is the length")
}
if (cat.length == dog.length){
  console.log("is the same")
} else {
  console.log("not the same")
}
// Bronze Medal
var person = {
  name: "Bobby",
  age: 12
}
if (person.age >= 18){
  console.log(person.name + " " + "is allowed to go to the movie")
} else {
  console.log(person.name + " " + "is not allowed to go to the movie")
}
if (person.name[0] == "B"){
  console.log(person.name + " " + "is allowed to go to the movie")
}
if (person.name[0] == "B" && person.age >= 18) {
  console.log(person.name + " " + "is allowed to go to the movie")
} else {
  console.log(person.name + " " + "is not allowed to go to the movie")
}
// Silver Medal
if (1 === "1") {
  console.log("strict")
} else if (1 == "1"){
  console.log("loose or abstract")
} else {
  console.log("not equal at all")
}
if (1 <= 2 && 2 == 4){
  console.log("yes")
} else {
  console.log("no")
}
// Gold Medal
if (typeof dog === "string"){
  console.log("String")
} else {
  console.log("not a string")
}
if (typeof true === "boolean"){
  console.log("Boolean")
} else {
  console.log("not Boolean")
} 
if (typeof myVar === "undefined"){
  console.log("Undefined")
} else {
  console.log("Defined")
}
if ("s" > 12){
  console.log("s is greater than 12")
} else {
  console.log("s and 12 cannot be compared")
}
if ("a" > 10){
  console.log("a is greater than 10")
} else {
  console.log("a and 10 cannot be compared")
}
if ("b" > 0){
  console.log("b is greater than 0")
} else {
  console.log("b and 0 cannot be compared")
}
var myNum = 10
if (myNum % 2 == 0){
  console.log("even")
} else {
  console.log("odd")
}