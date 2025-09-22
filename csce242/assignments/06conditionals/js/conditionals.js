
const ex1 = document.getElementById("exercise1");
const ex2 = document.getElementById("exercise2");

document.getElementById("tab-ex1").onclick = (e) => {
    e.preventDefault();
    ex1.classList.remove("hidden");
    ex2.classList.add("hidden");
};

document.getElementById("tab-ex2").onclick = (e) => {
    e.preventDefault();
    ex2.classList.remove("hidden");
    ex1.classList.add("hidden");
};

/*  Exercise 1: Planting  */
const range = document.getElementById("daysRange");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const img   = document.getElementById("plantImg");

const plural = (n) => {
    return n === 1 ? "day" : "days";
};

const updatePlant = () => {
    const d = parseInt(range.value);

    line1.innerHTML = "It’s been " + d + " " + plural(d) + " since watering your plant";

    
    line2.className = "line";

    if(d >= 1 && d <= 2){
        img.src = "images/plant1.png";
        line2.innerHTML = "Your plant is healthy and happy";
        line2.classList.add("good");
    } else if(d >= 3 && d <= 5){
        img.src = "images/plant2.png";
        line2.innerHTML = "Your plant needs watering";
        line2.classList.add("warn");
    } else if(d >= 6 && d <= 9){
        img.src = "images/plant3.png";
        line2.innerHTML = "Leaves are drooping; the color is changing, water soon";
        line2.classList.add("warn");
    } else {
        img.src = "images/plant4.png";
        line2.innerHTML = "Sorry, your plant is no longer with us";
        line2.classList.add("bad");
    }
};

range.oninput = updatePlant;
updatePlant();   //  state

/*  Exercise 2: Digital Clock  */
const clockFace = document.getElementById("clockFace");

const formatTime = (d) => {
    let h = d.getHours();
    let m = d.getMinutes();
    let ampm = "am";

    if(h >= 12){
        ampm = "pm";
    }
    h = h % 12;
    if(h === 0){
        h = 12;
    }
    if(m < 10){
        m = "0" + m;
    }

    return h + ":" + m + " " + ampm;
};

const drawClock = () => {
    const now = new Date();
    clockFace.innerHTML = formatTime(now);
};

const tick = () => {
    drawClock();
    setTimeout(tick, 60000); // update every minute
};

drawClock();
tick();
