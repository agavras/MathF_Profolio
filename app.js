// Variables
const btnJourNuit = document.getElementById("btnJourNuit");
let currentMode = "DARK";

const btnOpenProject1 = document.getElementById("btnOpenProject1");
const btnOpenProject2 = document.getElementById("btnOpenProject2");
const btnOpenProject3 = document.getElementById("btnOpenProject3");

const btnCloseProject1 = document.getElementById("btnCloseProject1");
const btnCloseProject2 = document.getElementById("btnCloseProject2");
const btnCloseProject3 = document.getElementById("btnCloseProject3");

const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");

// Event Listener
btnJourNuit.addEventListener("click", changeCSSVariables);

btnOpenProject1.addEventListener("click", showProject.bind(null, 1));
btnOpenProject2.addEventListener("click", showProject.bind(null, 2));
btnOpenProject3.addEventListener("click", showProject.bind(null, 3));

btnCloseProject1.addEventListener("click", hideProject.bind(null, 1));
btnCloseProject2.addEventListener("click", hideProject.bind(null, 2));
btnCloseProject3.addEventListener("click", hideProject.bind(null, 3));

// Change les variables CSS pour Jour/Nuit
function changeCSSVariables() {
    if (currentMode === "DARK") {
        document.documentElement.style.setProperty("--bgColor", "#ecf2f3");
        document.documentElement.style.setProperty("--scrollbar-track", "#cedbdf");
        document.documentElement.style.setProperty("--scrollbar-thumb", "#87bb34");
        document.documentElement.style.setProperty("--switchColor", "#cedbdf");
        document.documentElement.style.setProperty("--modalColor", "#ecf2f3");
        document.documentElement.style.setProperty("--linkColor", "#45670F");
        document.documentElement.style.setProperty("--linkOffColor", "#4b4b4b");
        document.documentElement.style.setProperty("--linkOverColor", "#33251a");
        document.documentElement.style.setProperty("--pColor", "black");
        document.documentElement.style.setProperty("--bgBoxColor", "#d280d280");
        currentMode = "LIGHT";

    } else if (currentMode === "LIGHT") {
        document.documentElement.style.setProperty("--bgColor", "#1d292c");
        document.documentElement.style.setProperty("--scrollbar-track", "#4c4a48");
        document.documentElement.style.setProperty("--scrollbar-thumb", "#88bb3533");
        document.documentElement.style.setProperty("--switchColor", "#4c4a48");
        document.documentElement.style.setProperty("--modalColor", "#1d292c");
        document.documentElement.style.setProperty("--linkColor", "#87bb34");
        document.documentElement.style.setProperty("--linkOffColor", "#b4b4b4");
        document.documentElement.style.setProperty("--linkOverColor", "#e6d8cd");
        document.documentElement.style.setProperty("--pColor", "azure");
        document.documentElement.style.setProperty("--bgBoxColor", "#b4d2ff4d");
        currentMode = "DARK";
    }
}

//Rive anim page contact
new rive.Rive({
    src: "/morphtest.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    layout: new rive.Layout({ fit: "none", alignment: "center" }),
})

//affiche la modal projet 1 ou 2 ou 3
function showProject(projetID) {
    if (projetID === 1) {
        modal1.className = "animate__animated animate__fadeIn animate__1"
        modal1.style.display = "block";
    }

    if (projetID === 2) {
        modal2.className = "animate__animated animate__fadeIn animate__1"
        modal2.style.display = "block";
    }

    if (projetID === 3) {
        modal3.className = "animate__animated animate__fadeIn animate__1"
        modal3.style.display = "block";
    }
}

//cache la modal projet 1 ou 2 ou 3
function hideProject(projetID) {
    if (projetID === 1) {
        modal1.className = "empty"
        modal1.style.display = "none";
    }

    if (projetID === 2) {
        modal2.className = "empty"
        modal2.style.display = "none";
    }

    if (projetID === 3) {
        modal3.className = "empty"
        modal3.style.display = "none";
    }
}