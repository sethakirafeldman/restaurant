console.log("index.js firing");

import { pageLoad } from './pageLoad.js';
import './style.css';
import Background from './assets/diner.jpeg';
import { home } from './home.js';

pageLoad();

const switchTab = (tab) => {
    console.log("switchTab function");
    if (tab === home) {
        home();
    }
}


const background = new Image();
background.src = Background;
content.appendChild(background);