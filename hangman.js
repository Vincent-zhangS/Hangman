var POSSIBLE_WORDS = ["obdurate","verisimiltude","defenstrate","obsequious","dissonant","today","idempotent"];


var word = "";

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length)
    word = POSSIBLE_WORDS(randomIndex);
    var clueString ="";
    for(var i = 0;i < word.length; i++){
        clueString+= "_ ";
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
}
function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.ariaValueMax;
    guesses+=letter;
    updatePage();
}
function updatePage(){
    var clueString ="";
    for(var i = 0;i < word.length; i++){
        var currentLetter = word.charAt(i)
        if(guessLetter.indexOf(currentLetter)){// You Guessed it
        clueString += currentLetter + " ";
        }
        else
            clueString+= "_ ";
    }
var clue = document.getElementById("clue");
    clue.innerHTML = clueString;
}