const leia = require('readline-sync');

const cores: string[] = [];
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
