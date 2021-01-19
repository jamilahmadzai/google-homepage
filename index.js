const menuItems = document.querySelector(".menu-items");
const body = document.querySelector("body");

body.onclick = (e) => {
  if (e.target.classList.contains("menu-btn")) {
    if (menuItems.classList.contains("active")) {
      menuItems.classList.remove("active");
    } else {
      menuItems.classList.add("active");
    }
  } else if (
    e.target.classList.contains("menu-item") ||
    e.target.classList.contains("menu-items")
  ) {
    menuItems.classList.add("active");
  } else {
    menuItems.classList.remove("active");
  }
};
