//Pasar Paso por Paso
function mostrarPaso(paso) {
  // Ocultar todas las secciones
  document.getElementById("paso1").style.display = "none";
  document.getElementById("paso2").style.display = "none";
  document.getElementById("paso3").style.display = "none";
  document.getElementById("paso4").style.display = "none";
  document.getElementById("paso5").style.display = "none";

  // Mostrar la sección del paso actual
  document.getElementById("paso" + paso).style.display = "block";
}


//condicion de campos de regionales
function mostrarCampos() {
    var opcion = document.getElementById("opcion").value;
    var campos = document.getElementById("campos");
    
    
    if (opcion === "opcion1") {
      campos.style.display = "block"; // Mostrar los campos
    } else {
      campos.style.display = "none"; // Ocultar los campos
    }

    var opcion = document.getElementById("opcion").value;
    var campos = document.getElementById("campos1");
    if(opcion === "opcion2"){
      campos.style.display = "block"; // Mostrar los campos
    } else {
      campos.style.display = "none"; // Ocultar los campos
    }

    var opcion = document.getElementById("opcion").value;
    var campos = document.getElementById("campos2");
    if(opcion === "opcion3"){
      campos.style.display = "block"; // Mostrar los campos
    } else {
      campos.style.display = "none"; // Ocultar los campos
    }

    var opcion = document.getElementById("opcion").value;
    var campos = document.getElementById("campos3");
    if(opcion === "opcion4"){
      campos.style.display = "block"; // Mostrar los campos
    } else {
      campos.style.display = "none"; // Ocultar los campos
    }

    var opcion = document.getElementById("opcion").value;
    var campos = document.getElementById("campos4");
    if(opcion === "opcion5"){
      campos.style.display = "block"; // Mostrar los campos
    } else {
      campos.style.display = "none"; // Ocultar los campos
    }
}

//Mostrar Segun la palabra que se escriba subserie
function mostrarCampos1() {
    var valor = document.getElementById("entrada").value;
    if (valor === "Posventa") {
      document.getElementById("campos6").style.display = "block";
    } else {
      document.getElementById("campos6").style.display = "none";
    }

    if (valor === "Cambio") {
        document.getElementById("campos7").style.display = "block";
      } else {
        document.getElementById("campos7").style.display = "none";
      }

      if (valor === "Traspasos") {
        document.getElementById("campos8").style.display = "block";
      } else {
        document.getElementById("campos8").style.display = "none";
      }

      if (valor === "Seguro") {
        document.getElementById("campos9").style.display = "block";
      } else {
        document.getElementById("campos9").style.display = "none";
      }

      if (valor === "Servicio") {
        document.getElementById("campos10").style.display = "block";
      } else {
        document.getElementById("campos10").style.display = "none";
      }

      if (valor === "Formato") {
        document.getElementById("campos11").style.display = "block";
      } else {
        document.getElementById("campos11").style.display = "none";
      }

      if (valor === "Declaracion") {
        document.getElementById("campos12").style.display = "block";
      } else {
        document.getElementById("campos12").style.display = "none";
      }

      if (valor === "Cancelacion") {
        document.getElementById("campos13").style.display = "block";
      } else {
        document.getElementById("campos13").style.display = "none";
      }

      if (valor === "Cesion") {
        document.getElementById("campos14").style.display = "block";
      } else {
        document.getElementById("campos14").style.display = "none";
      }

      if (valor === "Debitos") {
        document.getElementById("campos15").style.display = "block";
      } else {
        document.getElementById("campos15").style.display = "none";
      }

      if (valor === "Devolucion") {
        document.getElementById("campos16").style.display = "block";
      } else {
        document.getElementById("campos16").style.display = "none";
      }

      if (valor === "Inscribime") {
        document.getElementById("campos17").style.display = "block";
      } else {
        document.getElementById("campos17").style.display = "none";
      }

      if (valor === "Pagos") {
        document.getElementById("campos18").style.display = "block";
      } else {
        document.getElementById("campos18").style.display = "none";
      }

      if (valor === "Retiro") {
        document.getElementById("campos19").style.display = "block";
      } else {
        document.getElementById("campos19").style.display = "none";
      }
  }
