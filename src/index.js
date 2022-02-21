import { pageLoad } from './pageLoad.js';
import { homeModule } from './homePage.js';
import { menuModule } from './menuPage.js';
import { contactModule } from './contact.js';
import './style.css';

pageLoad();
menuModule();
contactModule();
homeModule(); 

//this has to be set to content in order to stay with each load.
