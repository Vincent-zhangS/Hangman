var POSSIBLE_WORDS = ["obdurate","verisimiltude","defenstrate","obsequious","dissonant","today","idempotent"];
var word = "";
var guesses = "";
var Max_Guesses = 6;
var guess_count = 0
function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length)
    word = POSSIBLE_WORDS(randomIndex);
    guesses = "";
    guess_count = Max_Guesses;
    updatePage();

    }
    
function guessLetter(){
    var input = document.getElementById("guess");
    var letter = input.value;
    if (word.indexOf(letter) < 0){
        guess_count --;
    }
    guesses += letter;
    updatePage();
    input.value = "";
}
function updatePage(){
    var clueString = "";
    for(var i = 0; i < word.length; i++){
        var currentLetter = word.charAt(i)
        if (guessLetter.indexOf(currentLetter) >= 0){// You Guessed it
        clueString += currentLetter + " ";
        }
        else
            clueString+= "_ ";
    }
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    var image = document.getElementById("hangmanImage");
    image.src = "images/hangman" + guess_count + ".gif";
}
