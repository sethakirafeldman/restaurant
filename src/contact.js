import { addBackground } from "./pageLoad";

const contactValues = ["phone", "email", "location"];

const contactInfo = {
    
    phone: "<a href='tel:555-555-5555'>555-555-5555</a>",
    email: "<a href= 'mailto: contact@zeebistro.com'>contact@zeebistro.com</a>",
    location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5889.785943386578!2d-82.21936480529077!3d42.43001299315603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882557e3cd85185b%3A0x768b8fd1f4d30c4a!2sZee&#39;s%20Bistro!5e0!3m2!1sen!2sca!4v1645456030583!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

};

const buildContact = () => {

    document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let k = 0;
    let div = "";
    let contactDiv = document.createElement("div");

    let l = 0;
    let contactValDiv = ""
    let selDiv = "";


    contactDiv.id="contact";
    contactDiv.innerHTML="<h3>Contact</h3>";
    mainContainer.appendChild(contactDiv);

    while (k < Object.keys(contactInfo).length) {
        div = document.createElement("div");
        div.id= Object.entries(contactInfo)[k][0];
        div.classList.add("contactHeading");
        div.innerHTML = Object.entries(contactInfo)[k][0];
        contactDiv.appendChild(div);
      

        contactValDiv = document.createElement("div");
        contactValDiv.innerHTML = Object.values(contactInfo)[k];
        contactValDiv.classList.add("contactValue");
        document.querySelector('#'+contactValues[k]).appendChild(contactValDiv)
        k++;

    };
    addBackground(mainContainer);
};

const contactModule = () => {

    let contactButton = document.getElementById("contactBtn");
    contactButton.addEventListener("click", buildContact);
    contactButton.click();
};

export { contactModule }