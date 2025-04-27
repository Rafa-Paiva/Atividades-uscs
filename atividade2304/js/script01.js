function calcularMedia() {
    const n1 = Number(document.getElementById("nota1").value);
    const n2 = Number(document.getElementById("nota2").value);
    const n3 = Number(document.getElementById("nota3").value);
    
    const media = (n1 + n2 + n3) / 3;
    let status = "";

    if (media >= 7) {
        status = "aprovado";
    } else {
        status = "reprovado";
    }

    document.getElementById('resultado').innerHTML = `Média: ${media.toFixed(2)} - ${status}`;
}
