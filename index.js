// after the window content is loaded, run this function
window.addEventListener("load", () => {
  // element selectors
  // 1. get all the audio sounds
  const sounds = document.querySelectorAll(".sound");
  // 2. get all small div inside .pads
  const pads = document.querySelectorAll(".pads div");
  // 3. get visual div
  const visual = document.querySelector(".visual");
  // 4. array of colors
  const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#606bd3", "#60c2d3"];

  // Let's get going with the sound here
  // loop over each pads, with (index) for each sound
  pads.forEach((pad, index) => {
    // addEventListener to each pad
    pad.addEventListener("click", function () {
      // reset current track time
      sounds[index].currentTime = 0;
      // select each sound and play
      sounds[index].play();

      // call function
      createBubbles(index);
    });
  });

  // Create a function that makes bubbles
  const createBubbles = (index) => {
    // create bubble element div
    const bubble = document.createElement("div");
    // ADD bubble to the visual div
    visual.appendChild(bubble);
    // change each individual bubble color
    bubble.style.backgroundColor = colors[index];
    // add animation bubble
    bubble.style.animation = "jump 1s ease";
    // remove bubble once animation finishes
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
});
