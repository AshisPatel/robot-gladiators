
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10; 
console.log(playerName, playerAttack,playerHealth, playerMoney);

var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
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
            enemyHealth = enemyHealth - playerAttack;

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
            playerHealth = playerHealth - enemyAttack; 

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
    playerGold = 10; 

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
        enemyHealth = 50; 
        //Passes enemy name into function
        fight(pickedEnemyName);
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
}

//start game when page loads
startGame();