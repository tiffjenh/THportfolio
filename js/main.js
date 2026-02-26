(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close nav when clicking a link (for in-page anchors)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Header scroll state
  var header = document.querySelector(".header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
