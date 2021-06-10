var buttons = document.querySelectorAll("button");

var drums1 = new Audio("sounds/Drums1.mp3");
var drums2 = new Audio("sounds/Drums2.mp3");
var drums3 = new Audio("sounds/Drums3.mp3");

var mallets1 = new Audio("sounds/Mallets1.mp3");
var mallets2 = new Audio("sounds/Mallets2.mp3");
var mallets3 = new Audio("sounds/Mallets3.mp3");



for (i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", function() {

    resetBorder();
    document.getElementById(this.id).classList.add("active-button");
    
    var clickedButton = this.id;
    muteAudio();


    switch (clickedButton) {
      case "playbtn":
        drums1.muted = false;
        mallets1.muted = false;
        playAudio();
        document.getElementById("btn11").classList.add("active-button");
        break;

      case "pausebtn":
        pauseAudio();

      case "btn11":
        drums1.muted = false;
        mallets1.muted = false;
        break;

      case "btn12":
        drums2.muted = false;
        mallets1.muted = false;
        break;

      case "btn13":
        drums3.muted = false;
        mallets1.muted = false;
        break;

      case "btn21":
        drums1.muted = false;
        mallets2.muted = false;
        break;

      case "btn22":
        drums2.muted = false;
        mallets2.muted = false;
        break;

      case "btn23":
        drums3.muted = false;
        mallets2.muted = false;
        break;

      case "btn31":
        drums1.muted = false;
        mallets3.muted = false;
        break;

      case "btn32":
        drums2.muted = false;
        mallets3.muted = false;
        break;

      case "btn33":
        drums3.muted = false;
        mallets3.muted = false;
        break;

      default:
        alert("didn't work");

    }

  });
}

function muteAudio() {
  drums1.muted = true;
  drums2.muted = true;
  drums3.muted = true;
  mallets1.muted = true;
  mallets2.muted = true;
  mallets3.muted = true;
}

function playAudio() {
  drums1.play();
  drums2.play();
  drums3.play();
  mallets1.play();
  mallets2.play();
  mallets3.play();
}

function pauseAudio() {
  drums1.pause();
  drums2.pause();
  drums3.pause();
  mallets1.pause();
  mallets2.pause();
  mallets3.pause();
}

function resetBorder() {
  for (i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("active-button")){
      buttons[i].classList.remove("active-button");
    }


  }
}
