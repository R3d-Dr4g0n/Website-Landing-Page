document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle_btn");
    const closeBtn = document.getElementById("close_btn");
    const navMenu = document.getElementById("nav_menu");
  
    toggleBtn.addEventListener("click", () => {
      navMenu.style.display = "block";
    });
  
    closeBtn.addEventListener("click", () => {
      navMenu.style.display = "none";
    });
  
    // Animate on scroll initialization
    AOS.init();
  });
  