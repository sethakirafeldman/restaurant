const pageElements = ['home', 'about','aboutTwo'];

const pageContent = {    
    home: "<h3>Home</h3>",
    about: "Zee Bistro is home to the finest grub money can buy. Flavour you'll savor, and consistency that never wavers!",
    aboutTwo: "<br>Founded in 1931, Zee Bistro has been serving up the classics with a smile ever since."
};

const buildHome = () => {
    const main = document.getElementById("mainContainer");

    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild); 
    };

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

const homeModule = () => {

    console.log("homefunction");
    let homeButton = document.getElementById("home");
    homeButton.addEventListener("click", buildHome);
    homeButton.click();


};

export { homeModule }