let historial = [];

//                                                                       DIVIDIR Y ANALIZAR TOKENS
function analizar() {
    const inputText = document.getElementById("inputText").value;
    const tokens = inputText.split(/\s+/);
    const nuevosTokens = [];

    for (const token of tokens) {
        const tipoToken = determinarTipoToken(token);
        nuevosTokens.push({ token, tipoToken });
    }
    historial = nuevosTokens; 
    const tablaResultado = document.getElementById("tablaResultado");
    tablaResultado.style.display = "block";
    const tableBody = tablaResultado.querySelector("tbody");
    actualizarTabla(tableBody);
}
//                                                                       DIVIDIR Y ANALIZAR TOKENS

//                                                                       SABER EL TIPO DE LA CADENA
function determinarTipoToken(token) {
    switch (true) {
        case esIdentificador(token):
            return 0;
        case esNumeroReal(token):
            return 2;
        default:
            return -1;
    }
}

function esIdentificador(cadena) {
    return /^[a-zA-Z\s][a-zA-Z0-9\s]*$/.test(cadena.trim());
}
function esNumeroReal(cadena) {
    return /^\d+\.\d+$/.test(cadena);
}
//                                                                       SABER EL TIPO DE LA CADENA

//                                                                       ACTUALIZAR TABLA
function actualizarTabla(tableBody) {
    tableBody.innerHTML = "";
    for (const item of historial) {
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.token;
        cell2.textContent = item.tipoToken;
    }
}
//                                                                       ACTUALIZAR TABLA

//                                                                       LIMPIAR TABLA, OCULTA LA TABLA Y LIMPIA EL CAMPO DE TEXTO
function limpiarTabla() {
    const tableBody = document.querySelector("#tablaResultado tbody");
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    const tablaResultado = document.getElementById("tablaResultado");
    tablaResultado.style.display = "none";
    const inputText = document.getElementById("inputText");
    inputText.value = "";
}
//                                                                       LIMPIAR TABLA, OCULTA LA TABLA Y LIMPIA EL CAMPO DE TEXTO

//                                                                       FUNCIONE LA CONSULTA DANDO ENTER
function handleKeyPress(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        analizar();
    }
}
//                                                                       FUNCIONE LA CONSULTA DANDO ENTER
