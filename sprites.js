// sprites.js — DolphinMod Sprite System 🐬

console.log("🐬 Sprite System loaded");

window.DolphinSprites = [];

document.getElementById("createSprite").addEventListener("click", () => {
  const sprite = {
    x: 0,
    y: 0,
    size: 40,
    color: "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)
  };

  DolphinSprites.push(sprite);
  console.log("🐬 Created sprite:", sprite);
});
window.DolphinSelectedSprite = 0;
