

// Array para almacenar los registros
let registros = [];

// Función para mostrar el formulario de registro y ocultar la tabla
function mostrarFormulario() {
    document.getElementById("formularioRegistro").style.display = "block";
    document.getElementById("tablaRegistro").style.display = "none";
}

// Función para mostrar la tabla de registros y ocultar el formulario
function mostrarRegistros() {
    document.getElementById("formularioRegistro").style.display = "none";
    document.getElementById("tablaRegistro").style.display = "block";
    // Generar la tabla de registros
    generarTablaRegistros();
}

// Función para agregar un registro al array cuando se hace clic en el botón "Agregar"
function agregarRegistro() {
    const codigo = document.getElementById("codigo").value;
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    const unidades = document.getElementById("unidades").value;
    const stock = document.getElementById("stock").value;
    const precio = document.getElementById("precio").value;

    if (codigo && descripcion && fecha && unidades && stock && precio) {
        const registro = { codigo, descripcion, fecha, unidades, stock, precio };
        registros.push(registro);
        alert("Registro agregado con éxito.");
        // Limpiar el formulario después de agregar un registro
        document.getElementById("codigo").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("unidades").value = "Unidades";
        document.getElementById("stock").value = "";
        document.getElementById("precio").value = "";
    } else {
        alert("Debes llenar todos los campos para agregar un registro.");
    }
}

// Función para generar la tabla de registros
function generarTablaRegistros() {
    const tablaRegistro = document.querySelector("#tablaRegistro table");
    tablaRegistro.innerHTML = `
        <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Fecha de Ingreso</th>
            <th>Unidades medida</th>
            <th>Stock</th>
            <th>Precio Unitario</th>
        </tr>
        ${registros.map(registro => `
            <tr>
                <td>${registro.codigo}</td>
                <td>${registro.descripcion}</td>
                <td>${registro.fecha}</td>
                <td>${registro.unidades}</td>
                <td>${registro.stock}</td>
                <td>${registro.precio}</td>
            </tr>
        `).join('')}
    `;
}
