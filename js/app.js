let listaTareas = [];
let contador = 1;

const botonAgregarTarea = document.getElementById("btnAgregarTarea");
const nombreTarea = document.getElementById("inputTarea");
const nombrePersona = document.getElementById("inputNombre");
const tablaTareas = document.getElementById("tablaBody");

botonAgregarTarea.disabled = true;

nombreTarea.addEventListener("keyup", validarInputs);

nombrePersona.addEventListener("keyup", validarInputs);

function validarInputs(){
    if(nombreTarea.value.trim() !== "" && nombrePersona.value.trim() !== ""){
        botonAgregarTarea.disabled = false;
    } else if(nombreTarea.value.trim() == "" || nombrePersona.value.trim() == ""){
        botonAgregarTarea.disabled = true;
    }
}

function inyectar(){
    tablaTareas.innerHTML = "";
    for (let i = 0; i < listaTareas.length; i++) {
      tablaTareas.innerHTML += `
              <tr>
                  <th class="text-center">${listaTareas[i].id}</th>
                  <td class="text-center">${listaTareas[i].nombreTarea}</td>
                  <td class="text-center">${listaTareas[i].nombrePersona}</td>
                  <td class="text-center"><button class="btn btn-danger" onclick="eliminarTarea(${listaTareas[i].id})"
                  )}>Eliminar</button></td>
              </tr>
          `;
    }
}

function eliminarTarea(idTarea) {
  listaTareas = listaTareas.filter((t) => Number(t.id) !== Number(idTarea));
  inyectar();
}

class Tarea {
  constructor(nombreTarea, nombrePersona) {
    this.nombreTarea = nombreTarea;
    this.nombrePersona = nombrePersona;
    this.id = contador;
  }
}


botonAgregarTarea.addEventListener("click", () => {
  listaTareas.push(new Tarea(nombreTarea.value, nombrePersona.value));
  contador++;
  inyectar();
});