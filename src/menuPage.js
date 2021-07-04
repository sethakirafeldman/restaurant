const pageElements = ['menu','eggs', "pancakes", "benny", "huevos", "waffles"];

//add descriptions to items somewhere.  
 const pageContent = {
    menu: "<h3>Menu</h3>",
    eggs: "Ain't Fakin' Bacon & Eggs - $5.95",
    pancakes: "Flappin' Jack's Pancakes - $5.95",
    benny: "Hollandaised and Confused - $7.95",
    huevos: "Huevos Rancheros - $8.95",
    waffles: "Waffles & Dreams - 8.95"
 };

 const itemDescriptions = {
    eggs: "Traditional farmer's delight. Served with freshly cut hashbrowns and coffee.",
    pancakes: "Start your day right with desert.",
    benny: "Zee Bistro's take on Eggs Benny. Roll over, Benedict.",
    huevos: "",
    waffles: ""

 };


 const buildMenu = () => {

    const main = document.getElementById("mainContainer");
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let div = "";
    let activeElement = ""
    let tempactive = "";

        let i = 0;
        while (i < pageElements.length) {
            activeElement = pageElements[i];
            div = document.createElement("div");
            div.id= activeElement;
            div.innerHTML = pageContent[activeElement];
            main.appendChild(div);
           // tempactive= document.getElementById(pageElements[i]);
            //tempactive.appendChild(itemDescriptions.pageElements[i]);

            i++;
        };

 };

 const menuModule = () => {
    let menuButton = document.getElementById("menu");
    menuButton.addEventListener('click', buildMenu);
};

export { menuModule}