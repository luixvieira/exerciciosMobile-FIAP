// Definição da interface genérica Repositorio<T>
export interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

