const pageElements = ['about','aboutTwo'];

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

    let homeDiv = document.createElement("div");
    homeDiv.id = "home";
    homeDiv.innerHTML = "<h3>Home</h3>";
    mainContainer.appendChild(homeDiv);

    let div = "";
    let activeElement = ""

        let i = 0;
        while (i < pageElements.length) {
            activeElement = pageElements[i];
            div = document.createElement("div");
            div.id= activeElement;
            div.classList.add("pageText");
            div.innerHTML = pageContent[activeElement];
            homeDiv.appendChild(div);
            i++;
        };
    };

const homeModule = () => {

    let homeButton = document.getElementById("homeBtn");
    homeButton.addEventListener("click", buildHome);
    homeButton.click();


};

export { homeModule }