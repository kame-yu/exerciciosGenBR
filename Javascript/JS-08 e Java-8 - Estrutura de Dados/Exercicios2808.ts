import { Queue } from './../../queue';
import { Stack } from './../../stack';
const leia = require('readline-sync');



// QUESTÃO 1 - FILA (QUEUE)

//questao1();

function questao1(){
const fila = new Queue<String>();
let nomeCliente:string;


while(true){
switch (leia.question("\n \n Escolha uma opcao:\n1 - Adicionar cliente na fila\n2 - Remover cliente da fila\n3 - Exibir lista de espera\n4 - Exibir quantidade de pessoas na lista de espera\n5 - Limpar fila\n6 - Sair\nOpcao: ")){
    case '1':
        nomeCliente = leia.question("Digite o nome do cliente para adicionar na fila: ");
        fila.enqueue(nomeCliente);
        console.log("\nSucesso! Cliente adicionado na fila.\n");
        console.log("Fila atual: \n");
        fila.printQueue();
        break;

    case '2':

        if (fila.isEmpty()) {
            console.log("A fila está vazia. Nenhum cliente para remover.");
            break

        }

        else {
        console.log("\nÉ a sua vez, " + fila.dequeue());

        console.log("\n Fila atual: \n");
        fila.printQueue();
        break;
        }

    case '3':
        console.log("\nLista de espera: ");
        fila.printQueue();
        break;
    
    case '4':
        console.log("\nPessoas na lista de espera: " + fila.count());
        break;

    case '5':
        fila.clear()
        console.log("Fila limpa com sucesso." );
        break;
    
    case '6':
        console.log("Saindo...");
        process.exit(0);
        break;

    default:
        console.log("Opção inválida!");
        break;
}
}
}


//QUESTÃO 2 - PILHA


questao2();

function questao2(){

const pilha = new Stack<string>();

while(true){
switch (leia.question("\n \n Escolha uma opcao:\n1 - Adicionar livro na pilha\n2 - Listar todos os livros\n3 - Retirar livro da pilha\n4 - Sair\nOpcao: ")){
    case '1':
        let nomeLivro = leia.question("Digite o nome do livro para adicionar na pilha: ");
        pilha.push(nomeLivro);
        console.log("Livro adicionado com sucesso.");
        console.log("\nLista atual de livros na pilha: ");
        pilha.printStack();
        break;

    case '2':
            console.log("\nLista de livros na pilha: ");
            pilha.printStack();
            break;

    case '3':
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia. Nenhum livro para retirar.");
            }
            else {
            console.log("\nLivro retirado da pilha: " + pilha.pop());
            console.log("\nLista atual de livros na pilha: ");
            pilha.printStack();
            }
            break;
    case '4':
        console.log("Saindo...");
        process.exit(0);
        break;

    default:
        console.log("Opção inválida!");
        break;
}
}
}