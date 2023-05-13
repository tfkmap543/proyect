let cerrar = document.querySelectorAll(".close")[0]; //creacion de la variable cerrar
let abrir = document.querySelectorAll(".tipo_usuario")[0]; // se crea la variable abrir, indicando el elemento a primir para abrir el modal
let modal = document.querySelectorAll(".modal-login")[0]; // variable que se usara para llamar al modal
let modalContainer = document.querySelectorAll(".modal-container-login")[0]; //variable que se usara para llamar al contenedor del modal

abrir.addEventListener("click", function (e) {
    e.preventDefault(); // esta eliminando la almuadilla de la url
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function () {
    modal.classList.toggle("modal-close");

    setTimeout(function () { //indica realizar una funcion en determinado tiempo
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    },600)

});
window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalContainer) {
        modal.classList.toggle("modal-close");

        setTimeout(function () { //indica realizar una funcion en determinado tiempo
            modalContainer.style.opacity = "0";
            modalContainer.style.visibility = "hidden";
        }, 600)
    }
});