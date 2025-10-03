const getShoes = async() => {
    const url="https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json()
    }
    catch(error){
        console.log("sorry");
    }
};

const showShoes = async() => {
     const shoes = await getShoes();
     const shoeListDiv = document.getElementById("show-list");
     
     shoes.forEach((shoe)=>{

        const section = document.createElement("section");
        section.classList.add("shoe")

        const h3 = document
        
     });
};

showShoes();