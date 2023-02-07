const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1); //parseInt transformar um número inteiro. Math.random para gerar um número entre 0-1. *100 + 1 para esse número ser entre 0-99 + 1;
}

console.log('Número Secreto:', gerarNumeroAleatorio());

const elementoMenorValor = document.getElementById('menor-valor'); 
elementoMenorValor.innerHTML = menorValor; //innerHTML muda o valor dentro da classe menor-valor

const elementoMaiorValor = document.getElementById('maior-valor'); 
elementoMaiorValor.innerHTML = maiorValor; //innerHTML muda o valor dentro da classe menor-valor