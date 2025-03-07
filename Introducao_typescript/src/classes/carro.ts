class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirInformacoes(): void {
        console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota", "Corolla", 2022);

// Exibindo as informações do carro
meuCarro.exibirInformacoes();
