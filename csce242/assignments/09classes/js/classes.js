class Painting {
    constructor(title, artist, pic, framed, description) {
        this.title = title;
        this.artist = artist;
        this.pic = pic;
        this.framed = framed;
        this.description = description || "";
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("painting");
        if (this.framed) section.classList.add("framed");

        const h3 = document.createElement("h3");
        h3.className = "title";
        h3.innerHTML = this.title;
        section.append(h3);

        const img = this.picture(this.pic);
        section.append(img);

        const open = (e) => { e.preventDefault(); Painting.openModal(this); };
        h3.onclick = open;
        img.onclick = open;

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        img.alt = `${this.title} by ${this.artist}`;
        return img;
    }

    // W3Schools: open modal
    static openModal(p) {
        const modal = document.getElementById("paintingModal");
        if (!modal) return;
        document.getElementById("modalTitle").innerHTML = p.title;
        document.getElementById("modalArtist").innerHTML = "by " + p.artist + " &bull; " + (p.framed ? "Framed" : "Unframed");
        const modalImage = document.getElementById("modalImage");
        modalImage.src = `images/${p.pic}`;
        modalImage.alt = `${p.title} by ${p.artist}`;
        document.getElementById("modalCaption").innerHTML = p.description;
        modal.style.display = "block";
    }
}

// W3Schools: close modal
(function () {
    const modal = document.getElementById("paintingModal");
    if (!modal) return;
    const closeX = document.getElementById("modalClose");
    const closeBtn = document.getElementById("modalCloseBtn");
    function close() { modal.style.display = "none"; }
    if (closeX) closeX.onclick = close;
    if (closeBtn) closeBtn.onclick = close;
    window.addEventListener("click", function (e) { if (e.target === modal) close(); });
})();

const paintings = [];
paintings.push(new Painting("The Girl","Roses_Street","girlpainting.jpg",true,"Bright colors of tribal girl"));
paintings.push(new Painting("Cool Shoes","tiemcula12","coolshoes.jpg",false,"Cool shoes from the 90s."));
paintings.push(new Painting("Family Hands","PaftDrunk","familyhands.png",true,"Family hands."));
paintings.push(new Painting("Island","Hardae","islandart.png",false,"Beach and Island."));
paintings.push(new Painting("Covid Mona Lisa","Sumanley","monalisa19.jpg",true,"Mona Lisa not trying to catch Covid."));

const root = document.getElementById("painting-list");
paintings.forEach(function (p) { root.append(p.item); });
