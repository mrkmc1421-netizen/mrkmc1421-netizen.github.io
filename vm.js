// vm.js — DolphinMod Mini VM 🐬
// Place in: dolphinmod/runtime/vm.js

console.log("🐬 DolphinMod VM loaded");

// --- RUNTIME CONTEXT -------------------------------------------------

const VM = {
  // Stage state (you can expand this later)
  state: {
    x: 0,
    y: 0,
    direction: 90,
    bubbles: [],
  },

  // Registry of opcode handlers
  handlers: {},

  // Register a handler for an opcode
  register(opcode, fn) {
    this.handlers[opcode] = fn;
  },

  // Run a program: array of { opcode, args }
  run(program) {
    console.log("🐬 VM: running program with", program.length, "blocks");
    program.forEach(block => {
      const { opcode, args } = block;
      const handler = this.handlers[opcode];

      if (!handler) {
        console.warn("⚠ Unknown opcode:", opcode);
        return;
      }

      try {
        handler(args || {}, this.state);
      } catch (e) {
        console.error("💥 Error in opcode.", opcode, e);
      }
    });
    console.log("✅ VM: program finished");
  }
};

// --- SCRATCH-LIKE HANDLERS -------------------------------------------

// motion_move(STEPS)
VM.register("motion_move", (args, state) =>
