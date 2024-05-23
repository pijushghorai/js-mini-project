let song = document.querySelector("#song");
let progress = document.querySelector("#progres");
let controlIcon = document.querySelector("#control-icon");


song.onloademetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (controlIcon.innerHTML.includes("pause")) {
    song.pause();
    controlIcon.innerHTML = "play_arrow";
  } else {
    song.play();
    controlIcon.innerHTML = "pause";
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 200);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  song.play();
  controlIcon.innerHTML = "pause";
};

controlIcon.addEventListener("click", playPause);
