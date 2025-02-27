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
