// Definição da interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}

// Criando um objeto que implementa a interface Carro
const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex" // Essa propriedade é opcional
};

// Exibindo as informações no console
console.log("Dados do carro:");
console.log(`Marca: ${meuCarro.marca}`);
console.log(`Modelo: ${meuCarro.modelo}`);
console.log(`Ano: ${meuCarro.ano}`);
console.log(`Motor: ${meuCarro.motor ?? "Não especificado"}`); // Caso motor não esteja presente
