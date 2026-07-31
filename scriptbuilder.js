// scriptbuilder.js — DolphinMod Script Compiler 🐬
// Converts dropped blocks on the stage into a program array.

console.log("🐬 Script Builder loaded");

function buildProgram() {
  const stage = document.getElementById("stage");
  const nodes = stage.querySelectorAll(".placed-block");

  const program = [];

  nodes.forEach(node => {
    const opcode = node.dataset.opcode;
    const args = {};

    // Parse arguments from text like: "move (10)"
    const text = node.textContent;
    const match = text.match(/\((.*?)\)/);

    if (match) {
      const raw = match[1];
      const num = Number(raw);
      if (!isNaN(num)) args.VALUE = num;
    }

    program.push({ opcode, args });
  });

  console.log("🐬 Built program:", program);
  return program;
}

// Hook into run button
document.getElementById("runButton")?.addEventListener("click", () => {
  const program = buildProgram();
  DolphinVM.run(program);
});
