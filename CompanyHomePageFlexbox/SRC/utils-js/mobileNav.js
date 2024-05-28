const mobileNav = () => {

  const barBtn = document.querySelector("#bar-btn");
  const mobileNav = document.querySelector("#mobile-nav-bar");
  const closeBtn = document.querySelector("#close-btn")

  const handleBarBtn = () => mobileNav.style.display = "flex";
  const closeBarBtn = () => mobileNav.style.display = "none";

  barBtn.addEventListener("click", handleBarBtn);
  closeBtn.addEventListener("click", closeBarBtn);
};

export default mobileNav;
