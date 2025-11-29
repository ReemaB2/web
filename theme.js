// theme.js
(function () {
  const toggleBtn = document.querySelector(".theme-toggle");
  const root = document.documentElement; // add class on <html> so both `.dark-theme` and `.dark-theme body` rules work
  const STORAGE_KEY = "yamam-theme";

  // helper to apply theme
  function applyTheme(theme) {
    if (theme === "dark") {
      root.classList.add("dark-theme");
      if (toggleBtn) toggleBtn.textContent = "☀️";
    } else {
      root.classList.remove("dark-theme");
      if (toggleBtn) toggleBtn.textContent = "🌙";
    }
  }

  // initial load from localStorage
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  // toggle button click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const nowDark = root.classList.toggle("dark-theme");
      localStorage.setItem(STORAGE_KEY, nowDark ? "dark" : "light");
      applyTheme(nowDark ? "dark" : "light");
    });
  }

  /* ----------------------------
     Back to top button behavior
     ---------------------------- */
  const topBtnId = "backToTopBtn";
  let topBtn = document.getElementById(topBtnId);

  // create button if it's not present
  if (!topBtn) {
    topBtn = document.createElement("button");
    topBtn.id = topBtnId;
    topBtn.type = "button";
    topBtn.textContent = "⬆";
    document.body.appendChild(topBtn);
  }

  // show/hide on scroll
  function handleScroll() {
    const sc = document.documentElement.scrollTop || document.body.scrollTop;
    if (sc > 200) topBtn.style.display = "block";
    else topBtn.style.display = "none";
  }
  // initial state & event
  handleScroll();
  window.addEventListener("scroll", handleScroll);

  // smooth scroll to top
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ----------------------------
     Real-time clock in footer
     ---------------------------- */
  function updateClock() {
    const el = document.getElementById("clock");
    if (!el) return;
    const now = new Date();
    // show local time with hours:minutes:seconds
    el.textContent = now.toLocaleTimeString();
  }
  updateClock();
  setInterval(updateClock, 1000);

})();
