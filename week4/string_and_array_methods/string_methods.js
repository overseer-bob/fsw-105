// Week 4 Pause and Practice: String Methods & Array Methods

//Return string in all caps followed by all lower case
function capitalizeAndLowercase(str) {
    let upperAndLower = str.toUpperCase() + str.toLowerCase();
    return upperAndLower;
}

console.log(capitalizeAndLowercase("Hello"));

//Returns half of the length rounded down
function findMiddleIndex(str) {
     let middleOfString = Math.floor(str.length / 2);
     return middleOfString;
}

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

//Returns first hald of given string
function returnFirstHalf(str) {
    let middleOfString = findMiddleIndex(str);
    let firstHalfOfString = str.slice(0, middleOfString);
    return firstHalfOfString;   
}

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

//First hald is capital and second half lower case
function firstHalfUppercaseSecondHalfLowercase(str) {
    let middleOfString = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, middleOfString);
    let secondHalf = str.slice(middleOfString)
    return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}

console.log(firstHalfUppercaseSecondHalfLowercase("Hello"));
console.log(firstHalfUppercaseSecondHalfLowercase("Hello World"));

//Capitalizes any character that follows a space.
function capitalize(str) {
    arrayOfString = str.split(" ");
    let capitalizeElement = []
    for(i = 0; i < arrayOfString.length; i++) {
        capitalizeElement.push(arrayOfString[i].charAt(0).toUpperCase()+arrayOfString[i].slice(1));
    };
    firstLetterUpperStr = capitalizeElement.join(" ");
    return firstLetterUpperStr;
}

console.log(capitalize("hey friends! practice practice practice!"));