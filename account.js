// account.js — DolphinMod Account System 🐬

console.log("🐬 Account System loaded");

// Load existing accounts
const accounts = JSON.parse(localStorage.getItem("dolphinAccounts") || "{}");

// JOIN
const joinBtn = document.getElementById("joinBtn");
if (joinBtn) {
  joinBtn.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (!user || !pass) return alert("Enter username + password");

    accounts[user] = { password: pass };
    localStorage.setItem("dolphinAccounts", JSON.stringify(accounts));

    alert("🐬 Account created!");
    window.location.href = "signin.html";
  });
}

// SIGN IN
const signinBtn = document.getElementById("signinBtn");
if (signinBtn) {
  signinBtn.addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (!accounts[user]) return alert("User not found");
    if (accounts[user].password !== pass) return alert("Wrong password");

    localStorage.setItem("dolphinUser", user);

    alert("🐬 Signed in!");
    window.location.href = "editor.html";
  });
                           }
