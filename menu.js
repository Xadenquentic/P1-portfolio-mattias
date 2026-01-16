"use strict";

const primaryNavigation = document.getElementById("primary-navigation");
const btnHamburger = document.getElementById("hamburger-button");
const iconHamburger = btnHamburger ? btnHamburger.querySelector(".icon-hamburger") : null;

// Guard against pages that don't include the navigation/hamburger elements.
if (btnHamburger && primaryNavigation) {
   btnHamburger.addEventListener("click", () => {
      primaryNavigation.classList.toggle("open");
      if (iconHamburger) iconHamburger.classList.toggle("morphToClose");

      const expanded = btnHamburger.getAttribute("aria-expanded");
      btnHamburger.setAttribute("aria-expanded", expanded === "false" ? "true" : "false");
   });
}