import pageLoad from "./page-load.js";
import refresh from "./refresh.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

// code to render the base of the homepage
const buttonDiv = document.createElement("div");
buttonDiv.id = "buttonDiv";
const box= document.createElement("div");
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

// home button behaviour
const homeButton = document.createElement('button');
homeButton.innerText = "Home";
homeButton.addEventListener('click', ()=> {
    refresh();
    pageLoad();
});

// menu button behaviour
const menuButton = document.createElement('button');
menuButton.innerText = "Menu";
menuButton.addEventListener("click", ()=> {
    refresh();
    menu();
});


// about button behaviour
const aboutButton = document.createElement('button');
aboutButton.innerText = "About";
aboutButton.addEventListener("click", ()=> {
    refresh();
    about();
});

// appending the buttons
buttonDiv.appendChild(homeButton);
buttonDiv.appendChild(menuButton);
buttonDiv.appendChild(aboutButton);

pageLoad();



