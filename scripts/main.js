const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/JavaScript-Logo.png") {
        myImage.setAttribute("src", "images/JavaScript-Symbol.png");
    } else {
        myImage.setAttribute("src", "images/JavaScript-Logo.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `JavaScript is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `JavaScript is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});

