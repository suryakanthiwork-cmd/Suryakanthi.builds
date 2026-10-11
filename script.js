/* =========================================
   SURYAKANTHI — INTERACTIONS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 1. SCROLL REVEAL ANIMATIONS
  // ========================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  // ========================================
  // 2. SCROLL PROGRESS BAR
  // ========================================

  const progressBar = document.getElementById("scrollProgress");

  let scrollTicking = false;

  function updateScrollProgress() {

    if (!progressBar) return;

    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentage =
      scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progressBar.style.width = `${percentage}%`;

    scrollTicking = false;

  }

  window.addEventListener(
    "scroll",
    () => {

      if (!scrollTicking) {

        window.requestAnimationFrame(updateScrollProgress);

        scrollTicking = true;

      }

    },
    { passive: true }
  );

  updateScrollProgress();


  // ========================================
  // 3. MOBILE NAVIGATION
  // ========================================

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navigationLinks = document.querySelectorAll(".nav-links a");

  function closeMenu() {

    if (!menuToggle || !navLinks) return;

    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("menu-open");

  }

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      document.body.classList.toggle("menu-open", isOpen);

    });

    navigationLinks.forEach((link) => {

      link.addEventListener("click", closeMenu);

    });

    document.addEventListener("keydown", (event) => {

      if (event.key === "Escape") {

        closeMenu();

      }

    });

    window.addEventListener("resize", () => {

      if (window.innerWidth > 650) {

        closeMenu();

      }

    });

  }


  // ========================================
  // 4. FAQ ACCORDION
  // Keep only one FAQ open at a time.
  // ========================================

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {

    item.addEventListener("toggle", () => {

      if (!item.open) return;

      faqItems.forEach((otherItem) => {

        if (otherItem !== item && otherItem.open) {

          otherItem.open = false;

        }

      });

    });

  });


  // ========================================
  // 5. DYNAMIC COPYRIGHT YEAR
  // ========================================

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

  }


  // ========================================
  // 6. PROJECT CARD HOVER POLISH
  // ========================================

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {

    card.addEventListener("focusin", () => {

      card.classList.add("project-focused");

    });

    card.addEventListener("focusout", () => {

      card.classList.remove("project-focused");

    });

  });


  // ========================================
  // 7. CONTACT BUTTON TRACKING HOOK
  // ========================================

  const contactButtons = document.querySelectorAll(
    ".contact-button, .floating-whatsapp, .nav-cta"
  );

  contactButtons.forEach((button) => {

    button.addEventListener("click", () => {

      // Optional:
      // Add your analytics event here when analytics is configured.

    });

  });


  console.log("SURYAKANTHI portfolio initialized successfully.");

});