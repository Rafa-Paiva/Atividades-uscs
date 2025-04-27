const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarChute() {
    const tentativa = Number(document.getElementById("tentativa").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
        resultado.textContent = "Por favor, digite um número válido entre 1 e 10!";
        return;
    }

    if (tentativa === numeroSecreto) {
        resultado.textContent = "Parabéns! Você acertou o número!";
    } else if (tentativa < numeroSecreto) {
        resultado.textContent = "Tente um número maior.";
    } else {
        resultado.textContent = "Tente um número menor.";
    }
}
