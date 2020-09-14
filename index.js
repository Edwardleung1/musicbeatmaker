// after the window content is loaded, run this function
window.addEventListener("load", () => {
  // element selectors
  // 1. get all the audio sounds
  const sounds = document.querySelectorAll(".sound");
  // 2. get all small div inside .pads
  const pads = document.querySelectorAll(".pads div");

  // Let's get going with the sound here
  // loop over each pads, with (index) for each sound
  pads.forEach((pad, index) => {
    // addEventListener to each pad
    pad.addEventListener("click", function () {
      // reset current track time
      sounds[index].currentTime = 0;
      // select each sound and play
      sounds[index].play();
    });
  });
});
