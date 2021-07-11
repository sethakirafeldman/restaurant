const contactInfo = {
    
    phone: "<strong>Phone Number:</strong> <a href='555-555-5555'>555-555-5555",
    email: "<strong>Email: </strong><a href=contact@zeebistro.com>contact@zeebistro.com"

};

const buildContact = () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let i = 0;
    let div = "";
    let contactDiv = document.createElement("div");
    contactDiv.id="contact";
    contactDiv.innerHTML="<h3>Contact</h3>";
    mainContainer.appendChild(contactDiv);

    while (i < Object.keys(contactInfo).length) {
        div = document.createElement("div");
        div.id= Object.entries(contactInfo)[i][1];
        div.innerHTML = Object.entries(contactInfo)[i][1];
        contactDiv.appendChild(div);

        i++

    };
};

const contactModule = () => {

    let contactButton = document.getElementById("contactBtn");
    contactButton.addEventListener("click", buildContact);
    contactButton.click();
};

export { contactModule }