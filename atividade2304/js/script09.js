function converterHoras() {
    const horas = Number(document.getElementById("horas").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(horas) || horas < 0) {
        resultado.textContent = "Por favor, digite um número válido de horas!";
        return;
    }

    const minutos = horas * 60;
    const segundos = minutos * 60;
    resultado.textContent = `${horas} horas equivalem a ${minutos} minutos ou ${segundos} segundos.`;
}
