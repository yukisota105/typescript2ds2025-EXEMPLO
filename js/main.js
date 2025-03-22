"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoAno = document.getElementById("campoAno");
    const campoCodigo = document.getElementById("campoCodigo");
    const campoDeposito = document.getElementById("campoDeposito");
    const campoCompra = document.getElementById("campoCompra");
    const btnComprar = document.getElementById("comprar");
    const btnDeposito = document.getElementById("deposito");
    let p;
    calc.addEventListener("click", () => {
        p = new empresa.Cliente(parseInt(campoCodigo.value));
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoAno.value);
        p.deposita(200);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
        document.getElementById("codigo").textContent = p.codigo.toString();
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    btnDeposito.addEventListener("click", () => {
        p.deposita(parseFloat(campoDeposito.value));
        document.getElementById("saldo").textContent = p.saldo.toString();
    });
    btnComprar.addEventListener("click", () => {
        if (p.comprar(parseFloat(campoCompra.value))) {
            document.getElementById("saldo").textContent = p.saldo.toString();
            alert("obrigado pela compra! S2");
        }
        else {
            alert("saldo insuficiente seu pobre");
        }
    });
})(empresa || (empresa = {}));
