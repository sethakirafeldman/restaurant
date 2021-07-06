const buildContact = () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    
}

const contactModule = () => {

    console.log("contactModule");
    let contactButton = document.getElementById("contact");
    contactButton.addEventListener("click", buildContact);
    contactButton.click();


};

export { contactModule }