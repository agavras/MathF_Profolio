const pcCanva = document.getElementById("application-canvas");
// console.log(pcCanva);
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

pcCanva.className="animate__animated animate__fadeIn animate__1"

pcCanva.addEventListener("mouseover", () => {
    document.body.style.cursor = "pointer";
})

pcCanva.addEventListener("mouseleave", () => {
    document.body.style.cursor = "auto";
})

pcCanva.addEventListener("click", () => {
    window.open("#projets", "_self").focus();
})

function showProject(projetID) {
    if (projetID === 1) {
        modal1.className="animate__animated animate__fadeIn animate__1"
        modal1.style.display="block";
    }

    if (projetID === 2) {
        modal2.className="animate__animated animate__fadeIn animate__1"
        modal2.style.display="block";
    }

    if (projetID === 3) {
        modal3.className="animate__animated animate__fadeIn animate__1"
        modal3.style.display="block";
    }
}

function hideProject(projetID) {
    if (projetID === 1) {
        modal1.className="empty"
        modal1.style.display="none";
    }

    if (projetID === 2) {
        modal2.className="empty"
        modal2.style.display="none";
    }

    if (projetID === 3) {
        modal3.className="empty"
        modal3.style.display="none";
    }
}

function goto(projetID) {
    if (projetID === 1) {
        window.open("https://agavras.github.io/BUILD/index.html", "_blank").focus();
    }

    if (projetID === 2) {
        window.open("https://agavras.github.io/EmbeddedBrowser/index.html", "_blank").focus();
    }

    if (projetID === 3) {
        window.open("https://agavras.github.io/Impression/index.html", "_blank").focus();
    }
}