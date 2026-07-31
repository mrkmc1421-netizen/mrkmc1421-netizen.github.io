// renderer.js — DolphinMod Mini Renderer 🐬
// Place in: dolphinmod/runtime/renderer.js

console.log("🐬 DolphinMod Renderer loaded");

// Grab the stage element from editor.html
const stage = document.getElementById("stage");

// Create a canvas for rendering
const canvas = document.createElement("canvas");
canvas.width = 480;
canvas.height = 360;
canvas.style.borderRadius = "16px";
canvas.style.position = "absolute";
canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.transform = "translate(-50%, -50%)";

stage.appendChild(canvas);

const ctx = canvas.getContext("2d");

// --- RENDER LOOP -----------------------------------------------------

function renderLoop() {
  requestAnimationFrame(renderLoop);

  // Clear
  ctx.fillStyle = "#003";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Ocean gradient
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  grad.addColorStop(0, "#0ff");
  grad.addColorStop(1, "#004");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw sprite (simple circle for now)
  const x = DolphinVM.state.x;
  const y = DolphinVM.state.y;
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(240 + x, 180 - y, 20, 0, Math.PI * 2);
  ctx.fill();

  // Draw bubbles from hydro_splash
  DolphinVM.state.bubbles = DolphinVM.state.bubbles.filter(b => {
    const age = Date
