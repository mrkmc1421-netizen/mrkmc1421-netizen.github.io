// vm.js — DolphinMod Mini Runtime 🐬
// Place in: dolphinmod/runtime/vm.js

console.log("🐬 DolphinMod VM loaded");

// --- CORE VM ---------------------------------------------------------

const VM = {
  state: {
    x: 0,
    y: 0,
    direction: 90,
    bubbles: []
  },

  handlers: {},

  register(opcode, fn) {
    this.handlers[opcode] = fn;
  },

  run(program) {
    console.log("🐬 VM: running", program.length, "blocks");
    for (const block of program) {
      const { opcode, args } = block;
      const handler = this.handlers[opcode];

      if (!handler) {
        console.warn("⚠ Unknown opcode:", opcode);
        continue;
      }

      try {
        handler(args || {}, this.state);
      } catch (e) {
        console.error("💥 Error in opcode", opcode, e);
      }
    }
    console.log("✅ VM: finished");
  }
};

// --- SCRATCH-LIKE HANDLERS -------------------------------------------

VM.register("motion_move", (args, state) => {
  const steps = Number(args.STEPS ?? 10);
  state.x += steps;
  console.log(`🧱 Scratch: move ${steps} steps → x=${state.x}`);
});

VM.register("motion_turn", (args, state) => {
  const deg = Number(args.DEGREES ?? 15);
  state.direction = (state.direction + deg) % 360;
  console.log(`🧱 Scratch: turn ${deg}° → direction=${state.direction}`);
});

VM.register("looks_say", (args) => {
  const msg = String(args.MESSAGE ?? "Hello!");
  console.log(`🧱 Scratch: say "${msg}"`);
});

// --- PENGUINMOD-LIKE HANDLERS ----------------------------------------

VM.register("pm_js", (args) => {
  const code = String(args.CODE ?? "console.log('hi from pm_js')");
  console.log("🐧 PenguinMod: running JS:", code);
  try {
    // eslint-disable-next-line
