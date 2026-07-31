// control.js — DolphinMod Run/Stop System 🐬
// Handles RUN and STOP buttons for the IDE.

console.log("🐬 Control System loaded");

let isRunning = false;

// RUN BUTTON
document.getElementById("runButton").addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;

  console.log("▶ RUN pressed");

  // Build program from scriptbuilder.js
  const program = buildProgram();

  // Run VM
  DolphinVM.run(program);
});

// STOP BUTTON
document.getElementById("stopButton").addEventListener("click", () => {
  console.log("⏹ STOP pressed");

  isRunning = false;

  // Reset VM state
  DolphinVM.state.x = 0;
  DolphinVM.state.y = 0;
  DolphinVM.state.direction = 90;
  DolphinVM.state.bubbles = [];

  // Reset sprites
  if (window.DolphinSprites) {
    window.DolphinSprites.forEach(sprite => {
      sprite.x = 0;
      sprite.y = 0;
    });
  }

  console.log("🐬 VM + sprites reset");
});
document.getElementById("runButton").addEventListener("click", () => {
  console.log("🌊 SEA START");
  const program = buildProgram();
  DolphinVM.run(program);
});

document.getElementById("stopButton").addEventListener("click", () => {
  console.log("🔴 STOP WAVE");
  DolphinVM.state.x = 0;
  DolphinVM.state.y = 0;
  DolphinVM.state.direction = 90;
  DolphinVM.state.bubbles = [];

  if (window.DolphinSprites) {
    window.DolphinSprites.forEach(sprite => {
      sprite.x = 0;
      sprite.y = 0;
    });
  }
});
