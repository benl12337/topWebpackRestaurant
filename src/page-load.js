const pageLoad = function() {
    const box = document.getElementById("box"); 
    
    const homeDiv = document.createElement("p");
    homeDiv.textContent = "Welcome to Taste of Wulong. We hope you enjoy your stay.";
    box.appendChild(homeDiv);
}

export default pageLoad;