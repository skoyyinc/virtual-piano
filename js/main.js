var pianoKeys = document.querySelectorAll('.keys');

for (var i = 0; i < pianoKeys.length; i++) {
  pianoKeys[i].addEventListener("click", function() {
    playKey(this.textContent.toUpperCase());
  })
}




function playKey(key) {
  if (key === ".") {
    var audio = new Audio("sounds/dot.mp3");
    audio.play();
  } else if (key === "/") {
    var audio = new Audio("sounds/slash.mp3");
    audio.play();
  } else if (key === "I/C") {
    var audio = new Audio("sounds/I.mp3");
    audio.play();
  } else if (key === "I" || key === "C") {
    var audio = new Audio("sounds/I.mp3");
    audio.play();
  } else {
    var audio = new Audio("sounds/" + key + ".mp3");
    audio.play();
  }
}

document.addEventListener("keydown", function(event) {
  for (var i = 0; i < pianoKeys.length; i++) {
    if (pianoKeys[i].textContent === event.key.toUpperCase() || event.key.toUpperCase() === "I" && pianoKeys[i].textContent === "I/C" || event.key.toUpperCase() === "C" && pianoKeys[i].textContent === "I/C") {
      if (pianoKeys[i].classList.contains("active")) {
        pianoKeys[i].classList.remove("active");
      } else pianoKeys[i].classList.add("active");
    }
  }

  playKey(event.key.toUpperCase());
})

document.addEventListener("keyup", function(event) {
  for (var i = 0; i < pianoKeys.length; i++) {
    if (pianoKeys[i].textContent === event.key.toUpperCase() || event.key.toUpperCase() === "I" && pianoKeys[i].textContent === "I/C" || event.key.toUpperCase() === "C" && pianoKeys[i].textContent === "I/C"){
      if (pianoKeys[i].classList.contains("active")) {
        pianoKeys[i].classList.remove("active");
      } else pianoKeys[i].classList.add("active");
    }
  }

})
