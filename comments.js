// comments.js — DolphinMod Comment System 🐬

console.log("🐬 Comments System loaded");

const id = new URLSearchParams(window.location.search).get("id");
const commentList = document.getElementById("commentList");
const commentInput = document.getElementById("commentInput");

// Load comments
const allComments = JSON.parse(localStorage.getItem("dolphinComments") || "{}");
allComments[id] = allComments[id] || [];

function refreshComments() {
  commentList.innerHTML = "";
  allComments[id].forEach(c => {
    const div = document.createElement("div");
    div.className = "comment";
    div.textContent = `${c.user}: ${c.text}`;
    commentList.appendChild(div);
  });
}

refreshComments();

// Post comment
document.getElementById("commentBtn").addEventListener("click", () => {
  const user = localStorage.getItem("dolphinUser") || "Guest";
  const text = commentInput.value;

  if (!text) return;

  allComments[id].push({ user, text });
  localStorage.setItem("dolphinComments", JSON.stringify(allComments));

  commentInput.value = "";
  refreshComments();
});
