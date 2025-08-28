const leia = require('readline-sync');

// QUESTÃO 1

let A;
let B;
let C;


questao1();


function questao1() {
    console.log("QUESTÃO 1");
    A = leia.questionInt("Digite o valor de A: ");
    B = leia.questionInt("Digite o valor de B: ");
    C = leia.questionInt("Digite o valor de C: ");
    const soma = A + B;
    if (soma > C) {
        console.log("A soma de A + B é maior que C");
    } else if (soma < C) {
        console.log("A soma de A + B é menor a C");
    } else {
        console.log("A soma de A + B é igual a C");
    }
}


// QUESTÃO 2

let numero;
questao2();

function questao2() {
    console.log("QUESTÃO 2");
    numero = leia.questionInt("Digite um numero inteiro: ");
    if ((numero % 2 === 0) && (numero >= 0)) {
        console.log("O número é par e positivo");
    } else if ((numero % 2 === 0) && (numero < 0)) {
        console.log("O número é par e negativo");
    } else if ((numero % 2 !== 0) && (numero >= 0)) {
        console.log("O número é ímpar e positivo");
    } else {
        console.log("O número é ímpar e negativo");
    }
}


// QUESTÃO 3

let codigoProduto = leia.questionInt("Digite o codigo do produto (1 a 6): ");
let quantidade = leia.questionInt("Digite a quantidade comprada: ");
let preco;
let nomeProduto;

questao3();

function questao3() {
    console.log("QUESTÃO 3");
    switch (codigoProduto) {
        case 1:
            nomeProduto = "Cachorro Quente";
            preco = 10.00;
            break;
        case 2:
            nomeProduto = "X-Salada";
            preco = 15.00;
            break;
        case 3:
            nomeProduto = "X-Bacon";
            preco = 18.00;
            break;
        case 4:
            nomeProduto = "Bauru"
            preco = 12.00;
            break;
        case 5:
            nomeProduto = "Refrigerante";
            preco = 8.00;
            break;
        case 6:
            nomeProduto = "Suco de Laranja";
            preco = 13.00;
            break;
        default:
            console.log("Codigo inválido");
            return;
    }
    const total = preco * quantidade;
    console.log(`Você escolheu ${quantidade} unidades do ${nomeProduto}. O valor total a ser pago é R$ ${total.toFixed(2).replace('.', ',')}`);
}


//QUESTÃO 4

questao4();


function questao4() {
    console.log("questão 4");
  let numA = leia.questionFloat("Digite o valor de A: ");
  let numB = leia.questionFloat("Digite o valor de B: ");
  let operacao = leia.questionInt("Escolha a operacao: \n \n 1 - Soma \n 2 - Subtracao \n 3 - Multiplicacao \n 4 - Divisao ");

    if (operacao < 1 || operacao > 4) {
        console.log("Operacao invalida");
        return;
    }
    switch (operacao) {
        case 1:
            console.log(`A soma de ${numA} + ${numB} é ${numA + numB}`);
            break;
        case 2:
            console.log(`A subtracao de ${numA} - ${numB} é ${numA - numB}`);
            break;
        case 3:
            console.log(`A multiplicacao de ${numA} * ${numB} é ${numA * numB}`);
            break;
        case 4:
            console.log(`A divisao de ${numA} / ${numB} é ${numA / numB}`);
            break;
    }
}