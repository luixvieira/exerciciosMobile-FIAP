import { Veiculo } from "../interface/Veiculo";

class GerenciadorVeiculos<T extends Veiculo> {
  private listaVeiculos: T[] = [];

  adicionar(veiculo: T): void {
    this.listaVeiculos.push(veiculo);
    console.log(`${veiculo.modelo} adicionado com sucesso!`);
  }

  remover(veiculo: T): void {
    this.listaVeiculos = this.listaVeiculos.filter(v => v !== veiculo);
    console.log(`${veiculo.modelo} removido com sucesso!`);
  }

  listarVeiculos(): void {
    console.log("Lista de veículos:");
    this.listaVeiculos.forEach(veiculo => {
      console.log(`${veiculo.marca} ${veiculo.modelo} - ${veiculo.ano}`);
    });
  }
}

export { GerenciadorVeiculos };
