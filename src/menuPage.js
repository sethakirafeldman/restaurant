import Eggs from './assets/eggs_img.jpg';
import Pancakes from './assets/pancakes_img.jpg';
import Benny from './assets/benny_img.jpg';
import Huevos from './assets/huevos_img.jpg';
import Waffles from './assets/waffles_img.jpg';
import Omelette from './assets/omelette_img.jpg';

const foodItems = ['eggs', "pancakes", "benny", "huevos", "waffles", "omelette"];
const foodImages = [Eggs, Pancakes, Benny, Huevos, Waffles, Omelette];
const pageContent = {

    eggs: "Ain't Fakin' Bacon & Eggs", 
    pancakes: "Flappin' Jack's Pancakes",
    benny: "Hollandaised and Confused",
    huevos: "Huevos Rancheros",
    waffles: "Waffles du Beurre",
    omelette: "Circle of Life Omelette"
 };

 const price = {
    eggs: "$5.95",
    pancakes: "$5.95",
    benny: "$7.95",
    huevos: "$8.95",
    waffles: "$8.95",
    omelette: "$6.95"
 };


 const itemDescriptions = {
    eggs: "Traditional farmer's delight. Served with freshly cut hashbrowns and coffee.",
    pancakes: "Start your day right with desert.",
    benny: "Zee Bistro's take on Eggs Benny. Roll over, Benedict. Benny and the Dicts",
    huevos: "If you're feeling fiery, look no more.",
    waffles: "Essentially, it's a tortured pancake. Buttered for your pleasure.",
    omelette: "You know what it is."
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
   //  menu.innerHTML = "<h3>Menu</h3>";
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

            i++;

        };

   let j = 0;

   while (j < foodImages.length ) { 
      console.log("jWhile?");
      let temp = document.getElementById(foodItems[j]);
      img = new Image();
      img.id= foodItems[j]+"-img";
      img.classList.add("foodImage");
      img.src= foodImages[j];
      temp.appendChild(img);
      j++;
   }; 
   
 };

 const menuModule = () => {
    let menuButton = document.getElementById("menuBtn");
    menuButton.addEventListener('click', buildMenu);
};

export { menuModule}
