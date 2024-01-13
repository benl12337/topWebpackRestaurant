function menu() {
    
    const box = document.getElementById("box");
    const setOneDiv = document.createElement("div");
    const setTwoDiv = document.createElement("div");
    const setThreeDiv = document.createElement("div");

    // append set divs to box
    box.appendChild(setOneDiv);
    box.appendChild(setTwoDiv);
    box.appendChild(setThreeDiv);

    setOneDiv.classList.add("set-card");
    setTwoDiv.classList.add("set-card");
    setThreeDiv.classList.add("set-card");

    // set one elements
    const setOneName = document.createElement("h3");
    setOneName.textContent = "Set One";

    const setOneContent = document.createElement("p");
    setOneContent.textContent = "A simple but hearty hotpot soup with some must-try Chongqing ingredients.";
    const setOnePrice = document.createElement("p");
    setOnePrice.textContent = "350¥ pp";
    setOneDiv.appendChild(setOneName);
    setOneDiv.appendChild(setOneContent);
    setOneDiv.appendChild(setOnePrice);

    // set two elements
    const setTwoName = document.createElement("h3");
    setTwoName.textContent = "Set Two";
    const setTwoPrice = document.createElement("p");
    setTwoPrice.textContent = "450¥ pp";
    setTwoDiv.appendChild(setTwoName);
    setTwoDiv.appendChild(setTwoPrice);

    // set three elements 
    const setThreeName = document.createElement("h3");
    setThreeName.textContent = "Set Three";
    const setThreePrice = document.createElement("p");
    setThreePrice.textContent = "700¥ pp";
    setThreeDiv.appendChild(setThreeName);
    setThreeDiv.appendChild(setThreePrice);


}

export default menu;