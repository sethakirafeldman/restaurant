const pageLoad = ()=> {
    const content = document.querySelector("div#content");
    console.log("pageLoad is firing");

    //create header
    let header = document.createElement("div");
    header.id = "header";
    content.appendChild(header);

    // create title
    let title = document.createElement("h1");
    title.innerText = "Zee Bistro";
    title.id = "title"; 
    header.appendChild(title);

    //create headline
    let headline = document.createElement("h3");
    headline.id="headline";
    headline.innerText='"Where yum yum meets tum tum."'; 
    header.appendChild(headline);

    //create menu items
    const menuItems = ["home", "menu", "contact"];
    let i=0;

    while (i < menuItems.length) {
        let genItem = menuItems[i];
        let genButton = document.createElement("button");
        genButton.id= genItem;
        genButton.setAttribute("class", "tabLink");
        genButton.setAttribute("onclick", "switchTab("+genItem+")" );
        genButton.innerText= genItem.toUpperCase();
        header.appendChild(genButton);
        i++;     
    }

    // make main container
    let main = document.createElement("div");
    main.id= "mainContainer";
    content.appendChild(main);

    //main.appendChild(background);
}

export { pageLoad }  