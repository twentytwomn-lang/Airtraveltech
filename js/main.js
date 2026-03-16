document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     MOBILE MENU TOGGLE
  ========================= */
  const menuBtn = document.querySelector("#menu-btn");
  const mobileMenu = document.querySelector("#mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* =========================
     HERO MODAL (home page: #modal, #open-modal, #close-modal)
  ========================= */
  const modal = document.querySelector("#modal");
  const openBtn = document.querySelectorAll("#open-modal");
  const closeBtn = document.querySelectorAll("#close-modal");

  if (modal) {
    openBtn.forEach(btn => btn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    }));
    closeBtn.forEach(btn => btn.addEventListener("click", () => {
      modal.classList.add("hidden");
    }));
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  /* =========================
     BOOKING MODAL (navbar: .open-booking, #booking-modal, #close-booking)
  ========================= */
  const bookingModal = document.querySelector("#booking-modal");
  const openBookingBtns = document.querySelectorAll(".open-booking");
  const closeBookingBtn = document.querySelector("#close-booking");

  if (bookingModal) {
    openBookingBtns.forEach(btn => btn.addEventListener("click", () => {
      bookingModal.classList.remove("hidden");
    }));
    if (closeBookingBtn) {
      closeBookingBtn.addEventListener("click", () => {
        bookingModal.classList.add("hidden");
      });
    }
    bookingModal.addEventListener("click", e => {
      if (e.target === bookingModal) bookingModal.classList.add("hidden");
    });
  }

  /* =========================
     SMOOTH SCROLL FOR LINKS
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
