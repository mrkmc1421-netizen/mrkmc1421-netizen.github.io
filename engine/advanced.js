// 🦦 DolphinMod Interpolation System
export function enableInterpolation(renderer) {
  renderer.interpolation = true;

  renderer.interpolate = function(sprite, delta) {
    sprite.renderX = sprite.x + (sprite.targetX - sprite.x) * delta;
    sprite.renderY = sprite.y + (sprite.targetY - sprite.y) * delta;
  };

  console.log("🦦 Interpolation enabled — smooth as a glide");
      }
// 🦦 DolphinMod Warp Timer
export function warpTimer(vm) {
  vm.loopCheck = {};

  vm.beforeExecute = function(sprite, opcode) {
    const now = performance.now();

    if (!vm.loopCheck[sprite.id]) {
      vm.loopCheck[sprite.id] = { last: now, count: 0 };
    }

    const data = vm.loopCheck[sprite.id];

    if (now - data.last < 5) {
      data.count++;
    } else {
      data.count = 0;
    }

    data.last = now;

    if (data.count > 200) {
      console.warn(`🦦 Warp detected in sprite ${sprite.name}`);
    }
  };

  console.log("🦦 Warp timer enabled — loop detection active");
        }
// 🦦 DolphinMod Log Threads
export function enableLogs(vm) {
  vm.log = [];

  vm.afterExecute = function(sprite, opcode) {
    const entry = {
      sprite: sprite.name,
      opcode,
      time: performance.now()
    };

    vm.log.push(entry);

    window.dispatchEvent(new CustomEvent("dolphinLog", { detail: entry }));
  };

  console.log("🦦 Logs enabled — broadcasting block threads");
}
// 🦦 Beaver Advanced Mode Activator
export function activateAdvanced(renderer, vm) {
  enableInterpolation(renderer);
  warpTimer(vm);
  enableLogs(vm);

  console.log("🦦 Beaver Advanced Mode activated");
}
