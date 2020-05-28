const readline = require("readline-sync");

console.log(` 
 #######                      ######                         
    #     #    #  ######      #     #  ####    ##    #### 
    #     #    #  #           #     # #   ##  #  #   #    # 
    #     ######  #####       ######  #  # # #    #  #    # 
    #     #    #  #           #     # # #  # ######  #    # 
    #     #    #  #           #     # ##   # #    #  #    # 
    #     #    #  ######      #     #  ####  #    #  ####   `);


//create player character
const playerName = readline.question('What is your name? ');
let playerCharacter = {
    name: playerName,
    hp: 20,
    minAttackPower: 1,
    maxAttackPower: 5,
    inventory: [],
    attack: function() {
        return Math.floor(Math.random() * (this.maxAttackPower - this.minAttackPower + 1)) + this.minAttackPower;
    },
    runAway: function() {
        return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    },
    rest: function() {
        return Math.floor(Math.random() * (10 - 3 + 1)) + 3;
    }
};

console.log(`Welcome to The Road, ${playerCharacter.name}.`)
console.log("Here you will continue walking down the road fighting random monsters, and collecting their coins.")
console.log("Here are a list of commands you can use: 'w' to move down the path, 'attack' to fight any monsters present, 'run' to runaway from any monsters present, 'Print' to view your hp and inventory, and 'q' to quit the game.")

//monsters in game
let monstersInGame = [];
let monsterInRoom = [];
let isEncounter = false;

//items
let items = ["Gold Coin", "Silver Coin", "Copper Coin"];

let awardRandomItem = function() {
    return playerCharacter.inventory.push(items[Math.floor(Math.random() * items.length)]);
};


//creates new monsters with stats
class MonsterCreator {
    constructor(name, hp, minAttackPower, maxAttackPower) {
        this.name = name,
        this.hp = hp,
        this.minAttackPower = minAttackPower,
        this.maxAttackPower = maxAttackPower;
    }
    attack() {
        return Math.floor(Math.random() * (this.maxAttackPower - this.minAttackPower + 1)) + this.minAttackPower;
    }
}
;

//creating monsters and putting them in the game
monstersInGame.push(new MonsterCreator("Goblin", 3, 1, 3));
monstersInGame.push(new MonsterCreator("Orc", 5, 1, 5));
monstersInGame.push(new MonsterCreator("Giant", 10, 1, 7)) 

//random monster encounter generator
let monsterEncounterGen = function() {
    targetNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(targetNumber == 3) {
        isEncounter = true;
         return monsterInRoom.push(monstersInGame[Math.floor(Math.random() * monstersInGame.length)]);
    };
};

//room info
let walking = "You walk further down the path.";




//game loop
while(playerCharacter.hp > 0) {
    playerCommands = readline.question("What action will you take: ");
    if(playerCommands == "w" && isEncounter == true) {
        console.log("You can't do that right now, you are being attacked");
    } if(playerCommands == "w" && isEncounter == false) {
        console.log(walking);
        monsterEncounterGen();
        if(isEncounter == true) {
            console.log(`A ${monsterInRoom[0].name} is running towards you!`);
        };
    } if(playerCommands == "run" && isEncounter == true) {
        if(playerCharacter.runAway() == 2) {
            console.log(`You ran away from the ${monsterInRoom[0].name}`);
            monsterInRoom = [];
            isEncounter = false;
        } else {
            console.log("You were not able to run away.");
            playerCharacter.hp -= monsterInRoom[0].attack();
            console.log(`The ${monsterInRoom[0].name} attacks you. Your HP is now ${playerCharacter.hp}.`);
        };
    } if(playerCommands == "attack" && isEncounter == false) {
        console.log("There is nothing to attack");
    } if(playerCommands == "attack" && isEncounter == true) {
        console.log(`You attack the ${monsterInRoom[0].name}.`);
        monsterInRoom[0].hp -= playerCharacter.attack();
        if(monsterInRoom[0].hp <= 0) {
            console.log(`You killed the ${monsterInRoom[0].name}!`);
            awardRandomItem()
            console.log(`You found a ${playerCharacter.inventory[playerCharacter.inventory.length -1]} on the ${monsterInRoom[0].name}.`);
            console.log(`The ${playerCharacter.inventory[playerCharacter.inventory.length -1]} has been added to your inventory.`);
            monsterInRoom = [];
            isEncounter = false;
            if(playerCharacter.hp < 20) {
                playerCharacter.hp += playerCharacter.rest();
                if(playerCharacter.hp > 20) {
                    playerCharacter.hp = 20;
                };
            };
            console.log(`You rest a short time after the fight. Your current HP is now ${playerCharacter.hp}.`);
        } else if (monsterInRoom[0].hp > 0) {
            playerCharacter.hp -= monsterInRoom[0].attack();
            console.log(`The ${monsterInRoom[0].name} attacks you. Your HP is now ${playerCharacter.hp}.`);
        };
    } if (playerCommands == "q") {
        break;
    } if(playerCommands == "Print" || playerCommands == "print") {
        console.log(`Name: ${[playerCharacter.name]}\nCurrent HP: ${playerCharacter.hp}\nInventory items: ${playerCharacter.inventory}`);
    };
};

if(playerCharacter.hp <= 0) {
    console.log(`${playerCharacter.name}, you have been killed! Lets see all of the coins you collected. ${playerCharacter.inventory}.\nYou did great, see you again soon!`);
};