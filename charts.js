// charts.js — DolphinMod Analytics Dashboard 🐬

console.log("🐬 Charts System loaded");

// Load analytics
const analytics = JSON.parse(localStorage.getItem("dolphinAnalytics") || "{}");

// Default structure
analytics.publishes = analytics.publishes || [];
analytics.views = analytics.views || [];

function drawChart(canvasId, data, color) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  canvas.width = 600;
  canvas.height = 200;

  ctx.fillStyle = "#003";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const max = Math.max(...data, 10);

  data.forEach((value, index) => {
    const barHeight = (value / max) * 180;
    ctx.fillStyle = color;
    ctx.fillRect(index * 30 + 20, 200 - barHeight, 20, barHeight);
  });
}

// Draw charts
drawChart("publishChart", analytics.publishes, "#0af");
drawChart("viewsChart", analytics.views, "#f33");
