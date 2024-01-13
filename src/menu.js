function menu() {
    
    const box = document.getElementById("box");
    const setContainer = document.createElement("div");
    setContainer.classList.add("menuContainer");
    const setOneDiv = document.createElement("div");
    const setOneHeader = document.createElement("div");
    const setTwoDiv = document.createElement("div");
    const setTwoHeader = document.createElement("div");
    const setThreeDiv = document.createElement("div");
    const setThreeHeader = document.createElement("div");

    // append set divs to container
    setContainer.appendChild(setOneDiv);
    setContainer.appendChild(setTwoDiv);
    setContainer.appendChild(setThreeDiv);

    box.appendChild(setContainer);

    setOneDiv.classList.add("set-card");
    setOneHeader.classList.add("set-header")
    setTwoDiv.classList.add("set-card");
    setTwoHeader.classList.add("set-header")
    setThreeDiv.classList.add("set-card");
    setThreeHeader.classList.add("set-header")

    // set one elements
    const setOneName = document.createElement("h3");
    setOneName.textContent = "Set One";
    const setOneContent = document.createElement("p");
    setOneContent.textContent = "A simple but hearty hotpot soup with some essential Chongqing ingredients.";
    setOneHeader.appendChild(setOneName);
    setOneHeader.appendChild(setOneContent);


    const setOnePrice = document.createElement("p");
    setOnePrice.classList.add("price");
    setOnePrice.textContent = "350¥ pp";
    setOneDiv.appendChild(setOneHeader);
    setOneDiv.appendChild(setOnePrice);

    // set two elements
    const setTwoName = document.createElement("h3");
    setTwoName.textContent = "Set Two";

    const setTwoContent = document.createElement("p");
    setTwoContent.textContent = "Two ChongQing style hotpot soups with a range of the more obscure delicacies this city has to offer.";
    setTwoHeader.appendChild(setTwoName);
    setTwoHeader.appendChild(setTwoContent);

    const setTwoPrice = document.createElement("p");
    setTwoPrice.classList.add("price");
    setTwoPrice.textContent = "450¥ pp";
    setTwoDiv.appendChild(setTwoHeader);
    setTwoDiv.appendChild(setTwoPrice);

    // set three elements 
    const setThreeName = document.createElement("h3");
    setThreeName.textContent = "Set Three";
    const setThreeContent = document.createElement("p");
    setThreeContent.textContent = "An insane three styles of hotpot soups with every Chonqing ingredient imaginable. A range of dry side-dishes that will leave your tongue numb.";
    setThreeHeader.appendChild(setThreeName);
    setThreeHeader.appendChild(setThreeContent);

    const setThreePrice = document.createElement("p");
    setThreePrice.classList.add("price");
    setThreePrice.textContent = "700¥ pp";
    setThreeDiv.appendChild(setThreeHeader);
    setThreeDiv.appendChild(setThreePrice);
}

export default menu;