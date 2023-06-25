var Numero1;
var Numero2;
var Operar;
function init(){
    //Vamos a llamar a los componentes variables 
    var resultado = document.getElementById("resultado");
    var borrar = document.getElementById("borrar");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //Acciones al seleccionar un boton seleccionado
    uno.onclick=function(e){
        resultado.textContent = resultado.textContent + "1";
        
    }
    dos.onclick=function(e){
        resultado.textContent = resultado.textContent + "2";
        
    }
    tres.onclick=function(e){
        resultado.textContent = resultado.textContent + "3";
        
    }
    cuatro.onclick=function(e){
        resultado.textContent = resultado.textContent + "4";
        
    }
    cinco.onclick=function(e){
        resultado.textContent = resultado.textContent + "5";
        
    }
    seis.onclick=function(e){
        resultado.textContent = resultado.textContent + "6";
        
    }
    siete.onclick=function(e){
        resultado.textContent = resultado.textContent + "7";
        
    }
    ocho.onclick=function(e){
        resultado.textContent = resultado.textContent + "8";
        
    }
    nueve.onclick=function(e){
        resultado.textContent = resultado.textContent + "9";
        
    }
    cero.onclick=function(e){
        resultado.textContent = resultado.textContent + "0";
        
    }

    borrar.onclick=function(e){
        borrar();
        
    }
    suma.onclick = function(e){
        Numero1= resultado.textContent;
        Operar = "+";
        limpiar();
    }
    resta.onclick = function(e){
        Numero1= resultado.textContent;
        Operar = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        Numero1= resultado.textContent;
        Operar = "*";
        limpiar();
    }
    division.onclick = function(e){
        Numero1= resultado.textContent;
        Operar = "/";
        limpiar();
    }
    igual.onclick = function(e){
        Numero2= resultado.textContent;
        
        resolver();
    }
   
}

function limpiar(){
    resultado.textContent= "";
}
function borrar(){
    resultado.textContent = "";
    Numero1 = 0;
    Numero2 = 0;
    Operar = "";

}
function resolver(){
    var res = 0;
    switch(Operar){
        case "+":
            res = parseFloat(Numero1) + parseFloat (Numero2);
            break;
        case "-":
            res = parseFloat(Numero1) - parseFloat (Numero2);
            break;
        case "*":
            res = parseFloat(Numero1) * parseFloat (Numero2);
            break;
        case "/":
            res = parseFloat(Numero1) / parseFloat (Numero2);
            break;
    }
    borrar();
    resultado.textContent = res;
}