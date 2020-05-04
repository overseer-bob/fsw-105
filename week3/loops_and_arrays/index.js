//Pause and Practice: JavaScript Loops, Nesting Loops.
//Declare vars
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var firstExtraCreditArray = [2, 5, 435, 4, 3];
var secondExtraCreditArray = [1, 1, 1, 1, 3];
var thirdExtraCreditArray = [9, 3, 4, 2];

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];


//count number of items on list
function countItemOnList(nameOfList, item) {
    var numberOfItem = 0;
    for(i = 0; i < nameOfList.length; i++) {
        if(nameOfList[i] === item) {
            numberOfItem += 1;
        }
    }
    console.log(numberOfItem);
}

//Count number of "computer"
countItemOnList(officeItems, "computer");


//Determine if age 18 or older
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough");
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log("not old enough");
    }
}

//Personalized message
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max");
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");
    }
}

//More personalized message
for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let him in.");
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let her in.");
        }
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let him in.");
        } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let her in.");
        }
    }
}

//Print even or odd for numbers 0 - 100
for(i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

//Toggle light
function toggleLight(nameOfArray) {
    totalToggles = 0
    for(i = 0; i < nameOfArray.length; i++) {
        totalToggles += nameOfArray[i];
    }
    if(totalToggles % 2 === 0) {
        console.log("The light is off.");
    } else {
        console.log("The light is on.");
    }
}

toggleLight(firstExtraCreditArray);
toggleLight(secondExtraCreditArray);
toggleLight(thirdExtraCreditArray);