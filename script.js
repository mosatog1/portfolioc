// Time-based greeting popup
function greetUser() {
  const hour = new Date().getHours();
  let message = "Welcome!";

  if (hour < 12) message = "Good Morning!";
  else if (hour < 18) message = "Good Afternoon!";
  else message = "Good Evening!";

  const box = document.createElement("div");
  box.textContent = `${message} Thanks for visiting!`;
  box.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    color: #000;
    padding: 1rem;
    border-radius: 12px;
    backdrop-filter: blur(8px);
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 999;
  `;
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 4000);
}

// Form validation on contact page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      const phonePattern = /^[0-9]{9,14}$/;

      if (!name || !email || !phone || !message) {
        alert("Please complete all fields.");
        return;
      }

      if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
      }

      if (!phonePattern.test(phone)) {
        alert("Phone must be 9–14 digits.");
        return;
      }

      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }

  // Optional: Dark/Light Mode Toggle
  const themeBtn = document.getElementById("toggleTheme");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const mode = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem("themeMode", mode);
    });

    const saved = localStorage.getItem("themeMode");
    if (saved === "dark") {
      document.body.classList.add("dark-theme");
    }
  }

  // Project card hover effect (if cards exist)
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active-card");
      card.style.transform = card.classList.contains("active-card") ? "scale(1.03)" : "scale(1)";
      card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
      card.style.boxShadow = card.classList.contains("active-card")
        ? "0 8px 20px rgba(0, 128, 255, 0.2)"
        : "0 6px 16px rgba(0,0,0,0.1)";
    });
  });
});
