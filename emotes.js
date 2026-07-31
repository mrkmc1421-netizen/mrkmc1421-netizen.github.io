// emotes.js — DolphinMod Emote System 🐬

console.log("🐬 Emote System loaded");

window.DolphinEmotes = [
  { code: ":dolphin:", src: "assets/emotes/dolphin.png" },
  { code: ":wave:", src: "assets/emotes/wave.png" },
  { code: ":bubble:", src: "assets/emotes/bubble.png" },
  { code: ":shark:", src: "assets/emotes/shark.png" },
  { code: ":orca:", src: "assets/emotes/orca.png" }
];

// Render emote picker
function renderEmotePicker() {
  const picker = document.getElementById("emotePicker");
  picker.innerHTML = "";

  DolphinEmotes.forEach(emote => {
    const img = document.createElement("img");
    img.src = emote.src;
    img.className = "emote-icon";

    img.addEventListener("click", () => {
      const input = document.getElementById("commentInput");
      input.value += " " + emote.code + " ";
    });

    picker.appendChild(img);
  });
}

window.renderEmotePicker = renderEmotePicker;

// Replace emote codes with images
window.renderEmotesInText = function(text) {
  let output = text;
  DolphinEmotes.forEach(emote => {
    output = output.replaceAll(
      emote.code,
      `<img src="${emote.src}" class="emote-inline">`
    );
  });
  return output;
};
