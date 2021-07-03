const pageElements = ['home', 'about','test'];

const pageContent = {    
    //pageElements: ['home', 'about','test'],
    home: "<h3>this is the home page</h3>",
    about: "Zee Bistro is home to the finest grub money can buy. Flavour you'll savor, and consistency that never wavers!",
    test: "extra element test"
};

const buildHome = () => {
    const main = document.getElementById("mainContainer");
    let div = "";
    let activeElement = ""

    let i = 0;
        while (i < pageElements.length) {
            activeElement = pageElements[i];
            div = document.createElement("div");
            div.id= activeElement;
            div.innerHTML = pageContent[activeElement];
            main.appendChild(div);
            i++;
        };

    };
    /* let div = document.createElement("div");
    div.id = "homeDiv";
    div.innerHTML = pageContent.home;
    main.appendChild(div);

    div = document.createElement("div");
    div.id="about";
    div.innerHTML = pageContent.about;
    main.appendChild(div);

}; */ 

const homeModule = () => {

    console.log("homefunction");
    let homeButton = document.getElementById("home");
    homeButton.addEventListener("click", buildHome);
};

export { homeModule }