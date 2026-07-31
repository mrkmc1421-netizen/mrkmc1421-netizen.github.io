console.log("🐬 DolphinMod Editor Loaded");

const stage = document.getElementById("stage");
const blocks = document.querySelectorAll(".block");

// Simple drag & drop
blocks.forEach(block => {
  block.setAttribute("draggable", "true");

  block.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", block.textContent);
  });
});

stage.addEventListener("dragover", e => {
  e.preventDefault();
});

stage.addEventListener("drop", e => {
  e.preventDefault();
  const text = e.dataTransfer.getData("text/plain");

  const node = document.createElement("div");
  node.textContent = text;
  node.style.position = "absolute";
  node.style.left = e.offsetX + "px";
  node.style.top = e.offsetY + "px";
  node.style.background = "#0af";
  node.style.color = "#003";
  node.style.padding = "6px";
  node.style.borderRadius = "6px";

  stage.appendChild(node);
});
<div id="userDisplay"></div>
