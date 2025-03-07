// Definição da interface Multiplicacao
interface Multiplicacao {
    (a: number, b: number): number;
}

// Implementação da função de multiplicação seguindo a interface
const multiplicar: Multiplicacao = (a, b) => a * b;

// Testando a função com diferentes valores
console.log(multiplicar(2, 3)); // Saída: 6
console.log(multiplicar(5, 4)); // Saída: 20
console.log(multiplicar(10, 0)); // Saída: 0
console.log(multiplicar(-2, 8)); // Saída: -16
console.log(multiplicar(7.5, 2)); // Saída: 15
