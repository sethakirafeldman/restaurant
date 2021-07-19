import { pageLoad } from './pageLoad.js';
import { homeModule } from './homePage.js';
import { menuModule } from './menuPage.js';
import { contactModule } from './contact.js';
import './style.css';
import Background from './assets/diner.jpg';

pageLoad();
menuModule();
contactModule();
homeModule(); 

const background = new Image();
background.src = Background;
background.id="background";
content.appendChild(background);


let footer = document.createElement("div");
footer.id="footer";
content.appendChild(footer);

//this has to be set to content in order to stay with each load.
