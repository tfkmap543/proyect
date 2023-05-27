  //VARIABLES MODAL PARA INICIAR SESION
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
    },300)
    
});
window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalContainer) {
        modal.classList.toggle("modal-close");
        
        setTimeout(function () { //indica realizar una funcion en determinado tiempo
            modalContainer.style.opacity = "0";
            modalContainer.style.visibility = "hidden";
        }, 300)
    }
});



// VARIABLES MODAL DE REGISTRO
let cerrar_registro = document.querySelectorAll(".close_r")[0]; //creacion de la variable cerrar
let abrir_registro = document.querySelectorAll(".registro_usuario")[0];
let modal_registro = document.querySelectorAll(".modal-registro")[0]; 
let modalContregist = document.querySelectorAll(".container-registro")[0]; 
let butt_close = document.querySelectorAll(".button-close")[0];

//abrir modal registro
abrir_registro.addEventListener("click", function (e) {
  e.preventDefault(); // esta eliminando la almuadilla de la url
  modalContregist.style.opacity = "1";
  modalContregist.style.visibility = "visible";
  modal_registro.classList.toggle("modal-rclose");
});

//cerrar modal registro
cerrar_registro.addEventListener("click", function () {
  modal_registro.classList.toggle("modal-rclose");

  setTimeout(function () { //indica realizar una funcion en determinado tiempo
      modalContregist.style.opacity = "0";
      modalContregist.style.visibility = "hidden";
  },300)

});
butt_close.addEventListener("click", function () {
  modal_registro.classList.toggle("modal-rclose");

  setTimeout(function () { //indica realizar una funcion en determinado tiempo
      modalContregist.style.opacity = "0";
      modalContregist.style.visibility = "hidden";
  },300)

});


// cerrar modal registro en click fuera de ventana
window.addEventListener("click", function (e) {
    console.log(e.target)
    if (e.target == modalContregist ) {
        cerrar_registro.classList.toggle("modal-rclose");

        setTimeout(function () { //indica realizar una funcion en determinado tiempo
            modalContregist.style.opacity = "0";
            modalContregist.style.visibility = "hidden";
        }, 300)
    }
});