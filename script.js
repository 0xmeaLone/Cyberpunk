// Animasi Scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

// Tambahkan ini di script.js
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");
  const menuItems = document.querySelectorAll(".menu-item");

  menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("visible");

    if (menuList.classList.contains("visible")) {
      // Animasi muncul satu per satu
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, index * 100); // Delay 100ms per item
      });
    } else {
      // Reset animasi saat menu disembunyikan
      menuItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
      });
    }
  });
});
// Efek Hover pada Card
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 20px #00ffcc";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});
