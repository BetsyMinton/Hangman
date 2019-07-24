var words = [
    "coding",
    "codepen",
    "riot",
    "javascript",
    "website",
];

var wrongGuesses = [];
var name;
var word = words[Math.floor(Math.random() * words.length)];

var drawBody = 0;

function getName() {
    name = prompt("What's your name?");
    return welcome();
}

var answerArray = [];

var guess;

var remainingLetters = word.length;
var checkLength = word.length;

function welcome() {
  document.getElementById("name").innerHTML = ("Hello "  + name + ", let's play.");
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return userGuess();
}

function userGuess() {
    guess = prompt("Guess a letter or click cancel to stop playing");
    if (guess.length !==1) {
        alert("please guess a letter");
        guess = prompt("Guess a letter or click cancel to stop playing");
    } else  {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
        if (checkLength === remainingLetters) {
            alert("Wrong, try again!");
            wrongGuesses.push(" " + guess);
            drawBody++;
        } else {
            checkLength = remainingLetters;
        }
    document.getElementById("again").style.display = "block";
    return printLetterGuess(guess);
    }
}


function printLetterGuess(guess) {
    document.getElementById("displayGuess").innerHTML = ("You guessed: "  + guess);
     joinAnswer();
    document.getElementById("listOfGuesses").innerHTML = (wrongGuesses);
}


function joinAnswer() {
    var currentAnswer = answerArray.join(" ");
    return printAnswer(currentAnswer);
}

function printAnswer(currentAnswer) {
    document.getElementById("displayAnswer").innerHTML = ("Your word so far: " + currentAnswer);
    if (remainingLetters === 0) {
        alert("you won! The word was " + word);
        document.getElementById("again").style.display = "none";
    }
}

function promptGuess() {
    userGuess();
}


function setup() {
  createCanvas(300,400);
}

function draw() {
    background(205);
    strokeWeight(10);
    line(150,50,250,50);
    line(250,50,250,350);
    line(50,350,250,350);
    strokeWeight(4);
    line(155,50,155,80);
    if (drawBody > 0) {
      //head
      strokeWeight(3);
      fill(205);
      ellipse(155,105,50,50);
      }
    if (drawBody > 1) {
      //body
      strokeWeight(8);
      line(155,132,155,210);
    }
    if (drawBody > 2) {
      //arms
      strokeWeight(6);
      line(155,138,180,200);
    }
    if (drawBody > 3) {
      line(155,138,130,200);
    }
      //legs
    if (drawBody > 4) {
      line(155,210,180,300);
    }
    if (drawBody > 5) {
      line(155,210,130,300);
      gameOver();
    }
}

function gameOver() {
  document.getElementById("name").innerHTML = ("Oh no, "  + name + ", you are out of guesses.  Game over!");
  document.getElementById("again").style.display = "none";
  document.getElementById("play").style.display = "none";
}
