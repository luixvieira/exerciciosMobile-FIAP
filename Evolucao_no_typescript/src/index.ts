import { EstoqueVeiculos } from "./classes/EstoqueVeiculo";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";
import { Veiculo } from "./interface/Veiculo";
import { filtrarPorAno, filtrarPorMarca } from "./utils/FiltroVeiculos";
import { gerarRelatorio } from "./utils/RelatorioVeiculos";

// Criando gerenciadores
const gerenciadorCarros = new GerenciadorVeiculos<Carro>();
const gerenciadorMotos = new GerenciadorVeiculos<Moto>();

// Criando veículos
const carro1: Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
  portas: 4,
  acelerar: () => "O carro está acelerando!"
};

const carro2: Carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2022,
  portas: 4,
  acelerar: () => "O carro está acelerando!"
};

const moto1: Moto = {
  marca: "Yamaha",
  modelo: "MT-07",
  ano: 2022,
  cilindradas: 689,
  acelerar: () => "A moto está acelerando!"
};

// Adicionando veículos
gerenciadorCarros.adicionar(carro1);
gerenciadorCarros.adicionar(carro2);
gerenciadorMotos.adicionar(moto1);

// Listando veículos
gerenciadorCarros.listarVeiculos();
gerenciadorMotos.listarVeiculos();

// Removendo um veículo
gerenciadorCarros.remover(carro1);

// Listando novamente após remoção
gerenciadorCarros.listarVeiculos();

// Criando um estoque para carros e motos
const estoqueCarros = new EstoqueVeiculos();
const estoqueMotos = new EstoqueVeiculos();

// Adicionando veículos ao estoque
estoqueCarros.adicionarEstoque("Corolla", 5);
estoqueCarros.adicionarEstoque("Civic", 3);
estoqueMotos.adicionarEstoque("MT-07", 2);
estoqueMotos.adicionarEstoque("CB 500X", 4);

// Consultando estoque
estoqueCarros.consultarEstoque("Corolla");
estoqueCarros.consultarEstoque("Civic");
estoqueMotos.consultarEstoque("MT-07");
estoqueMotos.consultarEstoque("CB 500X");

// Removendo um veículo do estoque
estoqueCarros.removerEstoque("Civic");
estoqueMotos.removerEstoque("MT-07");

// Consultando estoque novamente após remoção
estoqueCarros.consultarEstoque("Civic");
estoqueMotos.consultarEstoque("MT-07");

// Criando lista de veículos
const veiculos: Veiculo[] = [
  { marca: "Toyota", modelo: "Corolla", ano: 2023, acelerar: () => "Acelerando o Corolla!" },
  { marca: "Honda", modelo: "Civic", ano: 2022, acelerar: () => "Acelerando o Civic!" },
  { marca: "Yamaha", modelo: "MT-07", ano: 2022, acelerar: () => "Acelerando a MT-07!" },
  { marca: "Toyota", modelo: "Hilux", ano: 2021, acelerar: () => "Acelerando a Hilux!" },
  { marca: "Honda", modelo: "Fit", ano: 2023, acelerar: () => "Acelerando o Fit!" }
];

// Testando filtragem por ano
const veiculos2023 = filtrarPorAno(veiculos, 2023);
console.log("Veículos do ano 2023:");
console.log(veiculos2023);

// Testando filtragem por marca
const veiculosHonda = filtrarPorMarca(veiculos, "Honda");
console.log("Veículos da marca Honda:");
console.log(veiculosHonda);

// Criando lista de veículos
const listaveiculos: Veiculo[] = [
  { marca: "Toyota", modelo: "Corolla", ano: 2023, acelerar: () => "Acelerando o Corolla!" },
  { marca: "Honda", modelo: "Civic", ano: 2022, acelerar: () => "Acelerando o Civic!" },
  { marca: "Yamaha", modelo: "MT-07", ano: 2022, acelerar: () => "Acelerando a MT-07!" },
  { marca: "Toyota", modelo: "Hilux", ano: 2021, acelerar: () => "Acelerando a Hilux!" },
  { marca: "Honda", modelo: "Fit", ano: 2023, acelerar: () => "Acelerando o Fit!" }
];

// Gerando e exibindo o relatório
const relatorio = gerarRelatorio(listaveiculos);
console.log(relatorio);