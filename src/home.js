const home = () => {
    let homeDiv = document.createElement("div");
    homeDiv.id = "home";
    homeDiv.innerText = "this is the home page";
    let main = document.getElementById("mainContainer");
    main.appendChild(homeDiv);
}

export { home }