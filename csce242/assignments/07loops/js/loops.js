const isNight = () => {
  const h = new Date().getHours();
  return h >= 18 || h < 6;
};

document.getElementById("drawBtn").onclick = () => {
  const stage = document.getElementById("stage");
  stage.innerHTML = "";

  
  stage.style.background = isNight() ? "var(--night)" : "var(--sky-day)";

  const orb = document.createElement("div");
  orb.className = isNight() ? "moon" : "sun";
  stage.appendChild(orb);

  const cloudsRow = document.createElement("div");
  cloudsRow.className = "row clouds-row";
  stage.appendChild(cloudsRow);
  for (let i = 0; i < 6; i++) {
    const c = document.createElement("div");
    c.className = "cloud";
    cloudsRow.appendChild(c);
  }

  const treesRow = document.createElement("div");
  treesRow.className = "row trees-row";
  stage.appendChild(treesRow);
  for (let i = 0; i < 6; i++) {
    const t = document.createElement("div");
    t.className = "tree";
    const canopy = document.createElement("div");
    canopy.className = "canopy";
    const trunk = document.createElement("div");
    trunk.className = "trunk";
    t.appendChild(canopy);
    t.appendChild(trunk);
    treesRow.appendChild(t);
  }
};

window.addEventListener("resize", () => {
  const stage = document.getElementById("stage");
  if (stage && stage.querySelector(".cloud,.tree,.sun,.moon")) {
    document.getElementById("drawBtn").click();
  }
});
