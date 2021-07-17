const pageLoad = ()=> {
    const content = document.querySelector("div#content");

    //create header
    let header = document.createElement("div");
    header.id = "header";
    content.appendChild(header);

    // create title
    let title = document.createElement("h1");
    title.innerText = "Zee Bistro";
    title.id = "title"; 
    header.appendChild(title);

    // make headline div for styling.

    //create headline
    let headline = document.createElement("h3");
    headline.id="headline";
    headline.innerText='"A vintage dining experience. Nostalgia included, free of charge."'; 
    header.appendChild(headline);

    //create menu items
    const menuItems = ["home", "menu", "contact"];
    let i=0;

    while (i < menuItems.length) {
        let genItem = menuItems[i];
        let genButton = document.createElement("button");
        genButton.id= genItem+"Btn";
        genButton.setAttribute("class", "tabLink");
        genButton.innerText= genItem.toUpperCase();
        header.appendChild(genButton);
        i++;     
    }

    // make main container
    let main = document.createElement("div");
    main.id= "mainContainer";
    content.appendChild(main);
    
};

export { pageLoad }  

