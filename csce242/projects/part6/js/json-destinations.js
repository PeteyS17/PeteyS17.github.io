const getDestinations = async () => {
    const url = "file:///Users/petey/Desktop/PeteyS17.github.io/csce242/projects/json/destinations.json";
    try {
      const res = await fetch(url, { cache: "no-cache" });
      return res.json();
    } catch (err) {
      console.log("Sorry, could not load JSON", err);
      return [];
    }
  };
  
  const showDestinations = async () => {
    const items = await getDestinations();
    const listDiv = document.getElementById("destinations-list");
  
    items.forEach((place) => {
      const section = document.createElement("section");
      section.classList.add("tile");
  
      const img = document.createElement("img");
      img.src = place.img_name;
      img.alt = place.title;
      section.append(img);
  
      const h3 = document.createElement("h3");
      h3.textContent = place.title;
      section.append(h3);
  
      const p1 = document.createElement("p");
      p1.textContent = `${place.location} — ${place.category}`;
      section.append(p1);
  
      const p2 = document.createElement("p");
      p2.textContent = `Duration: ${place.duration} • Budget: ${place.budget}`;
      section.append(p2);
  
      const blurb = document.createElement("p");
      blurb.textContent = place.blurb;
      section.append(blurb);
  
      listDiv.append(section);
    });
  };
  
  showDestinations();
  