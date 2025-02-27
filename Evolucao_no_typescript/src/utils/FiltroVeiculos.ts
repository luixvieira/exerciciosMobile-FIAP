import { Veiculo } from "../interface/Veiculo";


// Filtra veículos por ano
function filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.ano === ano);
}

// Filtra veículos por marca
function filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}

export { filtrarPorAno, filtrarPorMarca };
