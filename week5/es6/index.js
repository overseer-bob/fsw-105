//replacing var with const and let
const name = "John";
let age = 101;

function runForLoop(pets) {
    let petObjects = [];
    for(let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] };
        let name;
        if(pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot"
        };
        console.log("pet name: ", name)
        pet.name = name;
        petObjects.push(pet)
    };
    console.log("man name: ", name);
    return petObjects;
};
runForLoop(["cat", "dog"]);

//re-write .map using arrow function
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    result = arr.map(carrot => ({ type: "carrot", name: carrot }));
    return result;
};

console.log(mapVegetables(carrots));

//re-write .filter using an arrow function
const people = [
    {name: "Princess Peach", friendly: false},
    {name: "Luigi", friendly: true},
    {name: "Mario", friendly: true},
    {name: "Bowser", friendly: false}
]

function filterForFriendly(arr) {
    result = arr.filter(person => person.friendly === true);
    return result;
}
console.log(filterForFriendly(people));

//re-write to be arrow functions
let doMathSum = (a, b) => a + b;
console.log(doMathSum(3, 6));
let produceProduct = (a, b) => a + b;
console.log(produceProduct(1, 2));

//printString Function

let printString = (firstName = "Jane", lastName = "Doe", age = 100) => "Hi " + firstName + " " + lastName + " how does it feel to be " + age + "?";
console.log(printString("Kat", "Stark", 40));

//using template literals
let printStringTemplateLiterals = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName} how does it feel to be ${age}?`; 
console.log(printStringTemplateLiterals("Kat", "Stark", 40));

//use shorthand syntax to mkae filter take up one line
const animals = [
    {type: "dog", name: "theodore"},
    {type: "cat", name: "whiskers"},
    {type: "pig", name: "piglette"},
    {type: "dog", name: "sparky"}
];

function filterForDogs(arr) {
    return arr.filter(animal => animal.type === "dog" ? true : false);
};
console.log(filterForDogs(animals));

//using template literals write function takes location and name as parameters and outputs formatted message
let printFormatted = (location, name) => `Hi ${name}! \n
Welcome to ${location}. \n
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;
console.log(printFormatted("Hawaii", "Janice"));