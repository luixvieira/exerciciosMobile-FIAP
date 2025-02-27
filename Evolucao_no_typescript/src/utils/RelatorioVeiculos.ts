import { Veiculo } from "../interface/Veiculo";


// Filtra veículos por ano
function filtrarPorAno(veiculos: Veiculo[], ano: number): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.ano === ano);
}

// Filtra veículos por marca
function filtrarPorMarca(veiculos: Veiculo[], marca: string): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.marca.toLowerCase() === marca.toLowerCase());
}

// Gera um relatório formatado com detalhes de todos os veículos
function gerarRelatorio(veiculos: Veiculo[]): string {
  if (veiculos.length === 0) return "Nenhum veículo cadastrado.";

  let relatorio = "📄 Relatório de Veículos 📄\n";
  relatorio += "----------------------------------\n";

  veiculos.forEach((veiculo, index) => {
    relatorio += `#${index + 1}\n`;
    relatorio += `Marca: ${veiculo.marca}\n`;
    relatorio += `Modelo: ${veiculo.modelo}\n`;
    relatorio += `Ano: ${veiculo.ano}\n`;
    relatorio += "------------------------------\n";
  });

  return relatorio;
}

export { filtrarPorAno, filtrarPorMarca, gerarRelatorio };
