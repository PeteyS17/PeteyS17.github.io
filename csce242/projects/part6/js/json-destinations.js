const getDestinations = async () => {
    const url = "https://peteys17.github.io/csce242/projects/json/destinations.json"; 
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    } catch (err) {
      console.error("JSON fetch error:", err);
      return [];
    }
  };
  
  const makeCard = (place) => {
    const wrapper = place.detail_link ? document.createElement("a") : document.createElement("section");
    wrapper.className = place.detail_link ? "tile tile--link" : "tile";
    if (place.detail_link) wrapper.href = place.detail_link;
  
    const img = document.createElement("img");
    img.src = place.img_name;
    img.alt = place.title;
    img.loading = "lazy";
  
    const title = document.createElement("p");
    title.innerHTML = `<strong>${place.title}</strong>`;
  
    const meta = document.createElement("div");
    meta.style.padding = "10px 12px";
    meta.style.background = "#fff";
    meta.style.borderTop = "1px solid #eef4fb";
    meta.style.textAlign = "left";
    meta.innerHTML =
      `<small>${place.location} · ${place.category} · ${place.duration} · ${place.budget}</small><br>` +
      `<span>${place.blurb}</span>`;

    wrapper.appendChild(img);
    wrapper.appendChild(title);
    wrapper.appendChild(meta);
  
    return wrapper;
  };
  
  const showDestinations = async () => {
    const listDiv = document.getElementById("destinations-list");
    if (!listDiv) return;
  
    const items = await getDestinations();
    listDiv.innerHTML = "";
  
    items.forEach((place) => listDiv.appendChild(makeCard(place)));
  };
  
  showDestinations();
  