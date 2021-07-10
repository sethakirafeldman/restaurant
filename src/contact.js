const contactInfo = {
    title: "<h3>Contact</h3>",
    phone: "<strong>Phone Number:</strong> <a href='555-555-5555'>555-555-5555",
    email: "<strong>Email: </strong><a href=contact@zeebistro.com>contact@zeebistro.com"

};

const buildContact = () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let i = 0;
    let div = "";

    while (i < Object.keys(contactInfo).length) {
        div = document.createElement("div");
        div.id= Object.entries(contactInfo)[i][1];
        div.innerHTML = Object.entries(contactInfo)[i][1];
        mainContainer.appendChild(div);

        i++

    };
};

const contactModule = () => {

    let contactButton = document.getElementById("contactBtn");
    contactButton.addEventListener("click", buildContact);
    contactButton.click();
};

export { contactModule }