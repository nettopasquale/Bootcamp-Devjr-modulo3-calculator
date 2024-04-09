let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);


const somarBotao = document.getElementById("calculo").addEventListener("click", calcularSoma);

function calcularSoma() {
    let output = num1 + num2;

    document.getElementById("output").value = output;
}