const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("main-nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

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

//Auth State
const isLoggedIn = sessionStorage.getItem('isLoggedIn')
if (isLoggedIn == "true") {
    document.getElementById('nav-login').textContent = "Profile"
    document.getElementById('nav-login').href = "../web-pages-html/profile.html"
}