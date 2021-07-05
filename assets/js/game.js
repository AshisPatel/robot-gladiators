
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
        //Alert players that the fight has started
        window.alert("Welcome to Robot Gladiators!");

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


for(i=0; i< enemyNames.length; i++) 
{
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50; 
    fight(pickedEnemyName);
}
 
