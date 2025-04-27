function validarCPF() {
    const cpf = document.getElementById("cpf").value.replace(/[^\d]/g, '');
    const resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || isNaN(cpf)) {
        resultado.textContent = "CPF inválido! Certifique-se de digitar 11 números.";
        return;
    }

    const cpfsInvalidos = [
        "00000000000", "11111111111", "22222222222", "33333333333", "44444444444", 
        "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"
    ];
    if (cpfsInvalidos.includes(cpf)) {
        resultado.textContent = "Este CPF é inválido!";
        return;
    }let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * (10 - i);
    }
    let digito1 = 11 - (soma % 11);
    if (digito1 >= 10) digito1 = 0;
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * (11 - i);
    }
    let digito2 = 11 - (soma % 11);
    if (digito2 >= 10) digito2 = 0;
    if (parseInt(cpf[9]) === digito1 && parseInt(cpf[10]) === digito2) {
        resultado.textContent = "CPF válido!";
    } else {
        resultado.textContent = "CPF inválido!";
    }
}
