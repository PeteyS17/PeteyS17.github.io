
if (document.getElementById("year")) {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }
  

  (function () {
    var toggleBtn = document.getElementById("toggle-nav");
    var navList = document.querySelector("#main-nav ul");
  
    if (!toggleBtn || !navList) return;
  
    function isMobile() { return window.matchMedia("(max-width: 640px)").matches; }
    function showNav()  { navList.classList.add("open"); toggleBtn.setAttribute("aria-expanded", "true"); }
    function hideNav()  { navList.classList.remove("open"); toggleBtn.setAttribute("aria-expanded", "false"); }
    function toggleNav(){ if (navList.classList.contains("open")) hideNav(); else showNav(); }
  
    
    if (isMobile()) hideNav(); else showNav();
  
    // click hamburger
    toggleBtn.onclick = function () { if (isMobile()) toggleNav(); };
  
   
    var links = navList.querySelectorAll("a");
    links.forEach(function (a) {
      a.onclick = function () { if (isMobile()) hideNav(); };
    });
  
    // Esc to close
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isMobile()) hideNav();
    });
  
    // resize updates state
    window.addEventListener("resize", function () {
      if (isMobile()) hideNav(); else showNav();
    });
  })();
  
  
  const exampleSections = document.querySelectorAll(".examples section");
  if (exampleSections.length > 0) {
    exampleSections.forEach(function (chip) {
      chip.onclick = function () {
        const keyword = chip.textContent.toLowerCase();
        const tiles = document.querySelectorAll(".gallery .tile");
        tiles.forEach(function (tile) {
          const text = tile.textContent.toLowerCase();
          if (keyword === "all" || text.includes(keyword)) {
            tile.style.display = "block";
          } else {
            tile.style.display = "none";
          }
        });
      };
    });
  }
  