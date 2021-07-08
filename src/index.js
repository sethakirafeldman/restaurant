import { pageLoad } from './pageLoad.js';
import { homeModule } from './homePage.js';
import { menuModule } from './menuPage.js';
import { contactModule } from './contact.js';
import './style.css';
import Background from './assets/diner.jpeg';

pageLoad();
menuModule();
contactModule(); //this makes default despite menuModule not doing that.
homeModule(); // need to set this to default


const background = new Image();
background.src = Background;
background.id="background";
content.appendChild(background);
//this has to be set to content in order to stay with each load.
