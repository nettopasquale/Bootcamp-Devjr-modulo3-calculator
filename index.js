function calcular(op) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let output = 0;

    switch (op) {
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '*': output = num1 * num2; break;
        case '/': output = num1 / num2; break;
    }

    document.getElementById("output").value = output;
}