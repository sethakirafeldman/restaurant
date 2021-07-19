const contactValues = ['phone', 'email'];

const contactInfo = {
    
    phone: "555-555-5555",
    email: "contact@zeebistro.com"

};

const buildContact = () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let i = 0;
    let div = "";
    let contactDiv = document.createElement("h3");
    let contactValDiv = document.createElement("div");
    let selDiv = "";

    contactDiv.id="contact";
    contactDiv.innerHTML="<h3>Contact</h3>";
    mainContainer.appendChild(contactDiv);

    while (i < Object.keys(contactInfo).length) {
        div = document.createElement("div");
        div.id= Object.entries(contactInfo)[i][0];
        div.innerHTML = Object.entries(contactInfo)[i][0];
        contactDiv.appendChild(div);
        selDiv = document.getElementById(contactValues[i]);
        contactValDiv.innerHTML = Object.entries(contactInfo)[i][1];
        selDiv.appendChild(contactValDiv);

        i++

    };


};

const contactModule = () => {

    let contactButton = document.getElementById("contactBtn");
    contactButton.addEventListener("click", buildContact);
    contactButton.click();
};

export { contactModule }