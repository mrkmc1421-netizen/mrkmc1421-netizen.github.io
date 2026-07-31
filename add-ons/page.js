// 🦦 DolphinMod Add‑Ons Manager

const addons = [
  {
    id: "interpolation",
    name: "Interpolation",
    desc: "Runs your project as smooth as a glide.",
    enabled: false
  },
  {
    id: "warpTimer",
    name: "Warp Timer",
    desc: "Checks if sprites are stuck in loops.",
    enabled: false
  },
  {
    id: "logs",
    name: "Log Threads",
    desc: "Broadcasts block execution data to DolphinMod.",
    enabled: false
  }
];

export function loadAddonsPage() {
  const list = document.getElementById("addonsList");
  list.innerHTML = "";

  addons.forEach(addon => {
    const div = document.createElement("div");
    div.className = "addonItem";

    div.innerHTML = `
      <strong>${addon.name}</strong>
      <span class="addonToggle" onclick="toggleAddon('${addon.id}')">
        ${addon.enabled ? "Disable" : "Enable"}
      </span>
      <p>${addon.desc}</p>
    `;

    list.appendChild(div);
  });
}

window.toggleAddon = function(id) {
  const addon = addons.find(a => a.id === id);
  addon.enabled = !addon.enabled;

  // Broadcast to engine
  window.dispatchEvent(new CustomEvent("addonToggle", { detail: addon }));

  loadAddonsPage();
};

document.getElementById("reloadAddons").onclick = loadAddonsPage;

loadAddonsPage();
