const readline = require("readline-sync"); //Include readline-sync

//Init variables for starting the game.
const title = `

███████ ███████  ██████  █████  ██████  ███████ 
██      ██      ██      ██   ██ ██   ██ ██      
█████   ███████ ██      ███████ ██████  █████   
██           ██ ██      ██   ██ ██      ██      
███████ ███████  ██████ ██   ██ ██      ███████ 
                                                
                                                
        ██████   ██████   ██████  ███    ███    
        ██   ██ ██    ██ ██    ██ ████  ████    
        ██████  ██    ██ ██    ██ ██ ████ ██    
        ██   ██ ██    ██ ██    ██ ██  ██  ██    
        ██   ██  ██████   ██████  ██      ██    
                                                
                                                

`;
console.log(title);

//get the players name
const playerName = readline.question("What is your name? ");

//intro and room info
const intro = `\nWelcome to my Escape Room, ${playerName}. Hopefully you don't die.\n`
const theRoom = `${playerName}, you are standing in the middle of a dark room. On the
wall to your left you notice a hole, about halfway up.
In the center of the room sits a large wooden box.\n`

//players stats
let isAlive = true;
let hasKey = false;
let options = ["Put hand in hole.", "Look for the key.","Open the door."];
//welcoming and starting game
console.log(intro);
console.log(theRoom);

//game loop
while(isAlive == true){
    menuId = readline.keyInSelect(options,"Select 0-3",{limit: '$1-4'})
    switch (menuId) {
        case 0: 
                console.log(`Oh, no ${playerName}, it was a trap! Your arm gets stuck in the wall. Sorry, you died...`);
                isAlive = false;
            break;

        case 1: 
                if (hasKey==false){
                    console.log('You found the Key inside the large wooden box.\n');
                    hasKey = true;
                    break; 
                } else if (hasKey==true){
                    console.log('You already have the key, bruh..');
                    break;
                }

        case 2: 
                if (hasKey==false){
                    console.log('You try to turn the door handle. It is locked.\n');
                    break;
                } else if(hasKey == true) {
                    console.log(`You use they key to unlock and open the door.\nCongratulations, ${playerName}, you escaped alive!`);
                    isAlive = false;
                 break;
            }
        default: 
            isAlive=false;
            break;
    }
}