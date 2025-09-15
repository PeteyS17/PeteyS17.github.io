document.getElementById("sunnyCard").onclick = () => {
    const lyricsBox = document.getElementById("lyrics");
  
   
    if (lyricsBox.children.length > 0) {
      lyricsBox.innerHTML = "";
    } else {
      const lines = [
        "Here comes the sun",
        "Sun",
        "Sun",
        "Sun",
        "Here it comes"
      ];
      for (const text of lines) {
        const p = document.createElement("p");
        p.innerHTML = text;
        lyricsBox.appendChild(p);
      }
    }
  };
  

  document.getElementById("picker").oninput = (event) => {
    const emotionImg = document.getElementById("img-emotion");
    emotionImg.classList.remove("hidden");
  };
  
 
  const RAINY_SRC = "images/rain.png";
  const SUNNY_SRC = "images/sunny.png";
  
  const imgScene = document.getElementById("scene");

  let isSunny = false;
  
  imgScene.onclick = () => {
    if (isSunny) {
      imgScene.src = RAINY_SRC;
      imgScene.alt = "Rainy scene";
    } else {
      imgScene.src = SUNNY_SRC;
      imgScene.alt = "Sunny scene";
    }
    isSunny = !isSunny;
  };