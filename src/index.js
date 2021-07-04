import { pageLoad } from './pageLoad.js';
import { homeModule } from './homePage.js';
import { menuModule } from './menuPage.js';
import './style.css';
import Background from './assets/diner.jpeg';

pageLoad();
homeModule(); // need to set this to default
menuModule();

const background = new Image();
background.src = Background;
content.appendChild(background);