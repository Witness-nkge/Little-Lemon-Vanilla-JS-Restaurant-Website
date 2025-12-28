const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    // Change icon
    if (nav.classList.contains("active")) {
      toggleBtn.textContent = "✖";
    } else {
      toggleBtn.textContent = "☰";
    }

});

document.querySelectorAll("#main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});