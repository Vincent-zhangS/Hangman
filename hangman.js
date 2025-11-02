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
    spaced_word = "";
    document.getElementById("usedletters").style.color = "initial";

    guess_count = MAX_GUESSES;
    for (var i = 0; i < word.length; i++) {
        spaced_word += word[i] + " ";
    }
    updatePage();
}

function guessLetter() {
  var input = document.getElementById("guess");
  
  // makes it so it doesnt matter if its upper/lower case 
  var letter = input.value.toLowerCase(); 
  var lowerWord = word.toLowerCase();    

  // makes it so you're not allowed to guess if its not a new game
  if (word == "") {
    document.getElementById("usedletters").innerHTML = "start new game first";
    input.value = "";
    return;
  }

  // no guessing after game over
  if (guess_count <= 0) {
    document.getElementById("usedletters").innerHTML = "game over play again.";
    input.value = "";
    return;
  }

  // cant guess same letter twice
  if (guesses.includes(letter)) {
    document.getElementById("usedletters").innerHTML = `you already tried that"${letter}", try another letter.`;
    input.value = "";
    return;
  }

  if (lowerWord.indexOf(letter) < 0) {
    guess_count--;
  }
  guesses += letter;
  // input field
  input.value = "";
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
  
  var used = document.getElementById("usedletters");
  if (wonGame() == false && guess_count == 0) {
    used.style.color = "red";
    used.innerHTML = "Whomp Whomp :/"; 
  } else if (wonGame() == true) {
    used.style.color = "green";
    used.innerHTML = "Congrats"; 
  }
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