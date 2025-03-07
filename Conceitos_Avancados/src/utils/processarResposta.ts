import { RespostaServidor } from "../types/RespostaServidor";

// Função que processa a resposta do servidor e imprime uma mensagem correspondente
export function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Servidor respondeu com uma mensagem: "${resposta}"`);
    } else if (typeof resposta === "boolean") {
        console.log(`Servidor retornou um status: ${resposta ? "Sucesso" : "Falha"}`);
    }
}
