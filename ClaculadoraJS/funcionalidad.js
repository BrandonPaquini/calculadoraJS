var operandoa;
var operandob;
var operacion;

function init (){
    var resultado = document.getElementById("resultado");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplicacion = document.getElementById("multiplicacion");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var resta = document.getElementById("resta");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var cero = document.getElementById("cero");
    var suma = document.getElementById("suma");

    //manejar los eventos

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operacion = "";
    operandoa = 0;
    operandob = 0;
}

function resolver(){
    var res = 0;
    switch(operacion){

        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob)
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
            break;
            
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob)
            break;
            
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob)
            break;
    }
    resetear();
    resultado.textContent = res;
}


}

