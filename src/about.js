const about = function() {
    const box = document.getElementById("box");
    const aboutText = document.createElement("p");
    aboutText.innerText = "Taste of Wulong was created by three travellers who fell in love with ChongQing cuisine and scenery during their holiday in late 2023. They are on a mission to bring the cuisine to the Western world."

    box.appendChild(aboutText);
}

export default about;