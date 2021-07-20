const contactValues = ["phone", "email"];

const contactInfo = {
    
    phone: "555-555-5555",
    email: "contact@zeebistro.com"

};

const buildContact = () => {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

    let k = 0;
    let div = "";
    let contactDiv = document.createElement("h3");

    contactDiv.id="contact";
    contactDiv.innerHTML="<h3>Contact</h3>";
    mainContainer.appendChild(contactDiv);

    while (k < Object.keys(contactInfo).length) {
        div = document.createElement("div");
        div.id= Object.entries(contactInfo)[k][0];
        div.innerHTML = Object.entries(contactInfo)[k][0];
        contactDiv.appendChild(div);
        k++;

    };

    let l = 0;
    let contactValDiv = ""
    let selDiv = "";

    while (l < contactValues.length) {  
        // console.log(Object.values(contactInfo)[l]+l+"passtest");
        contactValDiv = document.createElement("div");
        contactValDiv.innerHTML = Object.values(contactInfo)[l];
        contactValDiv.classList.add("contactValue");
        document.querySelector('#'+contactValues[l]).appendChild(contactValDiv);

        l++;
        // not at all clear why val only ends up in last div.
    };
};

const contactModule = () => {

    let contactButton = document.getElementById("contactBtn");
    contactButton.addEventListener("click", buildContact);
    contactButton.click();
};

export { contactModule }