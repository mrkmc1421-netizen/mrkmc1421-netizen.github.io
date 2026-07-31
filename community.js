// community.js — DolphinMod Community Projects 🐬

console.log("🐬 Community System loaded");

const list = document.getElementById("projectList");

// Load all community projects
const projects = JSON.parse(localStorage.getItem("dolphinCommunity") || "[]");

projects.forEach((proj, index) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${proj.name}</h3>
    <p>By ${proj.author}</p>
    <button data-id="${index}">Open</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    window.location.href = `projectview.html?id=${index}`;
  });

  list.appendChild(card);
});
const comments = JSON.parse(localStorage.getItem("dolphinComments") || "{}");
const count = (comments[index] || []).length;

card.innerHTML += `<p>${count} comments</p>`;
