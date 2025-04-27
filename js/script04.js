function somarPares() {
    const limite = Number(document.getElementById("limite").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(limite) || limite < 1) {
        resultado.textContent = "Por favor, digite um número válido maior que 0!";
        return;
    }

    let soma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    resultado.textContent = `A soma dos números pares de 1 até ${limite} é ${soma}.`;
}
