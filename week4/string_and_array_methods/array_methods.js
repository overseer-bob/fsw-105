let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetabels = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExercise() {
    vegetabels.pop();
    console.log("vegetables: ", vegetabels);
    fruit.shift();
    console.log("fruit: ", fruit);
    let indexOfOrange = fruit.indexOf("orange");
    console.log(indexOfOrange);
    fruit.push(indexOfOrange);
    console.log("fruit: ", fruit);
    let lengthOfVegetablesArray = vegetabels.length;
    console.log(lengthOfVegetablesArray);
    vegetabels.push(lengthOfVegetablesArray);
    console.log("vegetables: ", vegetabels);
    let food = fruit.concat(vegetabels);
    console.log(food);
    food.splice(4, 2);
    console.log(food);
    food.reverse();
    console.log(food);
    return food.join();
}

console.log(arrayExercise());