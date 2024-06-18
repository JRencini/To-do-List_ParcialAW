export const cardTarea = (id, titulo, descripcion, fechaLimite, estado) => {
  let res = ``
  if (estado) {
    res = `<div class="col mb-4"> 
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  ${titulo}
                </h5>
                <p class="card-text">
                  ${descripcion}
                </p>
              </div>
              <div class="card-footer">
                <div class="d-flex justify-content-between align-items-center">
                <p class="fs-6 text-secondary mb-0">
                  Fecha limite: ${fechaLimite}
                </p>
                <button class="btn btn-danger btn-finalizarTarea" id="${id}">Finalizar tarea</button>
              </div>
              </div>
            </div>
          </div>`
    return res
  } else {
    return res
  }
}