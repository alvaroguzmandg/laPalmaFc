//Funcniones video
function verVideo() {
    document.getElementById("videoFabio").style.display = "flex";
}

function cerrarVideo() {
    document.getElementById("videoFabio").style.display = "none";
}

//Funciones Waitlist Rules
function verLightbox() {
    event.preventDefault()
    document.getElementById("basicLightbox").style.display = "block";

}

function ocultarLightbox() {
    document.getElementById("basicLightbox").style.display = "none";
}