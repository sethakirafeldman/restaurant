const foodItems = ['eggs', "pancakes", "benny", "huevos", "waffles"];

//add descriptions to items somewhere.  

 const pageContent = {

    eggs: "Ain't Fakin' Bacon & Eggs", 
    pancakes: "Flappin' Jack's Pancakes",
    benny: "Hollandaised and Confused",
    huevos: "Huevos Rancheros",
    waffles: "Waffles & Whipped Dreams"
 };

 const price = {
    eggs: "$5.95",
    pancakes: "$5.95",
    benny: "$7.95",
    huevos: "$8.95",
    waffles: "8.95"
 };


 const itemDescriptions = {
    eggs: "Traditional farmer's delight. Served with freshly cut hashbrowns and coffee.",
    pancakes: "Start your day right with desert.",
    benny: "Zee Bistro's take on Eggs Benny. Roll over, Benedict. Benny and the Dicts",
    huevos: "If you're feeling fiery, look no more.",
    waffles: "Essentially a tortured pancake."
 };


 const buildMenu = () => {

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let div = "";
    let div2 = "";
    let div3 = "";
    let img = "";
    

    let menu = document.createElement("div");
    menu.id = "foodMenu";
    menu.innerHTML = "<h3>Menu</h3>";
    mainContainer.appendChild(menu);
    
        let i = 0;
        while (i < foodItems.length) {
            div = document.createElement("div");
            div.id = foodItems[i];
            div.classList.add("foodItem");
            div.innerHTML = pageContent[foodItems[i]];
            menu.appendChild(div);

            div2 = document.createElement("div");
            div2.classList.add("foodDescription");
            div2.innerHTML = itemDescriptions[foodItems[i]];
            div.appendChild(div2);

            div3 = document.createElement("div");
            div3.classList.add("price");
            div3.innerHTML = "- " + price[foodItems[i]];
            div2.appendChild(div3);

            // img = new Image();
            // img.src = Eggs;
            // div3.appendChild(img);

            i++;

        };

 };

 const menuModule = () => {
    let menuButton = document.getElementById("menuBtn");
    menuButton.addEventListener('click', buildMenu);
};

export { menuModule}