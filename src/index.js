import { pageLoad } from './pageLoad.js';
import { homeModule } from './homePage.js';
import { menuModule } from './menuPage.js';
import { contactModule } from './contact.js';


pageLoad();
menuModule();
contactModule();
homeModule(); 

import './style.css';
//this has to be set to content in order to stay with each load.
