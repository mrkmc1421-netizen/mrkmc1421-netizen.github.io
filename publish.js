// publish.js — DolphinMod Publish System 🐬

console.log("🐬 Publish System loaded");

document.getElementById("exportBtn").addEventListener("click", () => {
  const program = buildProgram();
  const json = JSON.stringify(program, null, 2);

  document.getElementById("projectData").value = json;

  console.log("🐬 Exported project JSON!");
});
