


var fight = function(enemy) {
    console.log(enemy);
    while(enemy.health > 0 && playerInfo.health > 0)
    {
        //Prompt to either fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerInfo.name + " has chosen to skip the fight!");
            //Confirm player would like to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //If the player skips, subtract gold else fight (true)
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip thisfight. Goodbye!");
                playerInfo.money = playerInfo.money - 10; 
                console.log("player money", playerInfo.money);
                break;
            }
        }

        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of 'playerInfo.attack' from 'enemy.health'
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);

            //Log a resulting message to the console so we know that it worked
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );

            //check enemy's health 
            if (enemy.health <= 0 ) {
                window.alert(enemy.name + " has died!");
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

            //Subtract the value of 'enemy.Attack' from the 'playerInfo.health'
            var damage = (enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage); 

            //Log a resulting message to the console so we know it worked
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
            );

            //check player's health 
            if (playerInfo.health <=0) {
                window.alert(playerInfo.name + " has died!");
                break;
            }

            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }      
        }

        else {
            window.alert("You need to chose a valid option. Try again!");
        }
    }

};

//function to start a new game 


var startGame = function() {
    //reset players stats
    playerInfo.reset();

    for(i=0; i< enemyInfo.length; i++) 
    {
        //Checks to see if player can enter new fight and lists round 
        if(playerInfo.health > 0)
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

        //Set enemy name in a more readable way 
        var pickedEnemyObj = enemyInfo[i];
        //Reset enemy health between rounds 
        pickedEnemyObj.health = randomNumber(40,60);
        //Passes enemy name into function
        fight(pickedEnemyObj);

        if(i < enemyInfo.length - 1 && playerInfo.health > 0 ){
            //Ask player to see if they want to access shop
            var storeConfirm = window.confirm("The fight is over, visit the store before continuing?");
            //if confirm is true, player accesses shop
            if (storeConfirm){
                shop();
            }
        }
    }

   //after loop ends, player either beats all enemies or runs out of health
   endGame();
};

//function to end game

var endGame = function() {
    //if player is still alive, they win!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money);
    }

    //if player is dead, they lose!
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?")

    if (playAgainConfirm){
        //restart game
        startGame();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back  soon!");
    }
};


//function to create shop
var shop = function() {

    //ask player what they want to do in the shop
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //take following action based on players shop action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth(); 
            break;
        case "UPGRADE":
        case 'upgrade':
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case 'leave':
            window.alert("Leaving the shop.");
            //do nothing and function ends
            break; 
        default: 
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to make a valid choice
            shop();
            break;
    }       

};

//function to randomily select a number between 40 & 60
var randomNumber = function(min, max) {
    var value = Math.floor((Math.random() * (max - min + 1)) + min);
    return value; 
};

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10; 
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health +=20;
            this.money -=7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack +=6;
            this.money -=7; 
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
   };
   console.log(playerInfo.name, playerInfo.attack,playerInfo.health, playerInfo.money);
   
var enemyInfo = [
       {
           name: "Roborto",
           attack: randomNumber(10, 14)
       },
       {
           name: "Amy Android",
           attack: randomNumber(10, 14)
       },
       {
           name: "Robo Trumble",
           attack: randomNumber(10, 14)
       }
   ];

//start game when page loads
startGame();