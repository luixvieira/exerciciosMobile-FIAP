let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

//Exercicio 1

// Criando o array com tipagem
const numeros: number[] = [10, 20, 30, 40, 50];

// Função para somar os valores do array
const soma = (numeros: number[]): number => {
    return numeros.reduce((acc, num) => acc + num, 0);
}

// Print
console.log(`A soma dos valores é: ${soma(numeros)}`);
