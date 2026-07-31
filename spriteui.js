// spriteui.js — DolphinMod Sprite Selection UI 🐬

console.log("🐬 Sprite UI loaded");

const spriteList = document.getElementById("spriteList");

// currently selected sprite index
window.DolphinSelectedSprite = 0;

function refreshSpriteList() {
  if (!window.DolphinSprites) return;

  spriteList.innerHTML = "";

  DolphinSprites.forEach((sprite, index) => {
    const item = document.createElement("div");
    item.className = "sprite-item";
    item.textContent = `Sprite ${index + 1}`;

    if (index === DolphinSelectedSprite) {
      item.classList.add("selected");
    }

    item.addEventListener("click", () => {
      window.DolphinSelectedSprite = index;
      console.log("🐬 Selected sprite:", index);
      refreshSpriteList();
    });

    spriteList.appendChild(item);
  });
}

// expose so sprites
