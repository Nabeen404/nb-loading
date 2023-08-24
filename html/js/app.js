// function for volume control for music in background
var play = false;
var song = document.getElementById("song");
song.volume = 0.2;
window.addEventListener("keyup", function (e) {
  if (e.which == 38) {
    // ArrowDowm
    song.volume == Math.min(song.volume + 0.025, 1);
  } else if (e.which == 40) {
    //ArrowUP
    song.volume == Math.max(song.volume - 0.025, 0);
  }
});

// Function for pause and play music in background
var audio = document.querySelector("audio");
if (audio) {
  window.addEventListener("keydown", function (event) {
    var key = event.which || event.kayCode;
    var x = document.getElementById("text").innerText;
    var y = document.getElementById("text");

    if (key === 32 && x === "MUTE") {
      event.preventDefault();
      audio.paused ? audio.play() : audio.pause();
      y.innerHTML = "UNMUTE";
    } else if (key === 32 && x === "UNMUTE") {
      event.preventDefault();
      audio.paused ? audio.play() : audio.pause();
      y.innerHTML = "MUTE";
    }
  });
}

// function for switching text in loading screen
var loading = document.querySelector(".loading");
var texts = ["Joining Server", "Preparing Assets", "Establishing Connection"];
var currentText = 0;

setInterval(function () {
  currentText = (currentText + 1) % texts.length;
  loading.classList.remove("fade-out");
  void loading.offsetWidth;
  setTimeout(function () {
    loading.textContent = texts[currentText];
  }, 1000);
}, 4000);

// function for getting handover data from lua script
window.addEventListener("DOMContentLoaded", () => {
  console.log(`You're connecting to ${window.nuiHandoverData.serverAddress}`);
  document.querySelector("#namePlaceholder > span").innerHTML =
    window.nuiHandoverData.name;
});

// function for random phrase
(function welcomedisplay() {
  var welcomes = [
    "Begin your exciting new adventure.",
    "Discover the wonders of your new city.",
    "Open the door to a brand-new chapter.",
    "Step into a world of new possibilities.",
    "Embrace your fresh beginning.",
  ];
  var randomWelcome = Math.floor(Math.random() * welcomes.length);
  document.getElementById("welcomeDisplay").innerHTML = welcomes[randomWelcome];
})();
