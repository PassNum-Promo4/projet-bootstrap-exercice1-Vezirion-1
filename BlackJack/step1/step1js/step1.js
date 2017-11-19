//Here begins the script of JavaScript on the file step1.js

//A good user needs a good welcoming 
//alert("Hey there! Welcome to JavaZJack, the game who user blames developper because this game is crazy!")


function javazjack() {
    var numberComputer = Math.floor(Math.random()*10+1);
    var numberPlayer = document.getElementById("number_player").value;

    if (numberComputer > numberPlayer) {
        alert("Sorry but you're losing!");
    } else if (numberComputer < numberPlayer) {
        alert("Yeah! Winner!");
    } else if (numberComputer == numberPlayer) {
        alert("No, no, equality means losing");
    }
}
