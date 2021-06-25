
// https://www.w3.org/TR/webaudio/#APIOverview  <- This is the way to fix the audio problems.

var grits1 = new Audio("sounds/Grits1.mp3");
var grits2 = new Audio("sounds/Grits2.mp3");
var grits3 = new Audio("sounds/Grits3.mp3");
var grits4 = new Audio("sounds/Grits4.mp3");
var grits5 = new Audio("sounds/Grits5.mp3");
var grits6 = new Audio("sounds/Grits6.mp3");
var grits7 = new Audio("sounds/Grits7.mp3");
var grits8 = new Audio("sounds/Grits8.mp3");
var grits9 = new Audio("sounds/Grits9.mp3");

var audioArray = [grits1, grits2, grits3, grits4, grits5, grits6, grits7, grits8, grits9];

var buttons = document.querySelectorAll("button");


// ATTEMPTS TO USE WEB AUDIO API
// const audioCtx = new AudioContext();
//
// const track1 = document.querySelector("audio");
//
// const mediaElement = audioCtx.createMediaElementSource(track1);
//
// mediaElement.connect(audioCtx.destination);



// On Button Press
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var chosenButton = this.id;

    if (this.id != "playbtn" && this.id != "pausebtn"){
    clearActiveButton();
    this.classList.add("active-button");
    }

    var tracksToPlay = [];

    switch (this.id) {

      case "playbtn":
        playAudio();
        break;

      case "pausebtn":
        pauseAudio();
        break;

      case "btn11":
        tracksToPlay = [grits1];
        break;

      case "btn12":
        tracksToPlay = [grits1, grits2];
        break;

      case "btn13":
        tracksToPlay = [grits1, grits2, grits5];
        break;

      case "btn14":
        tracksToPlay = [grits1, grits2, grits5, grits8];
        break;

      case "btn15":
        tracksToPlay = [grits1, grits2, grits5, grits8, grits9];
        break;

      case "btn21":
        tracksToPlay = [grits1, grits3];
        break;

      case "btn22":
        tracksToPlay = [grits1, grits3, grits2];
        break;

      case "btn23":
        tracksToPlay = [grits1, grits3, grits2, grits5];
        break;

      case "btn24":
        tracksToPlay = [grits1, grits3, grits2, grits5, grits8];
        break;

      case "btn25":
        tracksToPlay = [grits1, grits3, grits2, grits5, grits8, grits9];
        break;

      case "btn31":
        tracksToPlay = [grits1, grits3, grits4];
        break;

      case "btn32":
        tracksToPlay = [grits1, grits3, grits4, grits2];
        break;

      case "btn33":
        tracksToPlay = [grits1, grits3, grits4, grits2, grits5];
        break;

      case "btn34":
        tracksToPlay = [grits1, grits3, grits4, grits2, grits5, grits8];
        break;

      case "btn35":
        tracksToPlay = [grits1, grits3, grits4, grits2, grits5, grits8, grits9];
        break;

      case "btn41":
        tracksToPlay = [grits1, grits3, grits4, grits6];
        break;

      case "btn42":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits2];
        break;

      case "btn43":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits2, grits5];
        break;

      case "btn44":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits2, grits5, grits8];
        break;

      case "btn45":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits2, grits5, grits8, grits9];
        break;

      case "btn51":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits7];
        break;

      case "btn52":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits7, grits2];
        break;

      case "btn53":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits7, grits2, grits5];
        break;

      case "btn54":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits7, grits2, grits5, grits8];
        break;

      case "btn55":
        tracksToPlay = [grits1, grits3, grits4, grits6, grits7, grits2, grits5, grits8, grits9];
        break;

      case "homebtn":
        break;
      default:
        alert("Something went wrong.");

    }

    if (this.id != "playbtn"){
      muteAudio();
    }
    for (var i = 0; i < tracksToPlay.length; i++) {
      tracksToPlay[i].muted = false;
      console.log(tracksToPlay[i]);
    }
  });
}


// Functions List
function playAudio() {
  for (var i = 0; i < audioArray.length; i++) {
    audioArray[i].loop = true;
    audioArray[i].play();
  }
}

function muteAudio() {
  for (var i = 0; i < audioArray.length; i++) {
    audioArray[i].muted = true;
  }
}

function pauseAudio() {
  for (var i = 0; i < audioArray.length; i++) {
    audioArray[i].pause();
  }
}

function clearActiveButton() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active-button");
  }
}
