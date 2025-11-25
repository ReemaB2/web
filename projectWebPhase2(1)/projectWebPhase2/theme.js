const toggleBtn = document.querySelector(".theme-toggle");
const body = document.body;

// إذا الزر موجود (يعني الصفحة فيها Home فقط)
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = "🌙";
        }
    });
}

// تحميل الثيم في جميع الصفحات
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    if (toggleBtn) toggleBtn.innerHTML = "☀️";
} else {
    if (toggleBtn) toggleBtn.innerHTML = "🌙";
}
