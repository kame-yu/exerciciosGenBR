const leia = require('readline-sync');


// QUESTÃO 1 - LAÇO REPETIÇAO FOR



questao1();

function questao1(){

let armazenarNumeros = [];
let numPares = [];
let numImpares = [];

for (let i = 1; i < 11; i++) {
    const lerNumeros = leia.questionInt(`Digite o ${i}° numero: `);
    armazenarNumeros.push(lerNumeros);

    if (lerNumeros % 2 === 0) {
        numPares.push(lerNumeros);
    } else {
        numImpares.push(lerNumeros);
    }
}

console.log(`\n Os numeros digitados foram: ${armazenarNumeros}`);
console.log(`\n \n O total de números pares é: ${numPares.length}`);
console.log(`O total de números ímpares é: ${numImpares.length} \n \n`);
}

// QUESTÃO 2 - LAÇO REPETIÇÃO WHILE


questao2();

function questao2(){

let armazenarNumeros = [];
let menoresVinteUm = [];
let maioresCinquenta = [];
let rodando:boolean = true;

while (rodando) {

    const lerNumeros = leia.questionInt(`Digite uma idade: `);

    armazenarNumeros.push(lerNumeros);

    if (lerNumeros < 0){
        rodando = false;
        armazenarNumeros.pop();
        break;
    }
    if (lerNumeros >= 50 ) {
        maioresCinquenta.push(lerNumeros);
    } else if (lerNumeros <= 21) {
        menoresVinteUm.push(lerNumeros);
    }
}

console.log(`\n Os numeros digitados foram: ${armazenarNumeros}`);
console.log(`\n \n O total de pessoas menores de 21 anos é: ${menoresVinteUm.length}`);
console.log(`O total de pessoas maiores de 50 anos é: ${maioresCinquenta.length} \n \n`);
}


// QUESTÃO 3 - DO WHILE

questao3();

function questao3(){

let armazenarNumeros = [];


do {
    var lerNumeros = leia.questionInt(`Digite uma idade: `);

    if ((lerNumeros) >= 0) {
    armazenarNumeros.push(lerNumeros);
    }
}
while (lerNumeros != 0);

const soma = armazenarNumeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(`\n A soma dos números positivos é: ${soma}`);

}


// QUESTÃO 4 - ARRAYS


questao4();

function questao4(){

let armazenaNumeros = [];
let numPares = [];
let indicesImpares = [];
let media:number;

for (let i = 1; i < 11; i++) {
    const lerNumeros = leia.questionInt(`Digite o ${i}o numero: `);
    armazenaNumeros.push(lerNumeros);
}

for (let i = 0; i < armazenaNumeros.length; i++) {
    if (armazenaNumeros[i] % 2 === 0) {
        numPares.push(armazenaNumeros[i]);
    }
    if (i % 2 !== 0) {
        indicesImpares.push(armazenaNumeros[i]);
    }
}

media = armazenaNumeros.reduce((a,b) => a+b,0) / armazenaNumeros.length;

console.log(`\n Os numeros digitados foram: ${armazenaNumeros}\n`);

console.log(`\n Elementos nos índices ímpares: ${indicesImpares} `);

console.log(`\n Elementos pares: ${numPares}`);

console.log(`\n Soma dos elementos do vetor: ${armazenaNumeros.reduce((a,b) => a+b,0)}`)

console.log(`\n A média dos elementos do vetor é: ${media}`);
}

// QUESTÃO 5 - MATRIZES]

questao5();

function questao5(){

let matrizInteiros = new Array(3);

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    matrizInteiros[indiceLinha] = Array(3);
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){

    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++){

      matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${indiceLinha}][${indiceColuna}]: `);

    }

}

console.table(matrizInteiros);

let somaDiagonalPrincipal: number = 0;
let somaDiagonalSecundaria: number = 0;

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++){
    for (let indiceColuna= 0; indiceColuna < matrizInteiros.length; indiceColuna++){
        if (indiceLinha === indiceColuna){
            somaDiagonalPrincipal += matrizInteiros[indiceLinha][indiceColuna];
        }
        if (indiceLinha + indiceColuna === matrizInteiros.length - 1){
            somaDiagonalSecundaria += matrizInteiros[indiceLinha][indiceColuna];
        }
    }
}

console.log(`\n Os elementos da diagonal principal são: `);
for (let i = 0; i < matrizInteiros.length; i++){
    console.log(matrizInteiros[i][i]);
}
console.log(`\n Os elementos da diagonal secundária são: `);
for (let i = 0; i < matrizInteiros.length; i++){
    console.log(matrizInteiros[i][matrizInteiros.length - 1 - i]);
}

console.log(`\n A soma dos elementos da diagonal principal é: ${somaDiagonalPrincipal}`);
console.log(`\n A soma dos elementos da diagonal secundária é: ${somaDiagonalSecundaria} \n`);

}