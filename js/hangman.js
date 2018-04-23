var selectedWord = "";
var selectedHink = "";
var board = [];
var remainingGuesses = 6;
var words = ["cat","snake"]

var randomInt = Math.floor(Math.round() * words.length);
selectedWord = words[randomInt];

function initBoard(){
    for(var letter in selectedWord){
        board.push("_");
    }
}

initBoard();
for (var letter of board){
    document.getElementById("word").innerHTML += letter + " ";
}
