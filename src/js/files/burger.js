export const burgerFunction = () => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  function onCloseMenuEsc(e) {
    if (e.code === "Escape") {
      openMenuBtn.setAttribute("aria-expanded", false);
      mobileMenu.classList.remove("is-open");
      openMenuBtn.classList.remove("hide");
      closeMenuBtn.classList.add("hide");
    }
  }

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");
    if (mobileMenu.classList.contains("is-open")) {
      closeMenuBtn.classList.remove("hide");
      openMenuBtn.classList.add("hide");
      document.body.classList.add("blocked");
    } else {
      closeMenuBtn.classList.add("hide");
      openMenuBtn.classList.remove("hide");
      document.body.classList.remove("blocked");
    }
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    openMenuBtn.classList.remove("hide");
    closeMenuBtn.classList.add("hide");
  });
};



