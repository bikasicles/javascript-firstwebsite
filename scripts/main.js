const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/JavaScript-Logo.png") {
        myImage.setAttribute("src", "images/JavaScript-Symbol.png");
    } else {
        myImage.setAttribute("src", "images/JavaScript-Logo.png");
    }
});

