
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10; 
console.log(playerName, playerAttack,playerHealth, playerMoney);

var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor((Math.random * 21))+ 40;
var enemyAttack = 12; 

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0)
    {
        //Prompt to either fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
            //Confirm player would like to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //If the player skips, subtract gold else fight (true)
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip thisfight. Goodbye!");
                playerMoney = playerMoney - 10; 
                console.log("player money", playerMoney);
                break;
            }
        }

        if (promptFight === "fight" || promptFight === "FIGHT") {
            //Subtract the value of 'playerAttack' from 'enemyHealth'
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);

            //Log a resulting message to the console so we know that it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //check enemy's health 
            if (enemyHealth <= 0 ) {
                window.alert(enemyName + " has died!");
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            //Subtract the value of 'enemyAttack' from the 'playerHealth'
            var damage = (enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage); 

            //Log a resulting message to the console so we know it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health 
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
                break;
            }

            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
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
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10; 

    for(i=0; i< enemyNames.length; i++) 
    {
        //Checks to see if player can enter new fight and lists round 
        if(playerHealth > 0)
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

        //Set enemy name in a more readable way 
        var pickedEnemyName = enemyNames[i];
        //Reset enemy health between rounds 
        enemyHealth = randomNumber(40,60);
        //Passes enemy name into function
        fight(pickedEnemyName);

        if(i < enemyNames.length - 1 && playerHealth > 0 ){
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney);
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
            //check to see if player has enough gold
            if (playerMoney >= 7) {
            //increase health and decrease money
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                
            }

            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case 'upgrade':
            //check to see if player has enough money
            if (playerMoney >= 7) {
                //increse attack and decrease money
                window.alert("Upgrading player's attack by 6 for every 7 dollars.");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money!");
            }
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

//start game when page loads
startGame();