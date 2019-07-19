function getName() {
    var name = prompt("What's your name?");
    return welcome(name);
}

function welcome(name) {
  document.getElementById("name").innerHTML = ("Hello "  + name + ", let's play.");
}

var words = [
    "coding",
    "codepen",
    "riot",
    "javascript",
    "website",
];

var word = words[Math.floor(Mathrandom()* words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
