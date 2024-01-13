import pageLoad from "./page-load.js";
import refresh from "./refresh.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

// code to render the base of the homepage
const body = document.querySelector('body');

const buttonDiv = document.createElement("div");
buttonDiv.id = "buttonDiv";
const box = document.createElement("div");
box.id = "box";
const content = document.getElementById("content");
const header = document.getElementById("header");
const headerText = document.createElement('h1');
const taglineText = document.createElement('h3');

content.appendChild(buttonDiv);
content.appendChild(box);


headerText.innerText = "TASTE OF WULONG";
taglineText.innerText = "Authentic Chonqing cuisine with a breathtaking view.";
header.appendChild(headerText);
header.appendChild(taglineText);

// creating the buttons
const homeButton = document.createElement('button');
homeButton.innerText = "Home";
const menuButton = document.createElement('button');
menuButton.innerText = "Menu";
const aboutButton = document.createElement('button');
aboutButton.innerText = "About";


// appending the buttons
buttonDiv.appendChild(homeButton);
buttonDiv.appendChild(menuButton);
buttonDiv.appendChild(aboutButton);

// home button behaviour
homeButton.addEventListener("click", () => {
    refresh();
    pageLoad();
    homeButton.classList.add("selected");
    menuButton.classList.remove("selected");
    aboutButton.classList.remove("selected");
});

// menu button behaviour
menuButton.addEventListener("click", () => {
    refresh();
    menu();
    menuButton.classList.add("selected");
    homeButton.classList.remove("selected");
    aboutButton.classList.remove("selected");
});


// about button behaviour
aboutButton.addEventListener("click", () => {
    refresh();
    about();
    aboutButton.classList.add("selected");
    homeButton.classList.remove("selected");
    menuButton.classList.remove("selected");
    
});

// to run when the page loads
pageLoad();
homeButton.classList.add("selected");





