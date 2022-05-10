let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function reset(){

    inputAdultos.value = "";
    inputCriancas.value = "";
    inputDuracao.value = "";
    resultado.innerHTML = "";
}

function calcular() {
    //console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCervejas = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de carnes.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCervejas / 355)} Latas de cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Bebidas.</p>`
   
    //console.log(qtdTotalCarne);

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2400;
    } else {
        return 1400;
    }

}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}


