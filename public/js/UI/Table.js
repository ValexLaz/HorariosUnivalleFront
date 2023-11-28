class Table {

    constructor({
      container = ""
    }) {
      this.container = document.getElementById(container);
    }

    static addRowToTable() {

    }

    generarTablaDesdeJSON({
      jsonData = {},
      withActionsCRUD = true,
      returnTableHtml = false
    } = {}) {
      if (!jsonData || !jsonData || !Array.isArray(jsonData) || jsonData.length === 0) {
        return "No se encontraron datos válidos.";
      }
      delete jsonData[0].__v;
      let columnas = Object.keys(jsonData[0])
      columnas = columnas.filter(elemento => elemento !== "_id");
      let tablaHTML = '<div class="table-responsive mt-3"><table  class="table table-striped table-hover table-bordered"><thead id="table_data" ><tr>';

      columnas.forEach((columna) => {
        tablaHTML += `<th>${columna}</th>`;
      });

      if (withActionsCRUD) tablaHTML += '<th>:</th>';

      jsonData.forEach((fila, index) => {
        tablaHTML += `<tr id="${fila._id}">`;
        columnas.forEach((columna) => {
          tablaHTML += `<td class="editable fs-6"  contenteditable="false">${fila[columna]}</td>`; // Bootstrap 5
        });
        if (withActionsCRUD) {
          tablaHTML += `<td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="accionesDropdown${index}" data-bs-toggle="dropdown" aria-expanded="false">
                  :
                </button>
                <ul class="dropdown-menu" aria-labelledby="accionesDropdown${index}">
                  <li><a class="dropdown-item editar" href="#">Editar</a></li>
                  <li><a class="dropdown-item eliminar" href="#">Eliminar</a></li>
                  <li><a class="dropdown-item guardar" href="#">Guardar</a></li>
                </ul>
              </div>
            </td>`;
        }
        tablaHTML += '</tr>';
      });
      tablaHTML += '</tbody></table>';
      tablaHTML += '</div>';
      if (returnTableHtml) return tablaHTML;
      this.container.innerHTML = tablaHTML;
    }

    addRowToTable(jsonData) {
      // Asegurarse de que jsonData sea un objeto y no un array.
      if (typeof jsonData !== 'object' || Array.isArray(jsonData)) {
        return "El dato proporcionado no es un objeto JSON válido.";
      }

      const $tabla = $('#table_data');
      if ($tabla.length === 0) {
        return "Tabla no encontrada.";
      }

      let nuevaFila = `<tr id="${jsonData._id}"> `;
      delete jsonData._id;
      delete jsonData.__v;
      const columnas = Object.keys(jsonData);
      columnas.forEach(columna => {
        nuevaFila += `<td class="editable fs-6">${jsonData[columna]}</td>`; // Añadir las clases como en las otras filas
      });

      // Agregar la celda con el menú desplegable
      nuevaFila += `
        <td>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="accionesDropdown${$tabla.find('tbody tr').length}" data-bs-toggle="dropdown" aria-expanded="false">
                  :
                </button>
                <ul class="dropdown-menu" aria-labelledby="accionesDropdown${$tabla.find('tbody tr').length}">
                    <li><a class="dropdown-item editar" href="#">Editar</a></li>
                    <li><a class="dropdown-item eliminar" href="#">Eliminar</a></li>
                    <li><a class="dropdown-item guardar" href="#">Guardar</a></li>
                </ul>
            </div>
        </td>
    `;
      nuevaFila += '</tr>';

      $tabla.append(nuevaFila);
    }

    deleteTable() {
      this.container.innerHTML = " "
    }

  }
export default Table;