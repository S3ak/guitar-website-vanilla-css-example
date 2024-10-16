function muteMe(elem) {
  elem.muted = true;
  elem.pause();
}

// Try to mute all video and audio elements on the page
function mutePage() {
  document.querySelectorAll("video, audio").forEach((elem) => muteMe(elem));
}

// HELP: Add an id of "js-toggle-mute" to any HTML element you
// want to be the mute button eg. `<button id="js-toggle-mute">Mute</button>`
const muteBtn = document.getElementById("js-toggle-mute");

if (muteBtn) {
  muteBtn.addEventListener("click", mutePage);
}
