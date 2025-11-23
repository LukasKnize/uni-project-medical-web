const showMenu = () => {
  const menuElement = document.querySelector("#mobileMenu");
  const display = getComputedStyle(menuElement).display;
  if (display === "none") {
    menuElement.style.display = "flex";
    document.querySelector("#menuCloseButton").src =
      "https://lukasknize.github.io/uni-project-medical-web/icons/close-svgrepo-com.svg";
  } else {
    menuElement.style.display = "none";
    document.querySelector("#menuCloseButton").src =
      "https://lukasknize.github.io/uni-project-medical-web/icons/menu-svgrepo-com.svg";
  }
};

const scrollDownElement = document.querySelector("#scrollDown");
if (scrollDownElement) {
  scrollDownElement.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  });
}
