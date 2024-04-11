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

    let history = document.getElementById("history");

    let newHistory =  `<p> ${num1} ${op} ${num2} = ${output}</p>`;

    history.innerHTML = newHistory + history.innerHTML;

    if (history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }
}
