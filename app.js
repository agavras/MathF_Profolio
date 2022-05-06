const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');

//Rive anim page contact
new rive.Rive({
    src: '/morphtest.riv',
    canvas: document.getElementById('canvas'),
    autoplay: true,
    layout: new rive.Layout({fit: 'none', alignment: 'center'}),
})

//affiche la modal projet 1 ou 2 ou 3
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

//cache la modal projet 1 ou 2 ou 3
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