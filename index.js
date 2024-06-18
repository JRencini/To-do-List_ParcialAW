import { cardTarea } from "./components/cardTarea.js"

const formNewTarea = document.getElementById('newTarea')

function obtenerTarea() {
  if (localStorage.getItem('tareasData')) {
    const tareas = JSON.parse(localStorage.getItem('tareasData'))
    return tareas
  }
  else {
    return []
  }
}

function mostrarTareas() {
  const tareas = obtenerTarea();
  const listaTareas = document.getElementById('tareasContainer');
  listaTareas.innerHTML = '';

  tareas.forEach(tarea => {
    const newCardTarea = cardTarea(tarea.id, tarea.titulo, tarea.descripcion, tarea.fechaLimite, tarea.estado)
    listaTareas.innerHTML += newCardTarea;
  })
}

formNewTarea.addEventListener('submit', (e) => {
  let titulo = document.getElementById('titulo').value
  let descripcion = document.getElementById('descripcion').value
  let fechaLimite = document.getElementById('fechaLimite').value
  let estado = true

  const tareas = JSON.parse(localStorage.getItem('tareasData')) || [];
  const newIndex = tareas.length 

  const newTarea = {id: newIndex ,titulo: titulo, descripcion: descripcion, fechaLimite: fechaLimite, estado: estado};
  tareas.push(newTarea);
  localStorage.setItem('tareasData', JSON.stringify(tareas))
  mostrarTareas()
})

document.addEventListener('DOMContentLoaded', () => {
  mostrarTareas()
  document.getElementById('tareasContainer').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-finalizarTarea')) {
      const tareaId = e.target.getAttribute('id');
      finalizarTarea(tareaId);
    }
  });
})

function finalizarTarea(id) {
  let tareas = obtenerTarea();
  tareas = tareas.map(tarea => {
    if (tarea.id == id) {
      tarea.estado = false;
    }
    return tarea
  })
  localStorage.setItem('tareasData', JSON.stringify(tareas))
  mostrarTareas()
}

