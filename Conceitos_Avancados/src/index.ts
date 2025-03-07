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
