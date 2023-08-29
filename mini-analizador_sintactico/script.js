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
        case esIF(token):
            return 19;
        case esWHILE(token):
            return 20;
        case esRETURN(token):
            return 21;
        case esELSE(token):
            return 22;
        case esMON(token):
            return 23;
        case esIdentificador(token):
            return 0;
        case esEntero(token):
            return 1;
        case esNumeroReal(token):
            return 2;
        case esSuma(token):
            return 5;
        case esMultiplicacion(token):
            return 6;
        case esRelacion(token):
            return 7;
        case esOR(token):
            return 8;
        case esAND(token):
            return 9;
        case esNOT(token):
            return 10;
        case esIGUALDAD(token):
            return 11;
        case esPUNTOCOMA(token):
            return 12;
        case esCOMA(token):
            return 13;
        case esPARENTESIS_ABR(token):
            return 14;
        case esPARENTESIS_CER(token):
            return 15;
        case esLLAVE_ABR(token):
            return 16;
        case esLLAVE_CER(token):
            return 17;
        case esIGUAL(token):
            return 18;
        default:
            return -1;
    }
}

function esIF(cadena) {
    return cadena.trim() === "if" || cadena.trim() === "IF";
}
function esWHILE(cadena) {
    return cadena.trim() === "while" || cadena.trim() === "WHILE";
}
function esRETURN(cadena) {
    return cadena.trim() === "return" || cadena.trim() === "RETURN";
}
function esELSE(cadena) {
    return cadena.trim() === "else" || cadena.trim() === "ELSE";
}
function esIdentificador(cadena) {
    return /^[a-zA-Z\s][a-zA-Z0-9\s]*$/.test(cadena.trim());
}
function esNumeroReal(cadena) {
    return /^\d+\.\d+$/.test(cadena);
}
function esEntero(cadena) {
    return /^\d+$/.test(cadena);
}
function esSuma(cadena) {
    return /^[+\-]$/.test(cadena);
}
function esMultiplicacion(cadena) {
    return /^[*\/]$/.test(cadena);
}
function esRelacion(cadena) {
    return /^(<|<=|>|>=)$/.test(cadena);
}
function esOR(cadena) {
    return /^(\|\|)$/.test(cadena);
}
function esAND(cadena) {
    return /^(\&\&)$/.test(cadena);
}
function esNOT(cadena) {
    return /^(\!)$/.test(cadena);
}
function esIGUALDAD(cadena) {
    return /^(\=\=|\!\=)$/.test(cadena);
}
function esPUNTOCOMA(cadena) {
    return /^(\;)$/.test(cadena);
}
function esCOMA(cadena) {
    return /^(\,)$/.test(cadena);
}
function esPARENTESIS_ABR(cadena) {
    return /^(\()$/.test(cadena);
}
function esPARENTESIS_CER(cadena) {
    return /^(\))$/.test(cadena);
}
function esLLAVE_ABR(cadena) {
    return /^(\{)$/.test(cadena);
}
function esLLAVE_CER(cadena) {
    return /^(\})$/.test(cadena);
}
function esIGUAL(cadena) {
    return /^(\=)$/.test(cadena);
}
function esMON(cadena) {
    return /^(\$)$/.test(cadena);
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

////////////////////////