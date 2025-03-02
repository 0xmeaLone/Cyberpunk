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
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateX(0)";
        }, index * 100);
      });
    } else {
      menuItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(-20px)";
      });
    }
  });
});
// Tambahkan ini di script.js
document.addEventListener("DOMContentLoaded", () => {
  const text = "Halo saya 0xmeaLone pengembang komunitas dan bisnis";
  const animatedText = document.getElementById("animated-text");

  // Pecah teks menjadi huruf per huruf
  const letters = text.split("").map((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    return span;
  });

  // Tambahkan huruf ke dalam elemen teks
  animatedText.innerHTML = ""; // Kosongkan teks
  letters.forEach((span, index) => {
    animatedText.appendChild(span);

    // Atur delay animasi untuk setiap huruf
    setTimeout(() => {
      span.style.animation = `fadeInUp 0.5s forwards ${index * 0.1}s`;
    }, index * 100); // Delay 100ms per huruf
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
