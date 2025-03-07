let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// Função genérica para inverter um array de qualquer tipo
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse(); // Usamos slice() para evitar modificar o array original
}

// Testando a função com um array de números
const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = inverterArray(numeros);
console.log("Array original de números:", numeros);
console.log("Array invertido de números:", numerosInvertidos);

// Testando a função com um array de strings
const palavras = ["TypeScript", "é", "bem", "desafiador"];
const palavrasInvertidas = inverterArray(palavras);
console.log("Array original de strings:", palavras);
console.log("Array invertido de strings:", palavrasInvertidas);


import { RepositorioUsuarios, Usuario } from "./classes/RepositorioUsuarios";

// Criando uma instância do repositório
const repositorio = new RepositorioUsuarios();

// Criando e salvando usuários
const usuario1: Usuario = { nome: "João Silva", email: "joao@email.com" };
const usuario2: Usuario = { nome: "Maria Oliveira", email: "maria@email.com" };

repositorio.salvar(usuario1);
repositorio.salvar(usuario2);

// Obtendo e exibindo todos os usuários salvos
console.log("Lista de usuários cadastrados:");
console.log(repositorio.obterTodos());


// src/index.ts
import { processarResposta } from "./utils/processarResposta";
import { RespostaServidor } from "./types/RespostaServidor";

// Testando a função com diferentes tipos de resposta
const resposta1: RespostaServidor = "Operação concluída com sucesso!";
const resposta2: RespostaServidor = true;
const resposta3: RespostaServidor = false;

processarResposta(resposta1);
processarResposta(resposta2);
processarResposta(resposta3);



import { EstudanteTrabalhador } from "./types/EstudanteTrabalhador";

// Criando um objeto do tipo EstudanteTrabalhador
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos Mendes",
    curso: "Engenharia de Software",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
};

// Exibindo os dados no console
console.log("Dados do Estudante Trabalhador:");
console.log(`Nome: ${estudanteTrabalhador.nome}`);
console.log(`Curso: ${estudanteTrabalhador.curso}`);
console.log(`Empresa: ${estudanteTrabalhador.empresa}`);
console.log(`Cargo: ${estudanteTrabalhador.cargo}`);
