// BEFORE hamster/gerbil pics
const beforeImages = {
    "Nibbles":    "images/bham1.jpeg",
    "Cheeks":   "images/bham2.jpeg",
    "Peanut":   "images/bham3.jpeg",
    "Cinnamon": "images/bger4.jpeg",
    "Puff":     "images/bham5.jpeg",
  };
  
  // AFTER hamster/gerbil pics
  const afterImages = {
    "Nibbles":  "images/aham1.jpeg",
    "Cheeks":   "images/aham2.jpeg",
    "Peanut":   "images/aham3.jpeg",
    "Cinnamon": "images/ager4.jpeg",
    "Puff":     "images/aham5.jpeg",
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.getElementById("close");
  
    
    Object.keys(beforeImages).forEach((name) => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("data-name", name);
  
      const img = document.createElement("img");
      img.src = beforeImages[name];
      img.alt = `${name} before adoption`;
  
      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = `Please adopt ${name}`;
  
      card.append(img, caption);
      gallery.append(card);
    });
  
    
    const openPopup = (name) => {
      popupTitle.textContent = `${name} after adoption`;
      popupImg.src = afterImages[name] || beforeImages[name];
      popupImg.alt = `${name} after adoption`;
      popup.classList.remove("hidden");
    };
  
    const closePopup = () => {
      popup.classList.add("hidden");
      popupImg.removeAttribute("src");
    };
  
    gallery.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (!card) return;
      const name = card.getAttribute("data-name");
      openPopup(name);
    });
  
    closeBtn.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) closePopup();
    });
  });
  