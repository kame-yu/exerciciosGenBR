const leia = require('readline-sync');



//QUESTÃO 1 - COLLECTION ARRAY


questao1();

function questao1(){
const cores: Array<string> = new Array<string>();
const totalCores = 5;

console.log("Digite 5 cores:");

for (let i = 0; i < totalCores; i++) {
    let cor: string;
    do {
        cor = leia.question(`Digite a ${i + 1}ª cor: `).trim();
        if (cor === "") {
            console.log("Cor inválida! Digite novamente.");
        }
    } while (cor === "");
    cores.push(cor);
}

console.log("\nLista de cores:");
cores.forEach(c => console.log(c));

console.log("\nCores ordenadas:");
const coresOrdenadas = [...cores].sort((a, b) => a.localeCompare(b));
coresOrdenadas.forEach(c => console.log(c));
}


// QUESTÃO 2 - COLLECTION SET

questao2();

function questao2(){

const numeros: Set<number> = new Set();

console.log("\n \nDigite 10 números não repetidos:");
while (numeros.size < 10) {
    const num = parseInt(leia.question(`Digite o ${numeros.size + 1}o numero: `));
    if (!isNaN(num)) {
        if (numeros.has(num)) {
            console.log("Número repetido. Digite outro.");
        } else {
            numeros.add(num);
        }
    } else {
        console.log("Digite um número válido.");
    }
}

console.log("\nListar dados do set:");
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);
numerosOrdenados.forEach(n => console.log(n));




}
