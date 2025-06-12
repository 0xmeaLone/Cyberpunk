// Animasi Scroll (Kode Anda yang sudah ada)
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

// Menu Toggle dan Animasi (Kode Anda yang sudah ada)
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

  // --- Start: Penyesuaian untuk Efek Pengetikan di Bagian About dan Portfolio ---

  // Efek pengetikan untuk bagian 'Tentang Saya' (About)
  const animatedTextElement = document.getElementById("animated-text");
  // Pastikan elemen 'animated-text' memiliki teks di HTML (seperti di contoh HTML sebelumnya)
  const textToAnimateAbout = animatedTextElement ? animatedTextElement.textContent : '';
  if (animatedTextElement) {
    animatedTextElement.textContent = ''; // Kosongkan teks di awal
  }

  let charIndexAbout = 0;
  const typingSpeedAbout = 50; // Kecepatan untuk section 'Tentang Saya'

  function typeWriterAbout() {
    if (animatedTextElement && charIndexAbout < textToAnimateAbout.length) {
      animatedTextElement.textContent += textToAnimateAbout.charAt(charIndexAbout);
      charIndexAbout++;
      setTimeout(typeWriterAbout, typingSpeedAbout);
    }
  }

  // Intersection Observer untuk memicu pengetikan di bagian 'Tentang Saya'
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const observerAbout = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated-about')) {
                // Reset dan mulai mengetik saat bagian 'about' terlihat
                charIndexAbout = 0;
                if (animatedTextElement) animatedTextElement.textContent = '';
                typeWriterAbout();
                entry.target.classList.add('animated-about'); // Tandai sudah dianimasikan
                observerAbout.unobserve(aboutSection); // Hentikan observasi setelah animasi pertama
            }
        });
    }, {
        threshold: 0.5 // Pemicu saat 50% dari section terlihat
    });
    observerAbout.observe(aboutSection);
  }


  // Efek pengetikan untuk bagian 'Portfolio'
  const portfolioElements = document.querySelectorAll('.typewriter-text');
  const typingSpeedPortfolio = 30; // Kecepatan mengetik untuk portfolio (sesuaikan)

  function typeSingleLine(element, text, charIdx, callback) {
    if (charIdx < text.length) {
      element.textContent += text.charAt(charIdx);
      setTimeout(() => typeSingleLine(element, text, charIdx + 1, callback), typingSpeedPortfolio);
    } else if (callback) {
      callback(); // Panggil callback setelah baris selesai diketik
    }
  }

  let currentPortfolioLine = 0;

  function startPortfolioTypingSequence() {
    if (currentPortfolioLine < portfolioElements.length) {
      const currentElement = portfolioElements[currentPortfolioLine];
      const originalText = currentElement.getAttribute('data-text');
      if (originalText) {
          currentElement.textContent = ''; // Kosongkan elemen sebelum mengetik
          typeSingleLine(currentElement, originalText, 0, () => {
              currentPortfolioLine++;
              startPortfolioTypingSequence(); // Pindah ke baris berikutnya
          });
      } else {
          // Jika tidak ada data-text, langsung ke baris berikutnya
          currentPortfolioLine++;
          startPortfolioTypingSequence();
      }
    }
  }

  // Intersection Observer untuk memicu pengetikan di bagian 'Portfolio'
  const portfolioSection = document.getElementById('portfolio');
  if (portfolioSection) {
    const observerPortfolio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated-portfolio')) {
          startPortfolioTypingSequence();
          entry.target.classList.add('animated-portfolio'); // Tandai sudah dianimasikan
          observerPortfolio.unobserve(portfolioSection); // Hentikan observasi
        }
      });
    }, {
      threshold: 0.3 // Pemicu saat 30% dari section terlihat
    });
    observerPortfolio.observe(portfolioSection);
  }

  // --- End: Penyesuaian untuk Efek Pengetikan ---

}); // Penutup untuk DOMContentLoaded awal


// Efek Hover pada Card (Kode Anda yang sudah ada)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 20px #00ffcc";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});

// Scroll Up Button (Kode Anda yang sudah ada)
document.addEventListener("DOMContentLoaded", () => { // DOMContentLoaded ganda, bisa digabung
  const scrollUpButton = document.getElementById("scroll-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollUpButton.classList.add("visible");
    } else {
      scrollUpButton.classList.remove("visible");
    }
  });

  scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// Partner Item Visibility (Kode Anda yang sudah ada)
document.addEventListener("DOMContentLoaded", () => { // DOMContentLoaded ganda, bisa digabung
  const partnerItems = document.querySelectorAll(".partner-item");

  const checkVisibility = () => {
    partnerItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        item.classList.add("visible");
      }
    });
  };

  checkVisibility();
  window.addEventListener("scroll", checkVisibility);
});
