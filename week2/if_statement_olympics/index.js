 //if statment exercise for FSW-105 week 2

//declaring variables
var catString = "cat";
var dogString = "dog";
var myNum = 10;
var person = {
    name: "Bobby",
    age: 12
};

// 5 is greater than 3
if(5 > 3){
    console.log("is greater than");
}

//length of cat
if(catString.length == 3){
    console.log("is the length");
}

//compare cat and dog strings
if(catString === dogString){
    console.log("is the same");
} else{
    console.log("not the same");
}

//only allow if person age is 18 or older.
if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie.");
} else{
    console.log(person.name + " is not allowed to go to the movie.");
}

//only allow if person name starts with "B"
if(person.name.charAt(0) === "B"){
    console.log(person.name + " is allowed to go to the movie.");
} else{
    console.log(person.name + " is not allowed to go to the movie.");
}

//only allow if person name starts with "B" and older than 18
if(person.name.charAt(0) === "B" && person.age > 18){
    console.log(person.name + " is allowed to go to the movie.");
} else{
    console.log(person.name + " is not allowed to go to the movie.");
}

//strict, loose, type check
if(1 === "1"){
    console.log("strict");
} else if(1 == "1"){
    console.log("loose");
} else{
    console.log("not equal at all");
}

//less than or equal to, and(&&)
if(1 <= 2 && 2 ===4){
    console.log("yes");
}

//check if "dog" is string
if (typeof dogString == "string") {
    console.log("dog is a string.");
} else {
    console.log("dog is not a string.");
}

//check if true is a boolean
if (typeof true == "boolean") {
    console.log("is a boolean");
} else {
    console.log("is not a boolean");
}

//check if "s" greater than 12 and a few more
if ("s" > 12) {
    console.log("s is greater than 12");
} else if("s" > 10) {
    console.log("z is not greater 10");
} else if(10 > 9) {
    console.log("10 is greater than 9");
}

//ternary myNum even or odd
myNum % 2 == 0 ? console.log("myNum is even") : console.log("myNum is odd");