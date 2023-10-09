// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hummberger Menu Di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Di luar sidebar Untuk Menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document,
  addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
  });
