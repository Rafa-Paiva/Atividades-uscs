function mostrarPrimos() {
    const inicial = Number(document.getElementById("inicial").value);
    const final = Number(document.getElementById("final").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(inicial) || isNaN(final) || inicial < 0 || final < 0 || inicial > final) {
        resultado.textContent = "Por favor, digite valores válidos e certifique-se de que o valor inicial seja menor que o valor final!";
        return;
    }
    let primos = [];
    function isPrimo(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = inicial; i <= final; i++) {
        if (isPrimo(i)) {
            primos.push(i);
        }
    }
    if (primos.length > 0) {
        resultado.textContent = `Números primos entre ${inicial} e ${final}: ${primos.join(", ")}`;
    } else {
        resultado.textContent = `Não há números primos entre ${inicial} e ${final}.`;
    }
}
