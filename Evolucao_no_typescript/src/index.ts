import { EstoqueVeiculos } from "./classes/EstoqueVeiculo";
import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos";
import { Carro } from "./interface/Carro";
import { Moto } from "./interface/Moto";

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
