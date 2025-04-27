function calcularFatorial() {
    const numero = Number(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 0) {
        resultado.textContent = "digite um número válido maior ou igual a 0!";
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.textContent = `O fatorial de ${numero} é ${fatorial}.`;
}
