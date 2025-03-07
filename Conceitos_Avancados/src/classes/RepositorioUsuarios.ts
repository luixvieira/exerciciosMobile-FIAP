import { Repositorio } from "../interface/RepositorioT";

// Definição da estrutura do usuário
export interface Usuario {
    nome: string;
    email: string;
}

// Implementação do Repositorio para armazenar usuários
export class RepositorioUsuarios implements Repositorio<Usuario> {
    private usuarios: Usuario[] = []; // Array privado para armazenar os usuários

    // Método para salvar um usuário na lista
    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
        console.log(`Usuário ${dado.nome} salvo com sucesso!`);
    }

    // Método para obter todos os usuários cadastrados
    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}
