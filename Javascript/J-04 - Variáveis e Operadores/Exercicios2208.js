const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => resolve(resposta));
    });
}

//  QUESTÃO 1 
async function questao1() {
    console.log("\n Questão 1");
    const salarioInicial = Number(await questionAsync("Digite o salário inicial: "));
    const abonoSalarial = Number(await questionAsync("Digite o valor do abono: "));
    console.log(soma(salarioInicial, abonoSalarial));
}

function soma(salarioInicial, abonoSalarial) {
    return `O novo salário é: R$ ${(salarioInicial + abonoSalarial).toFixed(2).replace('.', ',')}`;
}

//  QUESTÃO 2 
async function questao2() {
    console.log("\n Questão 2");
    let notas = [];
    for (let i = 1; i <= 4; i++) {
        const notaInput = await questionAsync(`Digite a nota ${i}: `);
        notas.push(parseFloat(notaInput));
    }
    const media = calcularMedia(notas);
    console.log(`A média das notas é: ${media.toFixed(2)}`);
}

function calcularMedia(notas) {
    const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return somaNotas / notas.length;
}

//  QUESTÃO 3 
async function questao3() {
    console.log("\n Questão 3");
    const salarioBruto = parseFloat(await questionAsync(`Digite o valor do salário bruto: `));
    const descontos = parseFloat(await questionAsync(`Digite o valor dos descontos: `));
    const adicionaisNoturnos = parseFloat(await questionAsync(`Digite o valor do adicional noturno: `));
    const horasExtras = parseFloat(await questionAsync(`Digite o valor das horas extras: `));

    const salarioLiquido = salarioBruto + (horasExtras * 5) + adicionaisNoturnos - descontos;
    console.log(`O salário líquido a ser pago é R$ ${salarioLiquido.toFixed(2).replace('.', ',')}`);
}

//  QUESTÃO 4
async function questao4() {
    console.log("\n Questão 4");
    const n1 = parseFloat(await questionAsync(`Digite o valor de N1: `));
    const n2 = parseFloat(await questionAsync(`Digite o valor de N2: `));
    const n3 = parseFloat(await questionAsync(`Digite o valor de N3: `));
    const n4 = parseFloat(await questionAsync(`Digite o valor de N4: `));

    console.log(`O cálculo é: (${n1} * ${n2}) - (${n3} * ${n4})`);
    console.log(`Que resulta em ${ (n1 * n2) - (n3 * n4) }`);
}

// MENU
async function menu() {
    let opcao;
    do {
        console.log("1 - Questão 1");
        console.log("2 - Questão 2");
        console.log("3 - Questão 3");
        console.log("4 - Questão 4");
        console.log("0 - Nenhuma");


        opcao = await questionAsync("Escolha uma questão para executar:");

        switch (opcao) {
            case '1':
                await questao1();
                break;
            case '2':
                await questao2();
                break;
            case '3':
                await questao3();
                break;
            case '4':
                await questao4();
                break;
            case '0':
                console.log("Encerrado.");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '0');

    rl.close();
}

menu();
