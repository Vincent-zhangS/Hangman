var POSSIBLE_WORDS = [
  "Easter",
  "Halloween",
  "Valentine",
  "Christmas",
  "Thanksgiving",
];

var word = "";
var guesses = "";
var MAX_GUESSES = 6;
var guess_count = 0;
function newGame() {
  var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
  word = POSSIBLE_WORDS[randomIndex];
  guesses = "";
  guess_count = MAX_GUESSES;
  updatepage();
}

function guessLetter() {
  var input = document.getElementById("guess");
  
  //Makes it so it doesnt matter if its upper or lower case
  var letter = input.value.toLowerCase(); 
  var lowerWord = word.toLowerCase();    

  if (lowerWord.indexOf(letter) < 0) {
    guess_count--;
  }
  guesses += letter;
  updatepage();
}

function updatepage() {
  var clueString = "";
  for (var i = 0; i < word.length; i++) {
    var currentLetter = word.charAt(i);
    
    // This compares lowercase words
    if (guesses.toLowerCase().indexOf(currentLetter.toLowerCase()) >= 0) {
      clueString += currentLetter + " ";
    } else {
      clueString += "_ ";
    }
  }
  var clue = document.getElementById("clue");
  clue.innerHTML = clueString;

  var guessArea = document.getElementById("guesses");
  guessArea.innerHTML = "Guessed Letters: " + guesses;

  var image = document.getElementById("hangmanImage");
  image.src = "images/hangman" + guess_count + ".gif";
}

// Gives a clue
function giveClue() {
  var clueText = "";
  var lowerWord = word.toLowerCase();

  if (lowerWord == "easter") {
    clueText = "A spring holiday involving eggs and a bunny.";
  } else if (lowerWord == "halloween") {
    clueText = "A spooky day with costumes and candy.";
  } else if (lowerWord == "valentine") {
    clueText = "A day involving hearts, chocolate, and love.";
  } else if (lowerWord == "christmas") {
    clueText = "A winter holiday where you give and receive gifts.";
  } else if (lowerWord == "thanksgiving") {
    clueText = "A day of turkey and being thankful.";
  } else {
    clueText = "start a new game first";
  }

  console.log("Clue: " + clueText);
}

function wonGame() {
  var clue = document.getElementById("clue").innerHTML;

  // if no more underscores then you win
  if (clue.indexOf("_") === -1) {
    return true;
  }

  return false;
}

//checks for if you win or not
document.addEventListener("keyup", function () {
  if (wonGame()) {
    document.getElementById("usedletters").style.color = "green";
    document.getElementById("usedletters").innerHTML = "Congrats";
  }
  else if (guess_count === 0) {
    document.getElementById("usedletters").style.color = "red";
    document.getElementById("usedletters").innerHTML = "Whomp Whomp :/";
  }
});